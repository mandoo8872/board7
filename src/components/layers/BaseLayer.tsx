import React, { useState, useCallback, useEffect } from 'react';
import { useAdminConfigStore } from '../../store/adminConfigStore';
import { useEditorStore } from '../../store/editorStore';
import { useCheckboxStore } from '../../store/checkboxStore';
import { TextObject } from '../../types';
import { isValidPosition, isValidSize } from '../../utils/validation';

interface BaseLayerProps {
  isViewPage?: boolean;
}

const BaseLayer: React.FC<BaseLayerProps> = ({ isViewPage = false }) => {
  const { 
    textObjects, 
    imageObjects,
    updateTextObject, 
    deleteTextObject,
    deleteImageObject,
    addTextObject,
    addImageObject
  } = useAdminConfigStore();
  const { 
    selectedObjectId,
    hoveredObjectId,
    currentTool,
    setSelectedObjectId,
    setHoveredObjectId,
  } = useEditorStore();
  const { 
    defaultCheckedColor,
    defaultUncheckedColor,
    checkedBackgroundColor,
    uncheckedBackgroundColor,
    checkedBackgroundOpacity,
    uncheckedBackgroundOpacity
  } = useCheckboxStore();

  // 드래그 상태 관리
  const [dragState, setDragState] = useState<{
    isDragging: boolean;
    draggedObjectId: string | null;
    offset: { x: number; y: number };
    currentPosition: { x: number; y: number };
  }>({
    isDragging: false,
    draggedObjectId: null,
    offset: { x: 0, y: 0 },
    currentPosition: { x: 0, y: 0 }
  });

  // 크기조절 상태 관리
  const [resizeState, setResizeState] = useState<{
    isResizing: boolean;
    resizedObjectId: string | null;
    resizeHandle: string | null;
    startPosition: { x: number; y: number };
    startSize: { width: number; height: number };
    startObjectPosition: { x: number; y: number };
    currentSize?: { width: number; height: number };
    currentPosition?: { x: number; y: number };
  }>({
    isResizing: false,
    resizedObjectId: null,
    resizeHandle: null,
    startPosition: { x: 0, y: 0 },
    startSize: { width: 0, height: 0 },
    startObjectPosition: { x: 0, y: 0 }
  });

  // 인라인 편집 상태
  const [editingObjectId, setEditingObjectId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>('');
  
  // 트리플 클릭 감지를 위한 상태
  const [clickCount, setClickCount] = useState<number>(0);
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null);

  // 인라인 편집 관련 함수들 (먼저 정의)
  const startInlineEdit = useCallback((obj: TextObject) => {
    setEditingObjectId(obj.id);
    setEditingText(obj.text);
    
    // 다음 틱에서 커서를 마지막으로 이동
    setTimeout(() => {
      const textarea = document.querySelector('textarea[data-editing="true"]') as HTMLTextAreaElement;
      if (textarea) {
        const textLength = obj.text.length;
        textarea.setSelectionRange(textLength, textLength);
        textarea.focus();
      }
    }, 0);
  }, []);

  const finishInlineEdit = useCallback(async () => {
    if (editingObjectId && editingText !== undefined) {
      await updateTextObject(editingObjectId, { text: editingText });
      setEditingObjectId(null);
      setEditingText('');
    }
  }, [editingObjectId, editingText, updateTextObject]);

  const cancelInlineEdit = useCallback(() => {
    setEditingObjectId(null);
    setEditingText('');
  }, []);

  // 선택된 객체 복제
  const handleDuplicateObject = useCallback(async () => {
    if (!selectedObjectId) return;
    
    // 텍스트 객체 복제
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      const duplicatedObj = {
        ...textObj,
        x: textObj.x + 20, // 약간 오프셋
        y: textObj.y + 20,
        isEditing: false
      };
      delete (duplicatedObj as any).id; // id 제거하여 새로 생성되도록
      await addTextObject(duplicatedObj);
      return;
    }
    
    // 이미지 객체 복제
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      const duplicatedObj = {
        ...imageObj,
        x: imageObj.x + 20, // 약간 오프셋
        y: imageObj.y + 20
      };
      delete (duplicatedObj as any).id; // id 제거하여 새로 생성되도록
      await addImageObject(duplicatedObj);
      return;
    }
  }, [selectedObjectId, textObjects, imageObjects, addTextObject, addImageObject]);

  // 선택된 객체 삭제
  const handleDeleteObject = useCallback(async () => {
    if (!selectedObjectId) return;
    
    // 텍스트 객체 삭제
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj && textObj.permissions?.deletable) {
      await deleteTextObject(selectedObjectId);
      setSelectedObjectId(null);
      return;
    }
    
    // 이미지 객체 삭제
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj && imageObj.permissions?.deletable) {
      await deleteImageObject(selectedObjectId);
      setSelectedObjectId(null);
      return;
    }
  }, [selectedObjectId, textObjects, imageObjects, deleteTextObject, deleteImageObject, setSelectedObjectId]);

  // 키보드 단축키 핸들러
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // 인라인 편집 중이면 키보드 단축키 비활성화
      if (editingObjectId) return;
      
      // ViewPage에서는 키보드 단축키 비활성화
      if (isViewPage) return;
      
      // Ctrl+D: 복제
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        if (selectedObjectId) {
          handleDuplicateObject();
        }
      }
      
      // Delete: 삭제
      if (e.key === 'Delete') {
        e.preventDefault();
        if (selectedObjectId) {
          handleDeleteObject();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [editingObjectId, selectedObjectId, isViewPage, handleDuplicateObject, handleDeleteObject]);

  // 포인터 다운 핸들러 (드래그 시작) - 마우스, 터치, 펜 모두 지원
  const handlePointerDown = useCallback((e: React.PointerEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (editingObjectId) {
      finishInlineEdit();
      return;
    }

    const obj = textObjects.find(o => o.id === id) || imageObjects.find(o => o.id === id);
    if (!obj) return;

    setSelectedObjectId(id);
    setHoveredObjectId(null);

    // 이동 권한이 없는 경우 드래그 시작하지 않음
    if (!obj.permissions?.movable) {
      console.log('Object not movable, skipping drag:', id);
      return;
    }

    // 포인터 캡처 설정 (빠른 드래그 시에도 마우스에서 떨어지지 않도록)
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (error) {
      // 포인터 캡처 실패는 무시
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setDragState({
      isDragging: true,
      draggedObjectId: id,
      offset: { x, y },
      currentPosition: { x: obj.x, y: obj.y }
    });
  }, [editingObjectId, finishInlineEdit, textObjects, imageObjects, setSelectedObjectId, setHoveredObjectId]);

  // 마우스 다운 핸들러 (호환성 유지)
  const handleMouseDown = useCallback((e: React.MouseEvent, id: string) => {
    handlePointerDown(e as any, id);
  }, [handlePointerDown]);

  // 크기조절 핸들 포인터 다운 - 마우스, 터치, 펜 모두 지원
  const handleResizePointerDown = useCallback((e: React.PointerEvent, handle: string, objectId: string) => {
    e.preventDefault();
    e.stopPropagation();

    const obj = textObjects.find(o => o.id === objectId) || imageObjects.find(o => o.id === objectId);
    if (!obj) return;

    // 크기 조절 권한이 없는 경우 리사이즈 시작하지 않음
    if (!obj.permissions?.resizable) {
      return;
    }

    setResizeState({
      isResizing: true,
      resizedObjectId: objectId,
      resizeHandle: handle,
      startPosition: { x: e.clientX, y: e.clientY },
      startSize: { width: obj.width, height: obj.height },
      startObjectPosition: { x: obj.x, y: obj.y }
    });
  }, [textObjects, imageObjects]);

  // 크기조절 핸들 마우스 다운 (호환성 유지)
  const handleResizeMouseDown = useCallback((e: React.MouseEvent, handle: string, objectId: string) => {
    handleResizePointerDown(e as any, handle, objectId);
  }, [handleResizePointerDown]);

  // 포인터 이동 핸들러 (드래그 중) - 마우스, 터치, 펜 모두 지원
  const handlePointerMove = (e: React.PointerEvent) => {
    // 드래그 처리
    if (dragState.isDragging && dragState.draggedObjectId) {
      // 캔버스 컨테이너의 실제 위치 계산 (스케일 고려)
      const canvasContainer = e.currentTarget.closest('[data-canvas-container]') as HTMLElement;
      if (!canvasContainer) return;

      const rect = canvasContainer.getBoundingClientRect();
      const transform = window.getComputedStyle(canvasContainer).transform;

      let scale = 1;
      if (transform && transform !== 'none') {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const values = matrix[1].split(',').map(v => parseFloat(v.trim()));
          scale = values[0];
        }
      }

      const mouseX = (e.clientX - rect.left) / scale;
      const mouseY = (e.clientY - rect.top) / scale;
      
      const newPosition = {
        x: mouseX - dragState.offset.x / scale,
        y: mouseY - dragState.offset.y / scale
      };

      // 원본 객체 찾기
      const obj = textObjects.find(o => o.id === dragState.draggedObjectId) || imageObjects.find(o => o.id === dragState.draggedObjectId);

      // 좌표 유효성 검사 (원본 객체의 좌표를 기본값으로 사용)
      let safeNewPosition = newPosition;
      if (!isValidPosition(newPosition) && obj) {
        safeNewPosition = { x: obj.x, y: obj.y };
      }

      setDragState(prev => ({
        ...prev,
        currentPosition: safeNewPosition
      }));
    }

    // 크기조절 처리
    if (resizeState.isResizing && resizeState.resizedObjectId) {
      const canvasContainer = e.currentTarget.closest('[data-canvas-container]') as HTMLElement;
      if (!canvasContainer) return;

      const rect = canvasContainer.getBoundingClientRect();
      const transform = window.getComputedStyle(canvasContainer).transform;

      let scale = 1;
      if (transform && transform !== 'none') {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const values = matrix[1].split(',').map(v => parseFloat(v.trim()));
          scale = values[0];
        }
      }

      const mouseX = (e.clientX - rect.left) / scale;
      const mouseY = (e.clientY - rect.top) / scale;

      // startPosition을 캔버스 좌표계로 변환
      const startX = (resizeState.startPosition.x - rect.left) / scale;
      const startY = (resizeState.startPosition.y - rect.top) / scale;

      const deltaX = mouseX - startX;
      const deltaY = mouseY - startY;

      let newWidth = resizeState.startSize.width;
      let newHeight = resizeState.startSize.height;
      let newX = resizeState.startObjectPosition.x;
      let newY = resizeState.startObjectPosition.y;

      // 현재 크기 조절 중인 객체가 이미지인지 확인하고 비율 유지 설정 확인
      const resizingImageObj = imageObjects.find(obj => obj.id === resizeState.resizedObjectId);
      const shouldMaintainAspectRatio = resizingImageObj?.maintainAspectRatio || false;
      const originalAspectRatio = resizingImageObj ? resizeState.startSize.width / resizeState.startSize.height : 1;

      // 핸들에 따른 크기 및 위치 계산
      switch (resizeState.resizeHandle) {
        case 'nw': // 좌상단
          newWidth = Math.max(50, resizeState.startSize.width - deltaX);
          newHeight = shouldMaintainAspectRatio 
            ? newWidth / originalAspectRatio 
            : Math.max(30, resizeState.startSize.height - deltaY);
          newX = resizeState.startObjectPosition.x + (resizeState.startSize.width - newWidth);
          newY = resizeState.startObjectPosition.y + (resizeState.startSize.height - newHeight);
          break;
        case 'ne': // 우상단
          newWidth = Math.max(50, resizeState.startSize.width + deltaX);
          newHeight = shouldMaintainAspectRatio 
            ? newWidth / originalAspectRatio 
            : Math.max(30, resizeState.startSize.height - deltaY);
          newY = resizeState.startObjectPosition.y + (resizeState.startSize.height - newHeight);
          break;
        case 'sw': // 좌하단
          newWidth = Math.max(50, resizeState.startSize.width - deltaX);
          newHeight = shouldMaintainAspectRatio 
            ? newWidth / originalAspectRatio 
            : Math.max(30, resizeState.startSize.height + deltaY);
          newX = resizeState.startObjectPosition.x + (resizeState.startSize.width - newWidth);
          break;
        case 'se': // 우하단
          newWidth = Math.max(50, resizeState.startSize.width + deltaX);
          newHeight = shouldMaintainAspectRatio 
            ? newWidth / originalAspectRatio 
            : Math.max(30, resizeState.startSize.height + deltaY);
          break;
        case 'n': // 상단
          if (shouldMaintainAspectRatio) {
            newHeight = Math.max(30, resizeState.startSize.height - deltaY);
            newWidth = newHeight * originalAspectRatio;
            newX = resizeState.startObjectPosition.x + (resizeState.startSize.width - newWidth) / 2;
          } else {
            newHeight = Math.max(30, resizeState.startSize.height - deltaY);
          }
          newY = resizeState.startObjectPosition.y + (resizeState.startSize.height - newHeight);
          break;
        case 's': // 하단
          if (shouldMaintainAspectRatio) {
            newHeight = Math.max(30, resizeState.startSize.height + deltaY);
            newWidth = newHeight * originalAspectRatio;
            newX = resizeState.startObjectPosition.x + (resizeState.startSize.width - newWidth) / 2;
          } else {
            newHeight = Math.max(30, resizeState.startSize.height + deltaY);
          }
          break;
        case 'w': // 좌측
          if (shouldMaintainAspectRatio) {
            newWidth = Math.max(50, resizeState.startSize.width - deltaX);
            newHeight = newWidth / originalAspectRatio;
            newY = resizeState.startObjectPosition.y + (resizeState.startSize.height - newHeight) / 2;
          } else {
            newWidth = Math.max(50, resizeState.startSize.width - deltaX);
          }
          newX = resizeState.startObjectPosition.x + (resizeState.startSize.width - newWidth);
          break;
        case 'e': // 우측
          if (shouldMaintainAspectRatio) {
            newWidth = Math.max(50, resizeState.startSize.width + deltaX);
            newHeight = newWidth / originalAspectRatio;
            newY = resizeState.startObjectPosition.y + (resizeState.startSize.height - newHeight) / 2;
          } else {
            newWidth = Math.max(50, resizeState.startSize.width + deltaX);
          }
          break;
      }

      // 좌표와 크기 유효성 검사
      const validPosition = { x: newX, y: newY };
      const validSize = { width: newWidth, height: newHeight };

      if (isValidPosition(validPosition) && isValidSize(validSize)) {
        // 임시로 로컬 상태에 저장 (실시간 반영)
        setResizeState(prev => ({
          ...prev,
          currentSize: validSize,
          currentPosition: validPosition
        }));
      }
    }
  };

  // 포인터 업 핸들러
  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    // 포인터 캡처 해제
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (error) {
      // 포인터 캡처 해제 실패는 무시
    }

    // 드래그 종료 처리
    if (dragState.isDragging && dragState.draggedObjectId) {
      const finalPosition = dragState.currentPosition;
      
      updateTextObject(dragState.draggedObjectId, {
        x: finalPosition.x,
        y: finalPosition.y
      }).catch(error => {
        console.error('Failed to update object position:', error);
      });

      setDragState({
        isDragging: false,
        draggedObjectId: null,
        offset: { x: 0, y: 0 },
        currentPosition: { x: 0, y: 0 }
      });
    }

    // 리사이즈 종료 처리
    if (resizeState.isResizing && resizeState.resizedObjectId) {
      const finalSize = resizeState.currentSize;
      const finalPosition = resizeState.currentPosition;
      
      if (finalSize && finalPosition) {
        updateTextObject(resizeState.resizedObjectId, {
          x: finalPosition.x,
          y: finalPosition.y,
          width: finalSize.width,
          height: finalSize.height
        }).catch(error => {
          console.error('Failed to update object size/position:', error);
        });
      }

      setResizeState({
        isResizing: false,
        resizedObjectId: null,
        resizeHandle: '',
        startPosition: { x: 0, y: 0 },
        startSize: { width: 0, height: 0 },
        startObjectPosition: { x: 0, y: 0 }
      });
    }
  }, [dragState, resizeState, updateTextObject]);

  // 마우스 업 핸들러 (호환성 유지)
  const handleMouseUp = useCallback(() => {
    // 포인터 업과 동일한 처리를 하되, 포인터 캡처는 사용하지 않음
    if (dragState.isDragging && dragState.draggedObjectId) {
      const finalPosition = dragState.currentPosition;
      
      updateTextObject(dragState.draggedObjectId, {
        x: finalPosition.x,
        y: finalPosition.y
      }).catch(error => {
        console.error('Failed to update object position:', error);
      });

      setDragState({
        isDragging: false,
        draggedObjectId: null,
        offset: { x: 0, y: 0 },
        currentPosition: { x: 0, y: 0 }
      });
    }

    if (resizeState.isResizing && resizeState.resizedObjectId) {
      const finalSize = resizeState.currentSize;
      const finalPosition = resizeState.currentPosition;
      
      if (finalSize && finalPosition) {
        updateTextObject(resizeState.resizedObjectId, {
          x: finalPosition.x,
          y: finalPosition.y,
          width: finalSize.width,
          height: finalSize.height
        }).catch(error => {
          console.error('Failed to update object size/position:', error);
        });
      }

      setResizeState({
        isResizing: false,
        resizedObjectId: null,
        resizeHandle: '',
        startPosition: { x: 0, y: 0 },
        startSize: { width: 0, height: 0 },
        startObjectPosition: { x: 0, y: 0 }
      });
    }
  }, [dragState, resizeState, updateTextObject]);

  // 마우스 이동 핸들러 (호환성 유지)
  const handleMouseMove = (e: React.MouseEvent) => {
    handlePointerMove(e as any);
  };

  // 텍스트 객체 클릭 핸들러 (백업용)
  const handleObjectClick = useCallback((e: React.MouseEvent, id: string) => {
    // 셀 객체인지 확인
    const textObj = textObjects.find(obj => obj.id === id);
    const isCell = textObj?.cellType === 'cell';

    if (!isViewPage && currentTool === 'select') {
      // 셀 객체는 선택하지 않음
      if (isCell) {
        return;
      }
      
      setSelectedObjectId(id);
      if (e) {
        e.stopPropagation();
      }
    }
  }, [currentTool, isViewPage, setSelectedObjectId, textObjects]);

  // 캔버스 빈 공간 클릭 핸들러 (선택 해제)
  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    // 인라인 편집 중이면 편집 종료
    if (editingObjectId) {
      finishInlineEdit();
      return;
    }
    
    if (!isViewPage && currentTool === 'select') {
      // 객체가 아닌 빈 공간을 클릭했을 때만 선택 해제
      if (e.target === e.currentTarget) {
        setSelectedObjectId(null);
      }
    }
  }, [editingObjectId, finishInlineEdit, setSelectedObjectId, isViewPage, currentTool]);

  // 개선된 텍스트 박스 클릭 핸들러
  const handleTextBoxClick = (obj: TextObject, e: React.MouseEvent) => {
    if (currentTool !== 'select') return;
    
    const isCell = obj.cellType === 'cell';
    
    // 엑셀 셀: 한번 클릭으로 선택, 더블 클릭으로 편집
    if (isCell) {
      const newClickCount = clickCount + 1;
      setClickCount(newClickCount);
      
      if (clickTimer) {
        clearTimeout(clickTimer);
      }
      
      if (newClickCount === 2) {
        startInlineEdit(obj);
        setClickCount(0);
        setClickTimer(null);
      } else {
        // 단일 클릭: 선택
        handleObjectClick(e, obj.id);
        
        const timer = setTimeout(() => {
          setClickCount(0);
          setClickTimer(null);
        }, 300);
        setClickTimer(timer);
      }
      return;
    }
    
    // 일반 텍스트 객체: 트리플 클릭으로 편집
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    
    if (clickTimer) {
      clearTimeout(clickTimer);
    }
    
    if (newClickCount === 3) {
      startInlineEdit(obj);
      setClickCount(0);
      setClickTimer(null);
    } else {
      // 1,2 클릭: 객체 선택
      handleObjectClick(e, obj.id);
      
      const timer = setTimeout(() => {
        setClickCount(0);
        setClickTimer(null);
      }, 500);
      setClickTimer(timer);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      finishInlineEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancelInlineEdit();
    }
  };

  // 컨텍스트 메뉴 방지 (우클릭, 터치 길게 누르기)
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <div 
      className="absolute inset-0"
      onClick={handleCanvasClick}
      // 포인터 이벤트 (터치, 펜, 마우스 모두 지원)
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      // 마우스 이벤트 (호환성 유지)
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      // 컨텍스트 메뉴 방지
      onContextMenu={handleContextMenu}
      style={{
        touchAction: 'none', // 터치 스크롤 및 줌 방지
        pointerEvents: (currentTool === 'pen' || currentTool === 'eraser') ? 'none' : 'auto'
      }}
    >
      {/* 모든 객체를 zIndex 순서대로 정렬하여 렌더링 */}
      {[...textObjects, ...imageObjects]
        .sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0))
        .map((obj) => {
          // 객체 타입 확인
          const isTextObject = 'text' in obj;
          const isImageObject = 'src' in obj;
          
          // 드래그 중인 객체의 현재 위치 계산
          const isDragging = dragState.isDragging && dragState.draggedObjectId === obj.id;
          const isResizing = resizeState.isResizing && resizeState.resizedObjectId === obj.id;
          
          const currentX = isDragging ? dragState.currentPosition.x : 
                          isResizing && resizeState.currentPosition ? resizeState.currentPosition.x : obj.x;
          const currentY = isDragging ? dragState.currentPosition.y : 
                          isResizing && resizeState.currentPosition ? resizeState.currentPosition.y : obj.y;
          const currentWidth = isResizing && resizeState.currentSize ? resizeState.currentSize.width : obj.width;
          const currentHeight = isResizing && resizeState.currentSize ? resizeState.currentSize.height : obj.height;
          
          const isSelected = selectedObjectId === obj.id;
          const isHovered = hoveredObjectId === obj.id && !isViewPage;
          
          if (isTextObject) {
            // 텍스트 객체 렌더링
            const textObj = obj as typeof textObjects[0];
            
            // boxStyle 기본값 설정
            const boxStyle = textObj.boxStyle || {
              backgroundColor: 'transparent',
              backgroundOpacity: 1,
              borderColor: '#000000',
              borderWidth: 0,
              borderRadius: 0
            };
            
            // textStyle 기본값 설정
            const textStyle = textObj.textStyle || {
              color: '#000000',
              bold: false,
              italic: false,
              horizontalAlign: 'left',
              verticalAlign: 'middle',
              fontFamily: 'Arial'
            };
            
            return (
              <div
                key={obj.id}
                className={`absolute select-none ${
                  isSelected ? 'ring-4 ring-blue-600' : 
                  isHovered ? 'ring-2 ring-gray-400' : ''
                }`}
                style={{
                  left: currentX,
                  top: currentY,
                  width: currentWidth,
                  height: currentHeight,
                  opacity: obj.opacity,
                  zIndex: obj.zIndex || 0,
                  cursor: editingObjectId === obj.id ? 'text' : (
                    isViewPage 
                      ? 'default' 
                      : (isDragging ? 'grabbing' : (obj.permissions?.movable ? 'grab' : 'default'))
                  ),
                  border: `${boxStyle.borderWidth}px solid ${boxStyle.borderColor}`,
                  borderRadius: `${boxStyle.borderRadius}px`,
                  transition: isDragging ? 'none' : 'all 0.1s ease',
                  pointerEvents: (currentTool === 'pen' || currentTool === 'eraser') ? 'none' : 'auto'
                }}
                onClick={(e) => {
                  // 드래그 중이 아닐 때만 텍스트 박스 클릭 처리
                  if (!isDragging) {
                    handleTextBoxClick(textObj, e);
                  } else {
                    handleObjectClick(e, obj.id);
                  }
                }}
                onPointerDown={(e) => handlePointerDown(e, obj.id)}
                onMouseDown={(e) => handleMouseDown(e, obj.id)}
                onMouseEnter={() => setHoveredObjectId(obj.id)}
                onMouseLeave={() => setHoveredObjectId(null)}
              >
                {/* 배경 레이어 (투명도 별도 적용) */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: textObj.hasCheckbox && textObj.checkboxChecked 
                      ? checkedBackgroundColor 
                      : textObj.hasCheckbox && !textObj.checkboxChecked 
                        ? uncheckedBackgroundColor 
                        : boxStyle.backgroundColor,
                    opacity: textObj.hasCheckbox && textObj.checkboxChecked 
                      ? checkedBackgroundOpacity
                      : textObj.hasCheckbox && !textObj.checkboxChecked 
                        ? uncheckedBackgroundOpacity
                        : boxStyle.backgroundOpacity,
                    borderRadius: `${boxStyle.borderRadius}px`,
                  }}
                />
                
                {/* 텍스트 레이어 */}
                <div
                  className="relative z-10 h-full flex items-center"
                  style={{
                    justifyContent: textStyle.horizontalAlign === 'left' ? 'flex-start' : 
                                   textStyle.horizontalAlign === 'center' ? 'center' : 'flex-end',
                    alignItems: textStyle.verticalAlign === 'top' ? 'flex-start' : 
                               textStyle.verticalAlign === 'middle' ? 'center' : 'flex-end',
                    padding: '8px',
                  }}
                >
                  {editingObjectId === obj.id ? (
                    // 인라인 편집 모드
                    <textarea
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onBlur={finishInlineEdit}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      data-editing="true"
                      className="w-full h-full bg-transparent border-none outline-none resize-none"
                      style={{
                        color: textStyle.color,
                        fontFamily: textStyle.fontFamily,
                        fontSize: `${textObj.fontSize || 16}px`,
                        fontWeight: textStyle.bold ? 'bold' : 'normal',
                        fontStyle: textStyle.italic ? 'italic' : 'normal',
                        textAlign: textStyle.horizontalAlign,
                        lineHeight: '1.2',
                        wordBreak: 'break-word',
                        cursor: 'text',
                      }}
                    />
                  ) : (
                    // 일반 표시 모드
                    <div
                      style={{
                        color: textStyle.color,
                        fontFamily: textStyle.fontFamily,
                        fontSize: `${textObj.fontSize || 16}px`,
                        fontWeight: textStyle.bold ? 'bold' : 'normal',
                        fontStyle: textStyle.italic ? 'italic' : 'normal',
                        textAlign: textStyle.horizontalAlign,
                        lineHeight: '1.2',
                        wordBreak: 'break-word',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {textObj.hasCheckbox && (
                        <div
                          className="checkbox-area"
                          onClick={(e) => {
                            e.stopPropagation();
                            const isChecked = !textObj.checkboxChecked;
                            updateTextObject(textObj.id, { 
                              checkboxChecked: isChecked,
                              // 체크박스 색상이 없으면 기본값 적용
                              checkboxCheckedColor: textObj.checkboxCheckedColor || defaultCheckedColor,
                              checkboxUncheckedColor: textObj.checkboxUncheckedColor || defaultUncheckedColor
                            });
                          }}
                          onPointerDown={(e) => {
                            e.stopPropagation();
                          }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '30px',
                            height: '30px',
                            backgroundColor: textObj.checkboxChecked 
                              ? (textObj.checkboxCheckedColor || defaultCheckedColor)
                              : (textObj.checkboxUncheckedColor || defaultUncheckedColor),
                            border: `2px solid ${textObj.checkboxChecked 
                              ? (textObj.checkboxCheckedColor || defaultCheckedColor)
                              : '#d1d5db'}`,
                            borderRadius: '4px',
                            marginRight: '8px',
                            transition: 'all 0.2s ease',
                            userSelect: 'none',
                            flexShrink: 0, // 체크박스 크기 고정
                            pointerEvents: 'auto', // 체크박스 클릭 가능
                            cursor: 'pointer',
                          }}
                        >
                          {textObj.checkboxChecked && (
                            <svg
                              className="checkbox-area"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="checkbox-area"
                                d="M13.5 4.5L6 12L2.5 8.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      )}
                      <span
                        style={{
                          flex: 1, // 남은 공간 차지
                        }}
                      >
                        {textObj.text}
                      </span>
                    </div>
                  )}
                </div>

                {/* 크기조절 핸들 (선택된 객체이고 관리자 페이지이고 크기조절 권한이 있을 때) */}
                {isSelected && !isViewPage && obj.permissions?.resizable && (
                  <>
                    {/* 모서리 핸들 */}
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-nw-resize shadow-md"
                      style={{ left: -6, top: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'nw', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'nw', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-ne-resize shadow-md"
                      style={{ right: -6, top: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'ne', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'ne', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-sw-resize shadow-md"
                      style={{ left: -6, bottom: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'sw', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'sw', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-se-resize shadow-md"
                      style={{ right: -6, bottom: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'se', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'se', obj.id)}
                    />
                    
                    {/* 변 중앙 핸들 */}
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-n-resize shadow-md"
                      style={{ left: '50%', top: -6, transform: 'translateX(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'n', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'n', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-s-resize shadow-md"
                      style={{ left: '50%', bottom: -6, transform: 'translateX(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 's', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 's', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-w-resize shadow-md"
                      style={{ left: -6, top: '50%', transform: 'translateY(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'w', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'w', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-e-resize shadow-md"
                      style={{ right: -6, top: '50%', transform: 'translateY(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'e', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'e', obj.id)}
                    />
                  </>
                )}
              </div>
            );
          } else if (isImageObject) {
            // 이미지 객체 렌더링
            const imageObj = obj as typeof imageObjects[0];
            
            return (
              <div
                key={obj.id}
                className={`absolute select-none ${
                  isSelected ? 'ring-4 ring-blue-600' : 
                  isHovered ? 'ring-2 ring-gray-400' : ''
                }`}
                style={{
                  left: currentX,
                  top: currentY,
                  width: currentWidth,
                  height: currentHeight,
                  opacity: obj.opacity,
                  zIndex: obj.zIndex || 0,
                  cursor: editingObjectId === obj.id ? 'text' : (
                    isViewPage 
                      ? 'default' 
                      : (isDragging ? 'grabbing' : (obj.permissions?.movable ? 'grab' : 'default'))
                  ),
                  transition: isDragging ? 'none' : 'all 0.1s ease',
                  pointerEvents: (currentTool === 'pen' || currentTool === 'eraser') ? 'none' : 'auto'
                }}
                onClick={(e) => handleObjectClick(e, obj.id)}
                onPointerDown={(e) => handlePointerDown(e, obj.id)}
                onMouseDown={(e) => handleMouseDown(e, obj.id)}
                onMouseEnter={() => setHoveredObjectId(obj.id)}
                onMouseLeave={() => setHoveredObjectId(null)}
              >
                {/* 이미지 */}
                <img
                  src={imageObj.src}
                  alt=""
                  className="w-full h-full object-contain"
                  draggable={false}
                  style={{
                    pointerEvents: 'none',
                  }}
                />

                {/* 크기조절 핸들 (선택된 객체이고 관리자 페이지이고 크기조절 권한이 있을 때) */}
                {isSelected && !isViewPage && obj.permissions?.resizable && (
                  <>
                    {/* 모서리 핸들 */}
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-nw-resize shadow-md"
                      style={{ left: -6, top: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'nw', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'nw', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-ne-resize shadow-md"
                      style={{ right: -6, top: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'ne', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'ne', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-sw-resize shadow-md"
                      style={{ left: -6, bottom: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'sw', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'sw', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-se-resize shadow-md"
                      style={{ right: -6, bottom: -6 }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'se', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'se', obj.id)}
                    />
                    
                    {/* 변 중앙 핸들 */}
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-n-resize shadow-md"
                      style={{ left: '50%', top: -6, transform: 'translateX(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'n', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'n', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-s-resize shadow-md"
                      style={{ left: '50%', bottom: -6, transform: 'translateX(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 's', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 's', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-w-resize shadow-md"
                      style={{ left: -6, top: '50%', transform: 'translateY(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'w', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'w', obj.id)}
                    />
                    <div 
                      className="absolute w-3 h-3 bg-blue-600 border-2 border-white rounded-sm cursor-e-resize shadow-md"
                      style={{ right: -6, top: '50%', transform: 'translateY(-50%)' }}
                      onPointerDown={(e) => handleResizePointerDown(e, 'e', obj.id)}
                      onMouseDown={(e) => handleResizeMouseDown(e, 'e', obj.id)}
                    />
                  </>
                )}
              </div>
            );
          }
          
          return null;
        })}
    </div>
  );
};

export default BaseLayer; 