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
  
  const { drawObjects } = useAdminConfigStore();
  const { currentTool } = useEditorStore();

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
    }
    
    // 지우개 드래그 종료
    if (currentTool === 'eraser' && isErasingRef.current) {
      console.log('🧽 DrawLayer: End erasing');
      isErasingRef.current = false;
    }
  }, [isDrawing, currentTool, currentStroke, endStroke, penColor, penWidth, clearCurrentStroke, renderAll]);

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
        zIndex: 1000, // BaseLayer보다 높은 z-index로 설정
      }}
    />
  );
};

export default DrawLayer;
