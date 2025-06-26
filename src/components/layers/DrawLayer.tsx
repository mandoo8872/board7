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
  
  const { 
    currentStroke, 
    isDrawing, 
    penColor,
    penWidth,
    autoSwitchDelay,
    addPoint, 
    startStroke, 
    endStroke, 
    clearCurrentStroke,
    updateLastActionTime
  } = useDrawStore();
  
  const { drawObjects } = useAdminConfigStore();
  const { currentTool, setCurrentTool } = useEditorStore();

  // 자동 도구 전환 함수
  const scheduleAutoSwitch = useCallback(() => {
    // 터치 기기에서 연속 필기를 위해 자동 전환 지연시간을 늘림
    const extendedDelay = autoSwitchDelay * 3; // 기본 2초 → 6초로 연장
    
    // 기존 타이머 취소
    if (autoSwitchTimeoutRef.current) {
      clearTimeout(autoSwitchTimeoutRef.current);
    }
    
    // 새 타이머 설정 (더 긴 지연시간)
    autoSwitchTimeoutRef.current = setTimeout(() => {
      if (currentTool === 'pen' || currentTool === 'eraser') {
        console.log('DrawLayer: Auto-switching to select tool after extended delay');
        setCurrentTool('select');
      }
    }, extendedDelay);
  }, [autoSwitchDelay, currentTool, setCurrentTool]);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (autoSwitchTimeoutRef.current) {
        clearTimeout(autoSwitchTimeoutRef.current);
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
    
    console.log('DrawLayer: Canvas rect', canvasRect);
    console.log('DrawLayer: Client coords', { clientX, clientY });
    console.log('DrawLayer: Relative coords', { relativeX, relativeY });
    console.log('DrawLayer: Scale', { scaleX, scaleY });
    console.log('DrawLayer: Final coords', coords);
    
    return coords;
  }, []);

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

  // 캔버스에 저장된 stroke들을 렌더링
  const renderStoredStrokes = useCallback(() => {
    console.log('DrawLayer: renderStoredStrokes called', { drawObjectsCount: drawObjects.length });
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('DrawLayer: Canvas ref not found for stored strokes');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('DrawLayer: Canvas context not found for stored strokes');
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('DrawLayer: Canvas cleared', { width: canvas.width, height: canvas.height });

    // 저장된 DrawObjects 렌더링
    drawObjects.forEach((stroke, index) => {
      if (stroke.points.length < 4) {
        console.log(`DrawLayer: Skipping stroke ${index} - not enough points`, stroke.points.length);
        return; // 최소 2개 점 필요 (x,y,x,y)
      }

      console.log(`DrawLayer: Rendering stroke ${index}`, { 
        pointCount: stroke.points.length / 2, 
        color: stroke.color, 
        width: stroke.width,
        firstPoint: [stroke.points[0], stroke.points[1]]
      });

      ctx.beginPath();
      ctx.moveTo(stroke.points[0], stroke.points[1]);

      for (let i = 2; i < stroke.points.length; i += 2) {
        ctx.lineTo(stroke.points[i], stroke.points[i + 1]);
      }

      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    });
    
    console.log('DrawLayer: All stored strokes rendered');
  }, [drawObjects]);

  // 현재 그리는 중인 stroke 렌더링 (최적화)
  const renderCurrentStroke = useCallback(() => {
    console.log('DrawLayer: renderCurrentStroke called', { isDrawing, currentStrokeLength: currentStroke.length, currentTool });
    
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing || currentStroke.length < 4 || currentTool !== 'pen') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('DrawLayer: Canvas context not found');
      return;
    }

    // 처음 호출이거나 점이 적을 때만 전체 다시 그리기
    if (currentStroke.length <= 4) {
      // 기존 저장된 strokes 다시 그리기 (처음에만)
      renderStoredStrokes();
      
      console.log('DrawLayer: Drawing initial current stroke with', currentStroke.length / 2, 'points');

      // 현재 stroke 그리기 (필기만) - 설정된 색상과 굵기 사용
      ctx.beginPath();
      ctx.moveTo(currentStroke[0], currentStroke[1]);

      for (let i = 2; i < currentStroke.length; i += 2) {
        ctx.lineTo(currentStroke[i], currentStroke[i + 1]);
      }

      ctx.strokeStyle = penColor;
      ctx.lineWidth = penWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    } else {
      // 점진적 렌더링: 마지막 선분만 추가로 그리기
      const len = currentStroke.length;
      if (len >= 4) {
        console.log('DrawLayer: Adding incremental line segment');
        
        ctx.beginPath();
        ctx.moveTo(currentStroke[len - 4], currentStroke[len - 3]);
        ctx.lineTo(currentStroke[len - 2], currentStroke[len - 1]);
        
        ctx.strokeStyle = penColor;
        ctx.lineWidth = penWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
    }
    
    console.log('DrawLayer: Current stroke rendered (optimized)');
  }, [currentStroke, isDrawing, currentTool, penColor, penWidth, renderStoredStrokes]);

  // DrawObjects 변경 시 캔버스 재렌더링
  useEffect(() => {
    renderStoredStrokes();
  }, [renderStoredStrokes]);

  // 현재 stroke 변경 시 캔버스 재렌더링
  useEffect(() => {
    if (isDrawing) {
      renderCurrentStroke();
    }
  }, [currentStroke, isDrawing, renderCurrentStroke]);

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
      pressure: e.pressure 
    });
    
    // pen이나 eraser 도구가 선택되었을 때만 작동
    if (currentTool !== 'pen' && currentTool !== 'eraser') return;

    e.preventDefault();
    e.stopPropagation();

    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    console.log('DrawLayer: Coordinates', coords, 'PointerType:', e.pointerType);
    
    // 기존 자동 전환 타이머 취소 (새로운 액션 시작 - 연속 필기 지원)
    if (autoSwitchTimeoutRef.current) {
      console.log('DrawLayer: Cancelling auto-switch timer - continuous drawing detected');
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
    }
    
    // 액션 시작 시간 업데이트 (연속 필기 감지용)
    updateLastActionTime();
    
    if (currentTool === 'eraser') {
      // 지우개 모드: 해당 위치의 스트로크 삭제
      eraseAtPoint(coords.x, coords.y);
    } else {
      // 필기 모드: 새 스트로크 시작
      startStroke();
      addPoint(coords.x, coords.y);
    }
  }, [currentTool, startStroke, addPoint, getCanvasCoordinates, eraseAtPoint, updateLastActionTime]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    // pen이나 eraser 도구가 선택되고 그리는 중일 때만 작동
    if (currentTool !== 'pen' && currentTool !== 'eraser') return;

    // 터치 디버깅을 위한 상세 로그
    console.log('DrawLayer: PointerMove event', { 
      pointerType: e.pointerType, 
      currentTool, 
      isDrawing, 
      currentStrokeLength: currentStroke.length,
      isPrimary: e.isPrimary 
    });

    e.preventDefault();
    e.stopPropagation();

    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    
    // 필기 중일 때는 자동 전환 타이머 취소 (연속 필기 보장)
    if (isDrawing && autoSwitchTimeoutRef.current) {
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
    }
    
    if (currentTool === 'eraser') {
      // 지우개 모드: 계속 지우기
      eraseAtPoint(coords.x, coords.y);
    } else if (isDrawing) {
      // 필기 모드: 점 추가
      console.log('DrawLayer: Adding point to stroke', coords);
      addPoint(coords.x, coords.y);
    } else {
      console.log('DrawLayer: PointerMove ignored - not drawing', { isDrawing, currentTool });
    }
  }, [isDrawing, currentTool, addPoint, getCanvasCoordinates, eraseAtPoint, currentStroke.length]);

  const handlePointerUp = useCallback(async (e: React.PointerEvent) => {
    console.log('DrawLayer: PointerUp event triggered', { 
      isDrawing, 
      currentTool, 
      pointerType: e.pointerType,
      currentStrokeLength: currentStroke.length
    });
    
    // 액션 완료 시간 업데이트
    updateLastActionTime();
    
    if (currentTool === 'pen' && isDrawing) {
      endStroke();

      // pointerup 시점에 Firebase에 저장 (필기만) - LWW 사용
      if (currentStroke.length >= 4) {
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
            console.log('DrawLayer: Stroke saved to Firebase with LWW'); // 디버그 로그
            
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
        console.log('DrawLayer: Stroke too short, not saving');
        clearCurrentStroke(); // 너무 짧은 스트로크는 바로 정리
      }
    }
    
    // 액션 완료 후 자동 전환 스케줄링 (필기나 지우개 모든 액션 완료 시)
    if (currentTool === 'pen' || currentTool === 'eraser') {
      scheduleAutoSwitch();
    }
  }, [isDrawing, currentStroke, currentTool, penColor, penWidth, endStroke, clearCurrentStroke, updateLastActionTime, scheduleAutoSwitch]);

  // 포인터 이탈/취소 이벤트 핸들러 (터치 최적화)
  const handlePointerLeaveOrCancel = useCallback((e: React.PointerEvent) => {
    console.log('DrawLayer: PointerLeave/Cancel event triggered', { 
      eventType: e.type,
      pointerType: e.pointerType, 
      isDrawing, 
      currentTool 
    });
    
    // 터치 타입이고 실제로 필기 중이라면 이벤트 무시 (Surface 터치 최적화)
    if (e.pointerType === 'touch' && isDrawing && currentTool === 'pen') {
      console.log('DrawLayer: Ignoring pointer leave/cancel for touch during drawing');
      return;
    }
    
    // 마우스나 펜 타입, 또는 실제로 필기가 끝난 경우에만 처리
    handlePointerUp(e);
  }, [isDrawing, currentTool, handlePointerUp]);

  // 컨텍스트 메뉴 방지 (우클릭, 터치 길게 누르기)
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // DrawLayer는 항상 렌더링하되, 이벤트만 조건부로 처리
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      width={2160}
      height={3840}
      // Pointer Events (마우스, 터치, 펜 모두 지원 - Surface 최적화)
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