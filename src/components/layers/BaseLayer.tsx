import React, { useState, useCallback, useEffect } from 'react';
import { useAdminConfigStore } from '../../store/adminConfigStore';
import { useEditorStore } from '../../store/editorStore';
import { useCellSelectionStore } from '../../store/cellSelectionStore';
import { TextObject } from '../../types';
import { useUndoRedo } from '../../hooks/useUndoRedo';

// 분리된 컴포넌트들 import
import { TextObjectRenderer, ImageObjectRenderer } from './BaseLayer/components';

// 커스텀 hooks import
import {
  useDragState,
  useResizeState,
  useInlineEdit,
  useDeviceDetection,
  useClipboard,
  useObjectSelection
} from './BaseLayer/hooks';

// 유틸리티 함수들 import
import {
  getCanvasCoordinates,
  getCanvasScale,
  applyGridSnap,
  calculateDragPosition,
  calculateResizeDeltas,
  validatePositionAndSize,
  calculateResize,
  handleContextMenu,
  handleKeyDown,
  calculateCellRange,
  handlePointerCapture
} from './BaseLayer/utils';

// 타입 import
import { BaseLayerProps, ClickState, TextObjectData, ImageObjectData } from './BaseLayer/types';

const BaseLayer: React.FC<BaseLayerProps> = ({ isViewPage = false }) => {
  const { 
    textObjects, 
    imageObjects,
    updateTextObject, 
    updateImageObject,
    deleteTextObject,
    deleteImageObject,
    addTextObject,
    addImageObject,
    settings
  } = useAdminConfigStore();
  
  const { 
    selectedObjectId,
    hoveredObjectId,
    currentTool,
    setSelectedObjectId,
    setHoveredObjectId,
  } = useEditorStore();

  // 디바이스 감지 hook
  const { updatePointerEventTime, isGhostClick, isIPhone } = useDeviceDetection();

  // 드래그 상태 hook
  const { dragState, startDrag, updateDragPosition, endDrag, isDraggingObject } = useDragState();

  // 리사이즈 상태 hook
  const { resizeState, startResize, updateResize, endResize, isResizingObject } = useResizeState();

  // 클립보드 hook
  const { handleClipboardPaste } = useClipboard(addImageObject, addTextObject, settings);

  // Undo/Redo hook
  const { saveSnapshot, executeUndo, executeRedo, initializePresent } = useUndoRedo();

  // 인라인 편집 hook
  const {
    editingObjectId,
    editingText,
    startInlineEdit,
    finishInlineEdit,
    cancelInlineEdit,
    updateEditingText
  } = useInlineEdit(updateTextObject, setSelectedObjectId, isViewPage);

  // 객체 선택 hook
  const {
    handleDuplicateObject,
    handleDeleteObject,
    handleBulkClearCellText
  } = useObjectSelection(
    textObjects,
    imageObjects,
    deleteTextObject,
    deleteImageObject,
    addTextObject,
    addImageObject,
    updateTextObject,
    setSelectedObjectId
  );

  // 트리플 클릭 감지를 위한 상태
  const [clickState, setClickState] = useState<ClickState>({
    clickCount: 0,
    clickTimer: null
  });

  // 초기 스냅샷 설정
  useEffect(() => {
    // 컴포넌트 마운트 후 잠시 대기하여 초기 상태 안정화
    const timer = setTimeout(() => {
      initializePresent();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []); // 컴포넌트 마운트시에만 실행

  // 키보드 단축키 핸들러 (캔버스 포커스 시에만)
  const handleCanvasKeyDown = useCallback((e: React.KeyboardEvent) => {
    // 인라인 편집 중이면 키보드 단축키 비활성화
    if (editingObjectId) return;
    
    // Ctrl+V: 클립보드 이미지 붙여넣기 (캔버스 포커스 시에만)
    if (e.ctrlKey && e.key === 'v') {
      try {
        e.preventDefault();
      } catch (error) {
        console.debug('preventDefault failed in global keydown handler:', error);
      }
      handleClipboardPaste();
      return;
    }
    
    // ViewPage에서는 나머지 키보드 단축키 비활성화
    if (isViewPage) return;
    
    // Ctrl+Z: Undo
    if (e.ctrlKey && e.key === 'z') {
      try {
        e.preventDefault();
      } catch (error) {
        console.debug('preventDefault failed in global keydown handler:', error);
      }
      executeUndo();
      return;
    }
    
    // Ctrl+Y: Redo
    if (e.ctrlKey && e.key === 'y') {
      try {
        e.preventDefault();
      } catch (error) {
        console.debug('preventDefault failed in global keydown handler:', error);
      }
      executeRedo();
      return;
    }
    
    // Ctrl+D: 복제
    if (e.ctrlKey && e.key === 'd') {
      try {
        e.preventDefault();
      } catch (error) {
        console.debug('preventDefault failed in global keydown handler:', error);
      }
      if (selectedObjectId) {
        handleDuplicateObject(selectedObjectId);
      }
    }
    
    // Delete: 삭제 (엑셀 셀 다중선택 텍스트 내용 삭제 또는 일반 객체 삭제)
    if (e.key === 'Delete') {
      try {
        e.preventDefault();
      } catch (error) {
        console.debug('preventDefault failed in global keydown handler:', error);
      }
      
      // 다중선택된 엑셀 셀들이 있으면 텍스트 내용만 일괄 삭제
      const selectedCells = useCellSelectionStore.getState().getSelectedCells();
      if (selectedCells.length > 0) {
        handleBulkClearCellText();
        return;
      }
      
      // 일반 객체 삭제
      if (selectedObjectId) {
        handleDeleteObject(selectedObjectId).then(() => {
          // 삭제 완료 후 스냅샷 저장
          saveSnapshot();
        });
      }
    }
  }, [editingObjectId, selectedObjectId, isViewPage, handleDuplicateObject, handleDeleteObject, handleClipboardPaste, handleBulkClearCellText, executeUndo, executeRedo, saveSnapshot]);

  // 단일 포인터 다운 핸들러
  const handlePointerDown = useCallback((e: React.PointerEvent, id: string) => {
    updatePointerEventTime(e.timeStamp);
    
    // 이벤트 버블링 방지
    e.stopPropagation();
    
    // iPhone에서는 더 관대한 이벤트 처리
    const isIPhoneDevice = isIPhone();
    if (!isIPhoneDevice || e.pointerType !== 'touch') {
      e.preventDefault();
    }

    if (editingObjectId) {
      finishInlineEdit().then(() => {
        // 편집 완료 후 스냅샷 저장
        saveSnapshot();
      });
      return;
    }

    const obj = textObjects.find(o => o.id === id) || imageObjects.find(o => o.id === id);
    if (!obj) return;

    setSelectedObjectId(id);
    setHoveredObjectId(null);

    // 이동 권한이 없는 경우 드래그 시작하지 않음
    if (!obj.permissions?.movable) {
      return;
    }

    // 포인터 캡처
    handlePointerCapture(e, isIPhoneDevice, 'set');

    const rect = e.currentTarget.getBoundingClientRect();
    const offset = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    startDrag(id, offset, { x: obj.x, y: obj.y });
  }, [editingObjectId, finishInlineEdit, textObjects, imageObjects, setSelectedObjectId, setHoveredObjectId, updatePointerEventTime, isIPhone, startDrag, saveSnapshot]);

  // 크기조절 핸들 포인터 다운
  const handleResizePointerDown = useCallback((e: React.PointerEvent, handle: string, objectId: string) => {
    e.stopPropagation();
    e.preventDefault();

    const obj = textObjects.find(o => o.id === objectId) || imageObjects.find(o => o.id === objectId);
    if (!obj || !obj.permissions?.resizable) return;

    startResize(
      objectId,
      handle as any,
      { x: e.clientX, y: e.clientY },
      { width: obj.width, height: obj.height },
      { x: obj.x, y: obj.y }
    );
  }, [textObjects, imageObjects, startResize]);

  // 통합 포인터 이동 핸들러
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    // 드래그 처리
    if (dragState.isDragging && dragState.draggedObjectId) {
      const canvasContainer = e.currentTarget.closest('[data-canvas-container]') as HTMLElement;
      if (!canvasContainer) return;

      const mousePosition = getCanvasCoordinates(e.clientX, e.clientY, canvasContainer);
      const scale = getCanvasScale(canvasContainer);
      const newPosition = calculateDragPosition(mousePosition, dragState.offset, scale);

      // 그리드 스냅 적용
      const gridSnapEnabled = settings?.admin?.gridSnapEnabled ?? false;
      const gridSize = settings?.admin?.gridSize ?? 32;
      
      const { position: finalPosition } = applyGridSnap(newPosition, undefined, gridSnapEnabled, gridSize);

      // 원본 객체 찾기
      const obj = textObjects.find(o => o.id === dragState.draggedObjectId) || 
                  imageObjects.find(o => o.id === dragState.draggedObjectId);

      // 좌표 유효성 검사
      const { position: safePosition } = validatePositionAndSize(
        finalPosition, 
        undefined, 
        obj ? { x: obj.x, y: obj.y } : undefined
      );

      updateDragPosition(safePosition);
    }

    // 크기조절 처리
    if (resizeState.isResizing && resizeState.resizedObjectId) {
      const canvasContainer = e.currentTarget.closest('[data-canvas-container]') as HTMLElement;
      if (!canvasContainer) return;

      const mousePosition = getCanvasCoordinates(e.clientX, e.clientY, canvasContainer);
      const startMousePosition = getCanvasCoordinates(
        resizeState.startPosition.x, 
        resizeState.startPosition.y, 
        canvasContainer
      );

      const deltas = calculateResizeDeltas(mousePosition, startMousePosition);

      // 현재 크기 조절 중인 객체가 이미지인지 확인하고 비율 유지 설정 확인
      const resizingImageObj = imageObjects.find(obj => obj.id === resizeState.resizedObjectId);
      const shouldMaintainAspectRatio = resizingImageObj?.maintainAspectRatio || false;
      const originalAspectRatio = resizingImageObj ? 
        resizeState.startSize.width / resizeState.startSize.height : 1;

      const resizeResult = calculateResize({
        handle: resizeState.resizeHandle as any,
        deltaX: deltas.x,
        deltaY: deltas.y,
        startSize: resizeState.startSize,
        startPosition: resizeState.startObjectPosition,
        maintainAspectRatio: shouldMaintainAspectRatio,
        originalAspectRatio
      });

      // 그리드 스냅 적용
      const gridSnapEnabled = settings?.admin?.gridSnapEnabled ?? false;
      const gridSize = settings?.admin?.gridSize ?? 32;
      
      const { position: finalPosition, size: finalSize } = applyGridSnap(
        { x: resizeResult.newX, y: resizeResult.newY },
        { width: resizeResult.newWidth, height: resizeResult.newHeight },
        gridSnapEnabled,
        gridSize
      );

      // 좌표와 크기 유효성 검사
      const validated = validatePositionAndSize(finalPosition, finalSize);
      if (validated.size) {
        updateResize(validated.size, validated.position);
      }
    }
  }, [
    dragState, 
    resizeState, 
    textObjects, 
    imageObjects, 
    settings, 
    updateDragPosition, 
    updateResize
  ]);

  // 통합 포인터 업 핸들러
  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    // 포인터 캡처 해제
    handlePointerCapture(e, isIPhone(), 'release');

    // 드래그 종료 처리
    if (dragState.isDragging && dragState.draggedObjectId) {
      const finalPosition = dragState.currentPosition;
      
      const textObj = textObjects.find(obj => obj.id === dragState.draggedObjectId);
      const imageObj = imageObjects.find(obj => obj.id === dragState.draggedObjectId);
      
      if (textObj) {
        updateTextObject(dragState.draggedObjectId, finalPosition).then(() => {
          // 이동 완료 후 스냅샷 저장
          saveSnapshot();
        }).catch(error => {
          console.error('Failed to update text object position:', error);
        });
      } else if (imageObj) {
        updateImageObject(dragState.draggedObjectId, finalPosition).then(() => {
          // 이동 완료 후 스냅샷 저장
          saveSnapshot();
        }).catch((error: any) => {
          console.error('Failed to update image object position:', error);
        });
      }

      endDrag();
    }

    // 리사이즈 종료 처리
    if (resizeState.isResizing && resizeState.resizedObjectId) {
      const finalSize = resizeState.currentSize;
      const finalPosition = resizeState.currentPosition;
      
      if (finalSize && finalPosition) {
        const textObj = textObjects.find(obj => obj.id === resizeState.resizedObjectId);
        const imageObj = imageObjects.find(obj => obj.id === resizeState.resizedObjectId);
        
        const updateData = {
            x: finalPosition.x,
            y: finalPosition.y,
            width: finalSize.width,
            height: finalSize.height
        };
        
        if (textObj) {
          updateTextObject(resizeState.resizedObjectId, updateData).then(() => {
            // 리사이즈 완료 후 스냅샷 저장
            saveSnapshot();
          }).catch(error => {
            console.error('Failed to update text object size/position:', error);
          });
        } else if (imageObj) {
          updateImageObject(resizeState.resizedObjectId, updateData).then(() => {
            // 리사이즈 완료 후 스냅샷 저장
            saveSnapshot();
          }).catch((error: any) => {
            console.error('Failed to update image object size/position:', error);
          });
        }
      }

      endResize();
    }
  }, [
    dragState, 
    resizeState, 
    textObjects, 
    imageObjects, 
    updateTextObject, 
    updateImageObject, 
    endDrag, 
    endResize,
    isIPhone,
    saveSnapshot
  ]);

  // 텍스트 객체 클릭 핸들러
  const handleObjectClick = useCallback((e: React.MouseEvent, id: string) => {
    if (isGhostClick(e.timeStamp)) return;
    
    // 셀 객체인지 확인
    const textObj = textObjects.find(obj => obj.id === id);
    const isCell = textObj?.cellType === 'cell';

    if (!isViewPage && currentTool === 'select') {
      // 셀 객체가 아닌 경우에만 일반 객체 선택
      if (!isCell) {
        // 셀 다중선택 해제
        const { clearSelection } = useCellSelectionStore.getState();
        clearSelection();
        
        setSelectedObjectId(id);
        if (e) {
          e.stopPropagation();
        }
      }
    }
  }, [currentTool, isViewPage, setSelectedObjectId, textObjects, isGhostClick]);

  // 캔버스 빈 공간 클릭 핸들러
  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    if (isGhostClick(e.timeStamp)) return;
    
    // 캔버스에 포커스 설정
    const canvasContainer = e.currentTarget as HTMLElement;
    canvasContainer.focus();
    
    // 인라인 편집 중이면 편집 종료
    if (editingObjectId) {
      finishInlineEdit();
      return;
    }
    
    if (!isViewPage && currentTool === 'select') {
      // 객체가 아닌 빈 공간을 클릭했을 때만 선택 해제
      if (e.target === e.currentTarget) {
        setSelectedObjectId(null);
        const { clearSelection } = useCellSelectionStore.getState();
        clearSelection();
      }
    } else if (isViewPage) {
      // ViewPage에서는 빈 공간 클릭 시 선택 해제만
      if (e.target === e.currentTarget) {
        setSelectedObjectId(null);
        const { clearSelection } = useCellSelectionStore.getState();
        clearSelection();
      }
    }
  }, [editingObjectId, finishInlineEdit, setSelectedObjectId, isViewPage, currentTool, isGhostClick]);

  // 개선된 텍스트 박스 클릭 핸들러
  const handleTextBoxClick = useCallback((obj: TextObject, e: React.MouseEvent) => {
    if (currentTool !== 'select') return;
    
    // 다른 객체를 편집 중이라면 먼저 편집 종료
    if (editingObjectId && editingObjectId !== obj.id) {
      finishInlineEdit();
    }
    
    const isCell = obj.cellType === 'cell';
    
    // 엑셀 셀: 다중선택 지원 (Ctrl, Shift)
    if (isCell) {
      const { selectCell, selectCellsInRange, getSelectedCells } = useCellSelectionStore.getState();
      const newClickCount = clickState.clickCount + 1;
      
      if (clickState.clickTimer) {
        clearTimeout(clickState.clickTimer);
      }
      
      if (newClickCount === 2) {
        // 더블 클릭: 편집 시작
        startInlineEdit(obj);
        setClickState({ clickCount: 0, clickTimer: null });
      } else {
        // 단일 클릭: 다중선택
        const isCtrlPressed = e.ctrlKey || e.metaKey;
        const isShiftPressed = e.shiftKey;
        
        if (isShiftPressed) {
          // Shift + 클릭: 범위 선택
          const selectedCells = getSelectedCells();
          if (selectedCells.length > 0) {
            const lastSelectedCell = textObjects.find(cell => cell.id === selectedCells[selectedCells.length - 1]);
            if (lastSelectedCell && lastSelectedCell.cellType === 'cell' && 
                lastSelectedCell.cellPosition && obj.cellPosition) {
              const rangeCellIds = calculateCellRange(lastSelectedCell, obj as TextObjectData, textObjects as TextObjectData[]);
              selectCellsInRange(rangeCellIds);
            }
          } else {
            selectCell(obj.id, false);
          }
        } else if (isCtrlPressed) {
          // Ctrl + 클릭: 토글 선택
          selectCell(obj.id, true);
        } else {
          // 일반 클릭: 새로 선택
          selectCell(obj.id, false);
        }
        
        // 일반 객체 선택도 해제
        if (!isCtrlPressed && !isShiftPressed) {
          setSelectedObjectId(null);
        }
        
        const timer = setTimeout(() => {
          setClickState({ clickCount: 0, clickTimer: null });
        }, 300);
        setClickState({ clickCount: newClickCount, clickTimer: timer });
      }
      return;
    }
    
    // 일반 텍스트 객체: 트리플 클릭으로 편집
    const newClickCount = clickState.clickCount + 1;
    
    if (clickState.clickTimer) {
      clearTimeout(clickState.clickTimer);
    }
    
    if (newClickCount === 3) {
      startInlineEdit(obj);
      setClickState({ clickCount: 0, clickTimer: null });
    } else {
      // 1,2 클릭: 객체 선택
      handleObjectClick(e, obj.id);
      
      const timer = setTimeout(() => {
        setClickState({ clickCount: 0, clickTimer: null });
      }, 500);
      setClickState({ clickCount: newClickCount, clickTimer: timer });
    }
  }, [
    currentTool, 
    editingObjectId, 
    finishInlineEdit, 
    startInlineEdit, 
    clickState, 
    textObjects, 
    setSelectedObjectId, 
    handleObjectClick
  ]);

  return (
    <div 
      className="absolute inset-0"
      tabIndex={0}
      onClick={handleCanvasClick}
      onKeyDown={handleCanvasKeyDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onContextMenu={handleContextMenu}
      style={{
        touchAction: 'none',
        pointerEvents: 'auto',
        outline: 'none'
      }}
    >
      {/* 모든 객체를 zIndex 순서대로 정렬하여 렌더링 */}
      {[...textObjects, ...imageObjects]
        .sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0))
        .map((obj) => {
          const isTextObject = 'text' in obj;
          const isImageObject = 'src' in obj;
          
          // 드래그 중인 객체의 현재 위치 계산
          const isDragging = isDraggingObject(obj.id);
          const isResizing = isResizingObject(obj.id);
          
          const currentX = isDragging ? dragState.currentPosition.x : 
                          isResizing && resizeState.currentPosition ? resizeState.currentPosition.x : obj.x;
          const currentY = isDragging ? dragState.currentPosition.y : 
                          isResizing && resizeState.currentPosition ? resizeState.currentPosition.y : obj.y;
          const currentWidth = isResizing && resizeState.currentSize ? resizeState.currentSize.width : obj.width;
          const currentHeight = isResizing && resizeState.currentSize ? resizeState.currentSize.height : obj.height;
          
          const isSelected = selectedObjectId === obj.id;
          const isHovered = hoveredObjectId === obj.id && !isViewPage;
          
          if (isTextObject) {
            return (
              <TextObjectRenderer
                key={obj.id}
                obj={obj as TextObjectData}
                isSelected={isSelected}
                isHovered={isHovered}
                isViewPage={isViewPage}
                isDragging={isDragging}
                isResizing={isResizing}
                currentX={currentX}
                currentY={currentY}
                currentWidth={currentWidth}
                currentHeight={currentHeight}
                currentTool={currentTool}
                editingObjectId={editingObjectId}
                editingText={editingText}
                onTextBoxClick={handleTextBoxClick}
                onObjectClick={handleObjectClick}
                onPointerDown={handlePointerDown}
                onResizePointerDown={handleResizePointerDown}
                onMouseEnter={() => setHoveredObjectId(obj.id)}
                onMouseLeave={() => setHoveredObjectId(null)}
                onEditingTextChange={updateEditingText}
                onFinishEdit={finishInlineEdit}
                onKeyDown={(e) => handleKeyDown(e, finishInlineEdit, cancelInlineEdit)}
                updateTextObject={updateTextObject}
              />
            );
          } else if (isImageObject) {
            return (
              <ImageObjectRenderer
                key={obj.id}
                obj={obj as ImageObjectData}
                isSelected={isSelected}
                isHovered={isHovered}
                isViewPage={isViewPage}
                isDragging={isDragging}
                currentX={currentX}
                currentY={currentY}
                currentWidth={currentWidth}
                currentHeight={currentHeight}
                currentTool={currentTool}
                editingObjectId={editingObjectId}
                onObjectClick={handleObjectClick}
                onPointerDown={handlePointerDown}
                onResizePointerDown={handleResizePointerDown}
                onMouseEnter={() => setHoveredObjectId(obj.id)}
                onMouseLeave={() => setHoveredObjectId(null)}
              />
            );
          }
          
          return null;
        })}
    </div>
  );
};

export default BaseLayer;