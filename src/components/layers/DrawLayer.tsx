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
  // ref들 정의
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastRenderTimeRef = useRef<number>(0);
  const isRenderingRef = useRef<boolean>(false);
  const pendingPointsRef = useRef<number[]>([]);
  const autoSwitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const moveLogCountRef = useRef<number>(0); // 로그 카운터 추가
  
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

  // 쓰로틀된 addPoint 함수 (개선된 렌더링)
  const throttledAddPoint = useCallback((x: number, y: number) => {
    // 즉시 상태 업데이트 (끊김 방지)
    originalAddPoint(x, y);
    
    // 즉시 렌더링 (부드러운 필기를 위해, 확대/축소 대응)
    const canvas = canvasRef.current;
    if (canvas && isDrawing && currentTool === 'pen') {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // 현재 캔버스의 표시 크기와 논리적 크기 비율 계산
        const rect = canvas.getBoundingClientRect();
        const scaleX = rect.width / 2160;
        const scaleY = rect.height / 3840;
        
        // 현재 점을 즉시 렌더링 (확대/축소 스케일 적용)
        ctx.save();
        ctx.scale(scaleX, scaleY);
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y); // 점 하나 그리기
        ctx.strokeStyle = penColor;
        ctx.lineWidth = penWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        
        ctx.restore();
      }
    }
    
    // 성능 최적화를 위한 배치 렌더링도 유지
    pendingPointsRef.current.push(x, y);
    
    if (!isRenderingRef.current) {
      isRenderingRef.current = true;
      
      const render = (currentTime: number) => {
        // 8ms (120fps) 간격으로 렌더링 제한 (더 부드럽게)
        if (currentTime - lastRenderTimeRef.current >= 8) {
          if (pendingPointsRef.current.length > 0) {
            // 대기 중인 점들을 이용해 전체 스트로크 재렌더링
            pendingPointsRef.current = [];
            
            renderCurrentStrokeComplete();
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
  }, [originalAddPoint, isDrawing, currentTool, penColor, penWidth]);

  // 최적화된 현재 스트로크 렌더링 with 안전장치
  const renderCurrentStrokeOptimized = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing || currentStroke.length < 4 || currentTool !== 'pen') {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('❌ DrawLayer: Failed to get 2D context in renderCurrentStrokeOptimized');
      return;
    }

    // 현재 캔버스의 표시 크기와 논리적 크기 비율 계산
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      console.warn('❌ DrawLayer: Invalid canvas rect in renderCurrentStrokeOptimized', rect);
      return;
    }

    const scaleX = rect.width / 2160;
    const scaleY = rect.height / 3840;

    // 점진적 렌더링: 마지막 선분만 추가로 그리기 (확대/축소 스케일 적용)
    const len = currentStroke.length;
    if (len >= 4) {
      ctx.save();
      ctx.scale(scaleX, scaleY);
      
      ctx.beginPath();
      ctx.moveTo(currentStroke[len - 4], currentStroke[len - 3]);
      ctx.lineTo(currentStroke[len - 2], currentStroke[len - 1]);
      
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      
      ctx.restore();
      
      console.log('🖌️ DrawLayer: Rendered incremental stroke segment', { length: len });
    }
  }, [currentStroke, isDrawing, currentTool, penColor, penWidth]);

  // 현재 스트로크 전체 렌더링 (끊김 방지, 확대/축소 대응)
  const renderCurrentStrokeComplete = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing || currentStroke.length < 4 || currentTool !== 'pen') {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('❌ DrawLayer: Failed to get 2D context in renderCurrentStrokeComplete');
      return;
    }

    // 현재 캔버스의 표시 크기와 논리적 크기 비율 계산
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      console.warn('❌ DrawLayer: Invalid canvas rect in renderCurrentStrokeComplete', rect);
      return;
    }
    
    const scaleX = rect.width / 2160;
    const scaleY = rect.height / 3840;

    // 캔버스 클리어 후 저장된 스트로크들과 현재 스트로크 모두 렌더링
    ctx.clearRect(0, 0, rect.width, rect.height);

    // 저장된 DrawObjects 렌더링 (확대/축소 스케일 적용)
    ctx.save();
    ctx.scale(scaleX, scaleY);
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

    // 현재 스트로크 전체를 연결된 선으로 그리기 (같은 스케일 적용)
    if (currentStroke.length >= 4) {
      ctx.beginPath();
      ctx.moveTo(currentStroke[0], currentStroke[1]);

      for (let i = 2; i < currentStroke.length; i += 2) {
        ctx.lineTo(currentStroke[i], currentStroke[i + 1]);
      }

      ctx.strokeStyle = penColor;
      ctx.lineWidth = penWidth;
      ctx.stroke();
    }
    
    ctx.restore();
    
    console.log('🎨 DrawLayer: Complete redraw with', drawObjects.length, 'stored +', currentStroke.length / 2, 'current points');
  }, [currentStroke, isDrawing, currentTool, penColor, penWidth, drawObjects]);

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

  // 컨텍스트 메뉴 방지 (우클릭, 터치 길게 누르기)
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // 캔버스 초기화 및 고해상도 설정 (확대/축소 대응)
  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.warn('❌ DrawLayer: Canvas element not found during initialization');
      return false;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('❌ DrawLayer: Failed to get 2D context');
      return false;
    }

    // 부모 컨테이너의 실제 크기 확인 - offsetWidth/Height 사용
    const parent = canvas.parentElement;
    if (!parent) {
      console.warn('❌ DrawLayer: Parent element not found');
      return false;
    }

    const displayWidth = parent.offsetWidth;
    const displayHeight = parent.offsetHeight;
    
    // 크기가 0인 경우 처리
    if (displayWidth <= 0 || displayHeight <= 0) {
      console.warn('❌ DrawLayer: Invalid canvas size', { displayWidth, displayHeight });
      return false;
    }

    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // 명시적으로 canvas.width/height 할당
    canvas.width = displayWidth * devicePixelRatio;
    canvas.height = displayHeight * devicePixelRatio;
    
    // CSS 크기는 실제 표시 크기로 설정
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    
    // 컨텍스트 스케일 조정 (고해상도 대응)
    ctx.scale(devicePixelRatio, devicePixelRatio);
    
    console.log('✅ DrawLayer: Canvas initialized successfully', {
      devicePixelRatio,
      displaySize: { width: displayWidth, height: displayHeight },
      canvasSize: { width: canvas.width, height: canvas.height },
      scale: { x: displayWidth / 2160, y: displayHeight / 3840 },
      parentExists: !!parent
    });

    // 초기화 후 기존 스트로크들 재렌더링은 useEffect에서 처리
    
    return true;
  }, []);

  // 캔버스 초기화 with retry logic
  useEffect(() => {
    const attemptInitialization = () => {
      const success = initializeCanvas();
      if (!success) {
        // 초기화 실패 시 100ms 후 재시도
        setTimeout(attemptInitialization, 100);
      }
    };
    
    attemptInitialization();
    
    // 윈도우 리사이즈나 확대/축소 시 캔버스 재초기화
    const handleResize = () => {
      console.log('🔄 DrawLayer: Window resized, reinitializing canvas');
      setTimeout(() => {
        initializeCanvas();
      }, 100); // 약간의 지연으로 확실한 크기 변경 후 처리
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initializeCanvas]);

  // 저장된 스트로크들을 효율적으로 렌더링 (확대/축소 대응)
  const renderStoredStrokes = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.warn('❌ DrawLayer: Canvas not found in renderStoredStrokes');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('❌ DrawLayer: Failed to get 2D context in renderStoredStrokes');
      return;
    }

    // 현재 캔버스의 표시 크기와 논리적 크기 비율 계산
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width / 2160;
    const scaleY = rect.height / 3840;

    // 캔버스 클리어
    ctx.clearRect(0, 0, rect.width, rect.height);

    // 저장된 DrawObjects 렌더링 (확대/축소 스케일 적용)
    ctx.save();
    ctx.scale(scaleX, scaleY);
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
    
    ctx.restore();
    
    console.log('🎨 DrawLayer: Rendered', drawObjects.length, 'stored strokes');
  }, [drawObjects]);

  // DrawObjects 변경 시 캔버스 재렌더링 (저장된 스트로크들)
  useEffect(() => {
    renderStoredStrokes();
  }, [renderStoredStrokes]);

  // 현재 stroke 변경 시 전체 재렌더링 (currentStroke + drawObjects)
  useEffect(() => {
    if (isDrawing && currentStroke.length >= 2) {
      console.log('🖌️ DrawLayer: currentStroke changed, rendering...', { 
        length: currentStroke.length, 
        isDrawing,
        points: currentStroke.slice(-4) // 마지막 2점만 로그
      });
      renderCurrentStrokeComplete();
    }
  }, [currentStroke, isDrawing, renderCurrentStrokeComplete]);

  // drawObjects 변경 시에도 전체 재렌더링
  useEffect(() => {
    console.log('🎨 DrawLayer: drawObjects changed, rendering...', { count: drawObjects.length });
    if (isDrawing && currentStroke.length >= 2) {
      // 그리기 중이면 현재 스트로크와 함께 렌더링
      renderCurrentStrokeComplete();
    } else {
      // 그리기 중이 아니면 저장된 스트로크들만 렌더링
      renderStoredStrokes();
    }
  }, [drawObjects, isDrawing, currentStroke.length, renderCurrentStrokeComplete, renderStoredStrokes]);

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
    console.log('🖊️ DrawLayer: PointerDown event triggered!', { 
      currentTool, 
      pointerType: e.pointerType, 
      isPrimary: e.isPrimary,
      pressure: e.pressure,
      clientX: e.clientX,
      clientY: e.clientY,
      canvasExists: !!canvasRef.current,
      isDrawingBefore: isDrawing
    });
    
    // pen이나 eraser 도구가 선택되었을 때만 작동
    if (currentTool !== 'pen' && currentTool !== 'eraser') {
      console.log('❌ DrawLayer: Ignoring pointer down - wrong tool', currentTool);
      return;
    }

    console.log('✅ DrawLayer: Processing pointer down for', currentTool);

    e.preventDefault();
    e.stopPropagation();

    // 포인터 캡처 설정 (모든 포인터 타입에 대해)
    const canvas = canvasRef.current;
    if (canvas) {
      try {
        canvas.setPointerCapture(e.pointerId);
        console.log('✅ DrawLayer: Pointer capture set for', e.pointerType, e.pointerId);
      } catch (error) {
        console.log('⚠️ DrawLayer: Failed to set pointer capture', error);
      }
    }

    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    console.log('📍 DrawLayer: Calculated coordinates', coords, 'from client', { x: e.clientX, y: e.clientY });
    
    // 기존 자동 전환 타이머 취소 (새로운 액션 시작 - 연속 필기 지원)
    if (autoSwitchTimeoutRef.current) {
      console.log('🔄 DrawLayer: Cancelling auto-switch timer - continuous drawing detected');
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
    }
    
    // 액션 시작 시간 업데이트 (연속 필기 감지용)
    updateLastActionTime();
    
    if (currentTool === 'eraser') {
      // 지우개 모드: 지우개 시작 (필기와 동일한 방식)
      console.log('🧽 DrawLayer: Starting eraser stroke');
      startStroke(); // 지우개 시작 상태 설정
      eraseAtPoint(coords.x, coords.y);
    } else {
      // 필기 모드: 새 스트로크 시작
      console.log('🖊️ DrawLayer: Starting pen stroke at', coords);
      startStroke();
      originalAddPoint(coords.x, coords.y);
      
      // 즉시 첫 번째 점 렌더링
      requestAnimationFrame(() => {
        renderCurrentStrokeComplete();
      });
    }
  }, [currentTool, startStroke, originalAddPoint, getCanvasCoordinates, eraseAtPoint, updateLastActionTime, isDrawing, renderCurrentStrokeComplete]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    // pen이나 eraser 도구가 선택되고 그리는 중일 때만 작동
    if (currentTool !== 'pen' && currentTool !== 'eraser') return;
    if (!isDrawing) return;

    // 10번마다 한 번씩만 로그 출력 (성능 고려)
    moveLogCountRef.current++;
    if (moveLogCountRef.current % 10 === 0) {
      console.log('🖱️ DrawLayer: PointerMove', { 
        pointerType: e.pointerType, 
        isDrawing, 
        currentStrokeLength: currentStroke.length 
      });
    }

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
      eraseAtPoint(coords.x, coords.y);
    } else {
      // 필기 모드: 쓰로틀된 점 추가 (성능 최적화)
      throttledAddPoint(coords.x, coords.y);
    }
  }, [isDrawing, currentTool, throttledAddPoint, getCanvasCoordinates, eraseAtPoint, currentStroke.length]);

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

  // DrawLayer는 항상 렌더링하되, 이벤트만 조건부로 처리
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      // Pointer Events (마우스, 터치, 펜 모두 지원 - 성능 최적화)
      onPointerDown={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerDown : undefined}
      onPointerMove={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerMove : undefined}
      onPointerUp={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerUp : undefined}
      onPointerLeave={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerLeaveOrCancel : undefined}
      onPointerCancel={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerLeaveOrCancel : undefined}
      // 컨텍스트 메뉴 방지
      onContextMenu={handleContextMenu}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        touchAction: 'none', // 터치 스크롤 및 줌 방지
        cursor: currentTool === 'pen' ? 'crosshair' : currentTool === 'eraser' ? 'grab' : 'default',
        zIndex: 1, // 컨테이너가 이미 높은 z-index를 가지므로 상대적으로 낮게
        pointerEvents: (currentTool === 'pen' || currentTool === 'eraser') ? 'auto' : 'none',
        display: 'block' // 명시적 display 설정
      }}
    />
  );
};

export default DrawLayer; 