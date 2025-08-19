import { useEffect, useCallback, RefObject } from 'react';

interface UseKeyboardEventsProps {
  isDragging: boolean;
  isResizing: boolean;
  dragOffset: { x: number; y: number };
  position: { x: number; y: number };
  size: { width: number; height: number };
  keyboardRef: RefObject<HTMLDivElement>;
  setPosition: (pos: { x: number; y: number }) => void;
  setSize: (size: { width: number; height: number }) => void;
  setIsDragging: (dragging: boolean) => void;
  setIsResizing: (resizing: boolean) => void;
  saveSettings: (position: { x: number; y: number }, size: { width: number; height: number }) => void;
  constrainToViewport: (pos: { x: number; y: number }, sz: { width: number; height: number }) => { x: number; y: number };
}

export const useKeyboardEvents = ({
  isDragging,
  isResizing,
  dragOffset,
  position,
  size,
  keyboardRef,
  setPosition,
  setSize,
  setIsDragging,
  setIsResizing,
  saveSettings,
  constrainToViewport
}: UseKeyboardEventsProps) => {
  
  // 포인터 이벤트 처리
  useEffect(() => {
    if (!isDragging && !isResizing) {
      return; // 드래그나 리사이즈 중이 아니면 이벤트 리스너 추가하지 않음
    }

    const handlePointerMove = (e: PointerEvent) => {
      // 터치 디바이스에서 더 안정적인 처리
      if (e.pointerType === 'touch') {
        e.preventDefault();
      }
      
      if (isDragging) {
        const newPosition = {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        };
        const constrainedPosition = constrainToViewport(newPosition, size);
        setPosition(constrainedPosition);
      }
      
      if (isResizing) {
        const rect = keyboardRef.current?.getBoundingClientRect();
        if (rect) {
          const newWidth = Math.max(400, Math.min(1600, e.clientX - rect.left));
          const newHeight = Math.max(270, Math.min(800, e.clientY - rect.top));
          const newSize = { width: newWidth, height: newHeight };
          const constrainedPosition = constrainToViewport(position, newSize);
          setSize(newSize);
          setPosition(constrainedPosition);
        }
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (isDragging || isResizing) {
        // 드래그나 리사이즈 종료 시 설정 저장
        saveSettings(position, size);
      }
      setIsDragging(false);
      setIsResizing(false);
      
      // 포인터 캡처 해제
      if (keyboardRef.current) {
        try {
          keyboardRef.current.releasePointerCapture(e.pointerId);
        } catch (error) {
          // 포인터 캡처 해제 실패는 무시
        }
      }
    };

    // 터치 디바이스에서 추가 이벤트 리스너
    const isTouchDevice = 'ontouchstart' in window;
    
    if (isTouchDevice) {
      // 터치 이벤트도 함께 처리
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        if (e.touches.length === 1) {
          const touch = e.touches[0];
          const pointerEvent = new PointerEvent('pointermove', {
            clientX: touch.clientX,
            clientY: touch.clientY,
            pointerId: touch.identifier,
            pointerType: 'touch'
          });
          handlePointerMove(pointerEvent);
        }
      };

      const handleTouchEnd = (e: TouchEvent) => {
        e.preventDefault();
        if (e.changedTouches.length === 1) {
          const touch = e.changedTouches[0];
          const pointerEvent = new PointerEvent('pointerup', {
            clientX: touch.clientX,
            clientY: touch.clientY,
            pointerId: touch.identifier,
            pointerType: 'touch'
          });
          handlePointerUp(pointerEvent);
        }
      };

      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
      
      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }

    // 포인터 이벤트 리스너 추가
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      // cleanup
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, isResizing, dragOffset, position, size, keyboardRef, setPosition, setSize, setIsDragging, setIsResizing, saveSettings, constrainToViewport]);

  // 윈도우 리사이즈 처리
  useEffect(() => {
    const handleWindowResize = () => {
      const constrainedPosition = constrainToViewport(position, size);
      if (constrainedPosition.x !== position.x || constrainedPosition.y !== position.y) {
        setPosition(constrainedPosition);
        saveSettings(constrainedPosition, size);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [position, size, constrainToViewport, setPosition, saveSettings]);

  // 드래그 시작 핸들러
  const handleDragStart = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 터치 디바이스에서 더 안정적인 처리
    if (e.pointerType === 'touch') {
      setTimeout(() => {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch (error) {
          console.warn('Pointer capture failed:', error);
        }
      }, 0);
    } else {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (error) {
        // 포인터 캡처 실패는 무시
      }
    }
    
    setIsDragging(true);
    
    // dragOffset은 외부에서 설정됨
  }, [setIsDragging, keyboardRef]);

  // 리사이즈 시작 핸들러
  const handleResizeStart = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 터치 디바이스에서 더 안정적인 처리
    if (e.pointerType === 'touch') {
      setTimeout(() => {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch (error) {
          console.warn('Pointer capture failed:', error);
        }
      }, 0);
    } else {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (error) {
        // 포인터 캡처 실패는 무시
      }
    }
    
    setIsResizing(true);
  }, [setIsResizing]);

  return {
    handleDragStart,
    handleResizeStart
  };
};