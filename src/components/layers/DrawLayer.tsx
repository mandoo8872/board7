import React, { useRef, useEffect, useCallback } from 'react';
import { ref, remove } from 'firebase/database';
import { database } from '../../config/firebase';
import { useDrawStore, useAdminConfigStore, useEditorStore } from '../../store';
import { lwwCreateDrawObject } from '../../utils/lww';

interface DrawLayerProps {
  isViewPage?: boolean;
}

const DrawLayer: React.FC<DrawLayerProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isErasingRef = useRef<boolean>(false); // 지우개 드래그 상태 추가
  const autoSwitchTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 자동 전환 타이머
  
  const { 
    currentStroke, 
    isDrawing, 
    penColor,
    penWidth,
    addPoint, 
    startStroke, 
    endStroke, 
    clearCurrentStroke,
  } = useDrawStore();
  
  const { drawObjects, settings } = useAdminConfigStore();
  const { currentTool, setCurrentTool } = useEditorStore();

  // 설정에서 자동 도구 전환 활성화 여부 확인
  const autoToolSwitchEnabled = settings?.admin?.autoToolSwitch ?? false;

  // 자동 도구 전환 함수
  const scheduleAutoSwitch = useCallback(() => {
    // 자동 도구 전환이 비활성화되어 있으면 실행하지 않음
    if (!autoToolSwitchEnabled) {
      console.log('🔄 DrawLayer: Auto tool switch disabled');
      return;
    }
    
    // 기존 타이머 취소
    if (autoSwitchTimeoutRef.current) {
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
    }
    
    // 2초 후 select 도구로 전환
    autoSwitchTimeoutRef.current = setTimeout(() => {
      if (currentTool === 'pen' || currentTool === 'eraser') {
        console.log('🔄 DrawLayer: Auto-switching to select tool');
        setCurrentTool('select');
      }
      autoSwitchTimeoutRef.current = null;
    }, 2000); // 2초 고정
    
    console.log('⏰ DrawLayer: Auto switch scheduled in 2 seconds');
  }, [autoToolSwitchEnabled, currentTool, setCurrentTool]);

  // Canvas 초기화
  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    
    console.log('✅ DrawLayer: Canvas initialized', { 
      width: canvas.width, 
      height: canvas.height 
    });
  }, []);

  // 좌표 변환
  const getCanvasCoordinates = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2160;
    const y = ((clientY - rect.top) / rect.height) * 3840;
    
    return { x, y };
  }, []);

  // 화면 좌표로 변환
  const toScreenCoords = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    return {
      x: (x / 2160) * canvas.width,
      y: (y / 3840) * canvas.height
    };
  }, []);

  // 지우개 기능
  const eraseAtPoint = useCallback(async (x: number, y: number) => {
    const eraserRadius = 20;
    
    for (const stroke of drawObjects) {
      for (let i = 0; i < stroke.points.length; i += 2) {
        const distance = Math.sqrt(
          (stroke.points[i] - x) ** 2 + 
          (stroke.points[i + 1] - y) ** 2
        );
        
        if (distance <= eraserRadius) {
          try {
            const strokeRef = ref(database, `drawObjects/${stroke.id}`);
            await remove(strokeRef);
            console.log('🧽 DrawLayer: Stroke erased');
            return;
          } catch (error) {
            console.error('❌ DrawLayer: Failed to erase stroke:', error);
          }
        }
      }
    }
  }, [drawObjects]);

  // 전체 렌더링
  const renderAll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 저장된 스트로크 렌더링
    drawObjects.forEach(stroke => {
      if (stroke.points.length < 4) return;
      
      ctx.beginPath();
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      
      const startCoords = toScreenCoords(stroke.points[0], stroke.points[1]);
      ctx.moveTo(startCoords.x, startCoords.y);
      
      for (let i = 2; i < stroke.points.length; i += 2) {
        const coords = toScreenCoords(stroke.points[i], stroke.points[i + 1]);
        ctx.lineTo(coords.x, coords.y);
      }
      
      ctx.stroke();
    });

    // 현재 스트로크 렌더링
    if (isDrawing && currentStroke.length >= 4) {
      ctx.beginPath();
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penWidth;
      
      const startCoords = toScreenCoords(currentStroke[0], currentStroke[1]);
      ctx.moveTo(startCoords.x, startCoords.y);
      
      for (let i = 2; i < currentStroke.length; i += 2) {
        const coords = toScreenCoords(currentStroke[i], currentStroke[i + 1]);
        ctx.lineTo(coords.x, coords.y);
      }
      
      ctx.stroke();
    }
    
    console.log('🎨 DrawLayer: Rendered', drawObjects.length, 'strokes +', currentStroke.length / 2, 'current points');
  }, [drawObjects, currentStroke, isDrawing, penColor, penWidth, toScreenCoords]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (currentTool !== 'pen' && currentTool !== 'eraser') return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // 기존 자동 전환 타이머 취소 (새로운 액션 시작)
    if (autoSwitchTimeoutRef.current) {
      clearTimeout(autoSwitchTimeoutRef.current);
      autoSwitchTimeoutRef.current = null;
      console.log('🔄 DrawLayer: Auto switch cancelled - new action started');
    }
    
    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    console.log('🖊️ DrawLayer: Start action at', coords, 'tool:', currentTool);
    
    if (currentTool === 'pen') {
      startStroke();
      addPoint(coords.x, coords.y);
      renderAll();
    } else if (currentTool === 'eraser') {
      // 지우개 드래그 시작
      isErasingRef.current = true;
      eraseAtPoint(coords.x, coords.y);
    }
  }, [currentTool, getCanvasCoordinates, startStroke, addPoint, renderAll, eraseAtPoint]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (currentTool === 'pen' && isDrawing) {
      e.preventDefault();
      
      const coords = getCanvasCoordinates(e.clientX, e.clientY);
      addPoint(coords.x, coords.y);
      renderAll();
    } else if (currentTool === 'eraser' && isErasingRef.current) {
      // 지우개는 드래그 중일 때만 작동
      e.preventDefault();
      
      const coords = getCanvasCoordinates(e.clientX, e.clientY);
      eraseAtPoint(coords.x, coords.y);
    }
  }, [isDrawing, currentTool, getCanvasCoordinates, addPoint, renderAll, eraseAtPoint]);

  const handlePointerUp = useCallback(async () => {
    // 필기 도구 처리
    if (isDrawing && currentTool === 'pen') {
      console.log('🖊️ DrawLayer: End drawing', { strokeLength: currentStroke.length });
      
      endStroke();
      
      if (currentStroke.length >= 4) {
        const drawObject = {
          points: currentStroke,
          color: penColor,
          width: penWidth,
          createdAt: new Date().toISOString(),
          lastModified: Date.now()
        };

        try {
          await lwwCreateDrawObject(drawObject);
          console.log('✅ DrawLayer: Stroke saved to Firebase');
        } catch (error) {
          console.error('❌ DrawLayer: Failed to save stroke:', error);
        }
      }
      
      clearCurrentStroke();
      renderAll();
      
      // 필기 완료 후 자동 전환 스케줄링
      scheduleAutoSwitch();
    }
    
    // 지우개 드래그 종료
    if (currentTool === 'eraser' && isErasingRef.current) {
      console.log('🧽 DrawLayer: End erasing');
      isErasingRef.current = false;
      
      // 지우개 완료 후 자동 전환 스케줄링
      scheduleAutoSwitch();
    }
  }, [isDrawing, currentTool, currentStroke, endStroke, penColor, penWidth, clearCurrentStroke, renderAll, scheduleAutoSwitch]);

  useEffect(() => {
    initializeCanvas();
    
    const handleResize = () => {
      setTimeout(initializeCanvas, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initializeCanvas]);

  useEffect(() => {
    renderAll();
  }, [renderAll]);

  useEffect(() => {
    return () => {
      if (autoSwitchTimeoutRef.current) {
        clearTimeout(autoSwitchTimeoutRef.current);
        autoSwitchTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      onPointerDown={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerDown : undefined}
      onPointerMove={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerMove : undefined}
      onPointerUp={currentTool === 'pen' || currentTool === 'eraser' ? handlePointerUp : undefined}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        touchAction: 'none',
        cursor: currentTool === 'pen' ? 'crosshair' : currentTool === 'eraser' ? 'grab' : 'default',
        pointerEvents: (currentTool === 'pen' || currentTool === 'eraser') ? 'auto' : 'none',
      }}
    />
  );
};

export default DrawLayer;
