import React, { useRef, useEffect, useCallback } from 'react';
import { ref, remove } from 'firebase/database';
import { database } from '../../config/firebase';
import { useDrawStore, useAdminConfigStore, useEditorStore } from '../../store';
// import { DrawObject } from '../../types';
import { lwwCreateDrawObject } from '../../utils/lww';

interface DrawLayerProps {
  isViewPage?: boolean;
}

const DrawLayer: React.FC<DrawLayerProps> = ({ /* isViewPage = false */ }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const autoSwitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // 성능 최적화를 위한 ref들
  const animationFrameRef = useRef<number | null>(null);
  const pendingPointsRef = useRef<number[]>([]);
  const lastRenderTimeRef = useRef<number>(0);
  const isRenderingRef = useRef<boolean>(false);
  
  const autoSwitchDelay = 2000; // 2초
  
  const { 
    currentStroke, 
    isDrawing, 
    penColor,
    penWidth,
    addPoint: originalAddPoint, 
    startStroke, 
    endStroke, 
    clearCurrentStroke,
    updateLastActionTime
  } = useDrawStore();
  
  const { drawObjects, settings } = useAdminConfigStore();
  const { currentTool, setCurrentTool } = useEditorStore();

  // 설정이 로드되지 않았을 때 기본값 제공
  const autoToolSwitchEnabled = settings?.admin?.autoToolSwitch ?? true;

  // 자동 도구 전환 함수
  const scheduleAutoSwitch = useCallback(() => {
    // 자동 도구 전환이 비활성화되어 있으면 실행하지 않음
    if (!autoToolSwitchEnabled) {
      return;
    }
    
    // 기존 타이머 취소
    if (autoSwitchTimeoutRef.current) {
      clearTimeout(autoSwitchTimeoutRef.current);
    }
    
    // 새 타이머 설정 (기본 지연시간 사용)
    autoSwitchTimeoutRef.current = setTimeout(() => {
      if (currentTool === 'pen' || currentTool === 'eraser') {
        console.log('DrawLayer: Auto-switching to select tool');
        setCurrentTool('select');
      }
    }, autoSwitchDelay);
  }, [autoSwitchDelay, currentTool, setCurrentTool, autoToolSwitchEnabled]);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (autoSwitchTimeoutRef.current) {
        clearTimeout(autoSwitchTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Canvas 좌표 변환 함수
  const getCanvasCoordinates = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('DrawLayer: Canvas ref not found');
      return { x: 0, y: 0 };
    }

    // DrawLayer가 독립적으로 배치되었으므로 Canvas의 getBoundingClientRect를 직접 사용
    const canvasRect = canvas.getBoundingClientRect();
    
    // Canvas 내에서의 상대 좌표 계산
    const relativeX = clientX - canvasRect.left;
    const relativeY = clientY - canvasRect.top;
    
    // Canvas의 실제 표시 크기와 원본 크기 비율 계산
    const scaleX = 2160 / canvasRect.width;
    const scaleY = 3840 / canvasRect.height;
    
    // 변환된 좌표 반환
    const coords = {
      x: relativeX * scaleX,
      y: relativeY * scaleY
    };
    
    // 디버깅 로그 간소화 (필요시에만)
    if (coords.x < 0 || coords.y < 0 || coords.x > 2160 || coords.y > 3840) {
      console.log('DrawLayer: Coordinates out of bounds', coords, 'from client', { clientX, clientY });
    }
    
    return coords;
  }, []);

  // 쓰로틀된 addPoint 함수 (16ms = 60fps)
  const throttledAddPoint = useCallback((x: number, y: number) => {
    pendingPointsRef.current.push(x, y);
    
    if (!isRenderingRef.current) {
      isRenderingRef.current = true;
      
      const render = (currentTime: number) => {
        // 16ms (60fps) 간격으로 렌더링 제한
        if (currentTime - lastRenderTimeRef.current >= 16) {
          if (pendingPointsRef.current.length > 0) {
            // 대기 중인 모든 점들을 한 번에 추가
            const points = [...pendingPointsRef.current];
            pendingPointsRef.current = [];
            
            // 상태 업데이트는 한 번만
            for (let i = 0; i < points.length; i += 2) {
              originalAddPoint(points[i], points[i + 1]);
            }
          }
          
          lastRenderTimeRef.current = currentTime;
          isRenderingRef.current = false;
        } else {
          // 다음 프레임에서 다시 시도
          animationFrameRef.current = requestAnimationFrame(render);
        }
      };
      
      animationFrameRef.current = requestAnimationFrame(render);
    }
  }, [originalAddPoint]);

  // 지우개 기능: 해당 위치의 스트로크 삭제
  const eraseAtPoint = useCallback((x: number, y: number) => {
    const eraserRadius = 20; // 지우개 크기
    
    drawObjects.forEach(async (stroke) => {
      // 스트로크의 각 점이 지우개 영역 안에 있는지 확인
      for (let i = 0; i < stroke.points.length; i += 2) {
        const pointX = stroke.points[i];
        const pointY = stroke.points[i + 1];
        
        const distance = Math.sqrt((pointX - x) ** 2 + (pointY - y) ** 2);
        
        if (distance <= eraserRadius) {
          // 해당 스트로크 삭제
          try {
            const strokeRef = ref(database, `drawObjects/${stroke.id}`);
            await remove(strokeRef);
            break; // 해당 스트로크를 찾았으므로 루프 종료
          } catch (error) {
            console.error('Failed to erase stroke:', error);
          }
        }
      }
    });
  }, [drawObjects]);

  // 최적화된 현재 스트로크 렌더링 (requestAnimationFrame 기반)
  const renderCurrentStrokeOptimized = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing || currentStroke.length < 4 || currentTool !== 'pen') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 점진적 렌더링: 마지막 선분만 추가로 그리기
    const len = currentStroke.length;
    if (len >= 4) {
      ctx.beginPath();
      ctx.moveTo(currentStroke[len - 4], currentStroke[len - 3]);
      ctx.lineTo(currentStroke[len - 2], currentStroke[len - 1]);
      
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  }, [currentStroke, isDrawing, currentTool, penColor, penWidth]);

  // DrawObjects 변경 시 캔버스 재렌더링
  useEffect(() => {
    renderCurrentStrokeOptimized();
  }, [renderCurrentStrokeOptimized]);

  // 현재 stroke 변경 시 캔버스 재렌더링
  useEffect(() => {
    if (isDrawing) {
      renderCurrentStrokeOptimized();
    }
  }, [currentStroke, isDrawing, renderCurrentStrokeOptimized]);

  // Canvas 위치 및 크기 디버깅
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      console.log('DrawLayer: Canvas position and size', {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        canvasWidth: canvas.width,
        canvasHeight: canvas.height,
        visible: rect.width > 0 && rect.height > 0
      });
    }
  }, []);

  // 포인터 이벤트 핸들러 (마우스, 터치, 펜 모두 지원)
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    console.log('DrawLayer: PointerDown event triggered', { 
      currentTool, 
      pointerType: e.pointerType, 
      isPrimary: e.isPrimary,
      pressure: e.pressure,
      clientX: e.clientX,
      clientY: e.clientY
    });
    
    // pen이나 eraser 도구가 선택되었을 때만 작동
    if (currentTool !== 'pen' && currentTool !== 'eraser') {
      console.log('DrawLayer: Ignoring pointer down - wrong tool', currentTool);
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    // 포인터 캡처 설정 (마우스 필기 연속성 보장)
    const canvas = canvasRef.current;
    if (canvas && e.pointerType === 'mouse') {
      try {
        canvas.setPointerCapture(e.pointerId);
        console.log('DrawLayer: Pointer capture set for mouse', e.pointerId);
      } catch (error) {
        console.log('DrawLayer: Failed to set pointer capture', error);
      }
    }

    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    console.log('DrawLayer: Calculated coordinates', coords, 'from client', { x: e.clientX, y: e.clientY });
    
    // 기존 자동 전환 타이머 취소 (새로운 액션 시작 - 연속 필기 지원)
    if (autoSwitchTimeoutRef.current) {
      console.log('DrawLayer: Cancelling auto-switch timer - continuous drawing detected');
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
    }
    
    // 액션 시작 시간 업데이트 (연속 필기 감지용)
    updateLastActionTime();
    
    if (currentTool === 'eraser') {
      // 지우개 모드: 지우개 시작 (필기와 동일한 방식)
      console.log('DrawLayer: Starting eraser stroke');
      startStroke(); // 지우개 시작 상태 설정
      eraseAtPoint(coords.x, coords.y);
    } else {
      // 필기 모드: 새 스트로크 시작
      console.log('DrawLayer: Starting pen stroke at', coords);
      startStroke();
      originalAddPoint(coords.x, coords.y);
    }
  }, [currentTool, startStroke, originalAddPoint, getCanvasCoordinates, eraseAtPoint, updateLastActionTime]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    // pen이나 eraser 도구가 선택되고 그리는 중일 때만 작동
    if (currentTool !== 'pen' && currentTool !== 'eraser') return;

    e.preventDefault();
    e.stopPropagation();

    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    
    // 필기 중일 때는 자동 전환 타이머 취소 (연속 필기 보장)
    if (isDrawing && autoSwitchTimeoutRef.current) {
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
    }
    
    if (currentTool === 'eraser') {
      // 지우개 모드: 드래그 중일 때만 지우기
      if (isDrawing) {
        eraseAtPoint(coords.x, coords.y);
      }
    } else if (isDrawing) {
      // 필기 모드: 쓰로틀된 점 추가 (성능 최적화)
      throttledAddPoint(coords.x, coords.y);
    }
  }, [isDrawing, currentTool, throttledAddPoint, getCanvasCoordinates, eraseAtPoint]);

  const handlePointerUp = useCallback(async (e: React.PointerEvent) => {
    console.log('DrawLayer: PointerUp event triggered', { 
      isDrawing, 
      currentTool, 
      pointerType: e.pointerType,
      currentStrokeLength: currentStroke.length,
      clientX: e.clientX,
      clientY: e.clientY
    });
    
    // 포인터 캡처 해제
    const canvas = canvasRef.current;
    if (canvas && e.pointerType === 'mouse') {
      try {
        canvas.releasePointerCapture(e.pointerId);
        console.log('DrawLayer: Pointer capture released for mouse', e.pointerId);
      } catch (error) {
        console.log('DrawLayer: Failed to release pointer capture', error);
      }
    }
    
    // 액션 완료 시간 업데이트
    updateLastActionTime();
    
    if (currentTool === 'pen' && isDrawing) {
      console.log('DrawLayer: Ending pen stroke, preparing to save');
      endStroke();

      // pointerup 시점에 Firebase에 저장 (필기만) - LWW 사용
      if (currentStroke.length >= 4) {
        console.log('DrawLayer: Stroke has enough points, saving to Firebase');
        const drawObject = {
          points: currentStroke,
          color: penColor,
          width: penWidth,
          createdAt: new Date().toISOString(),
          lastModified: Date.now()
        };

        try {
          const objectId = await lwwCreateDrawObject(drawObject);
          if (objectId) {
            console.log('DrawLayer: Stroke saved to Firebase with LWW, objectId:', objectId);
            
            // Firebase 저장 성공 후에만 currentStroke 지우기
            setTimeout(() => {
              clearCurrentStroke();
              console.log('DrawLayer: Current stroke cleared after Firebase save');
            }, 100); // 100ms 지연으로 확실한 저장 후 정리
          } else {
            console.error('Failed to save draw object with LWW');
            clearCurrentStroke(); // 실패 시에도 정리
          }
        } catch (error) {
          console.error('Failed to save draw object:', error);
          clearCurrentStroke(); // 에러 시에도 정리
        }
      } else {
        console.log('DrawLayer: Stroke too short, not saving', currentStroke.length);
        clearCurrentStroke(); // 너무 짧은 스트로크는 바로 정리
      }
    } else if (currentTool === 'eraser' && isDrawing) {
      // 지우개 모드: 드래그 상태만 종료 (Firebase 저장 없음)
      console.log('DrawLayer: Ending eraser stroke');
      endStroke();
      clearCurrentStroke(); // 지우개는 즉시 상태 정리
    }
    
    // 액션 완료 후 자동 전환 스케줄링 (필기나 지우개 모든 액션 완료 시)
    if (currentTool === 'pen' || currentTool === 'eraser') {
      scheduleAutoSwitch();
    }
  }, [isDrawing, currentStroke, currentTool, penColor, penWidth, endStroke, clearCurrentStroke, updateLastActionTime, scheduleAutoSwitch]);

  // 포인터 이탈/취소 이벤트 핸들러 (포인터 캡처로 마우스 연속 필기 지원)
  const handlePointerLeaveOrCancel = useCallback((e: React.PointerEvent) => {
    console.log('DrawLayer: PointerLeave/Cancel event triggered', { 
      eventType: e.type,
      pointerType: e.pointerType, 
      isDrawing, 
      currentTool 
    });
    
    // 포인터 캡처를 사용하므로 마우스는 자연스럽게 pointerup에서 처리됨
    // 터치나 펜 타입에 대해서만 즉시 처리
    if (e.pointerType !== 'mouse') {
      console.log('DrawLayer: Processing pointer leave/cancel for', e.pointerType);
      handlePointerUp(e);
    } else {
      console.log('DrawLayer: Ignoring pointer leave/cancel for mouse - using pointer capture');
    }
  }, [isDrawing, currentTool, handlePointerUp]);

  // 컨텍스트 메뉴 방지 (우클릭, 터치 길게 누르기)
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // 캔버스 초기화 및 고해상도 설정
  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // devicePixelRatio 고려한 고해상도 설정
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // 실제 캔버스 크기는 고정 (2160x3840)
    canvas.width = 2160 * devicePixelRatio;
    canvas.height = 3840 * devicePixelRatio;
    
    // CSS 크기는 원래대로
    canvas.style.width = '2160px';
    canvas.style.height = '3840px';
    
    // 컨텍스트 스케일 조정
    ctx.scale(devicePixelRatio, devicePixelRatio);
    
    console.log('DrawLayer: Canvas initialized with devicePixelRatio', devicePixelRatio);
  }, []);

  // 저장된 스트로크들을 효율적으로 렌더링
  const renderStoredStrokes = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 클리어
    ctx.clearRect(0, 0, 2160, 3840);

    // 저장된 DrawObjects 렌더링 (배치 처리)
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    drawObjects.forEach((stroke) => {
      if (stroke.points.length < 4) return;

      ctx.beginPath();
      ctx.moveTo(stroke.points[0], stroke.points[1]);

      for (let i = 2; i < stroke.points.length; i += 2) {
        ctx.lineTo(stroke.points[i], stroke.points[i + 1]);
      }

      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.stroke();
    });
  }, [drawObjects]);

  // 캔버스 초기화
  useEffect(() => {
    initializeCanvas();
  }, [initializeCanvas]);

  // DrawObjects 변경 시 캔버스 재렌더링
  useEffect(() => {
    renderStoredStrokes();
  }, [renderStoredStrokes]);

  // DrawLayer는 항상 렌더링하되, 이벤트만 조건부로 처리
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      // Pointer Events (마우스, 터치, 펜 모두 지원 - 성능 최적화)
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeaveOrCancel}
      onPointerCancel={handlePointerLeaveOrCancel}
      // 컨텍스트 메뉴 방지
      onContextMenu={handleContextMenu}
      style={{
        touchAction: 'none', // 터치 스크롤 및 줌 방지
        cursor: currentTool === 'pen' ? 'crosshair' : currentTool === 'eraser' ? 'grab' : 'default',
        zIndex: 1, // 상위 컨테이너에서 이미 높은 z-index 설정됨
        pointerEvents: (currentTool === 'pen' || currentTool === 'eraser') ? 'auto' : 'none',
        position: 'absolute' // position 명시적 설정
      }}
    />
  );
};

export default DrawLayer; 