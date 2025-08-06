import { useCallback } from 'react';
import { useUndoRedoStore } from '../../../store/undoRedoStore';
import { useAdminConfigStore } from '../../../store/adminConfigStore';
import { Action } from '../../../types';

export const useUndoRedoActions = () => {
  const { recordAction, undo, redo } = useUndoRedoStore();
  const { 
    textObjects, 
    imageObjects,
    updateTextObject, 
    updateImageObject,
    deleteTextObject,
    deleteImageObject,
    addTextObject,
    addImageObject
  } = useAdminConfigStore();

  // Action 적용 함수
  const applyAction = useCallback(async (action: Action) => {
    try {
      switch (action.type) {
        case 'move':
          // 이동 작업 적용
          const movedObject = textObjects.find(obj => obj.id === action.targetId) ||
                            imageObjects.find(obj => obj.id === action.targetId);
          
          if (movedObject) {
            if ('text' in movedObject) {
              await updateTextObject(action.targetId, action.after);
            } else {
              await updateImageObject(action.targetId, action.after);
            }
          }
          break;

        case 'delete':
          // 삭제 작업 적용
          const deletedObject = textObjects.find(obj => obj.id === action.targetId) ||
                              imageObjects.find(obj => obj.id === action.targetId);
          
          if (deletedObject) {
            if ('text' in deletedObject) {
              await deleteTextObject(action.targetId);
            } else {
              await deleteImageObject(action.targetId);
            }
          }
          break;

        case 'edit':
          // 편집 작업 적용
          const editedObject = textObjects.find(obj => obj.id === action.targetId) ||
                             imageObjects.find(obj => obj.id === action.targetId);
          
          if (editedObject) {
            if ('text' in editedObject) {
              await updateTextObject(action.targetId, action.after);
            } else {
              await updateImageObject(action.targetId, action.after);
            }
          }
          break;

        case 'create':
          // 생성 작업 적용
          if (action.after.hasCheckbox !== undefined) {
            // TextObject (체크박스 포함)
            await addTextObject(action.after);
          } else {
            // ImageObject
            await addImageObject(action.after);
          }
          break;

        default:
          console.warn('알 수 없는 Action 타입:', action.type);
      }
    } catch (error) {
      console.error('Action 적용 실패:', error);
    }
  }, [textObjects, imageObjects, updateTextObject, updateImageObject, deleteTextObject, deleteImageObject, addTextObject, addImageObject]);

  // Undo 실행
  const executeUndo = useCallback(async () => {
    const action = undo();
    if (action) {
      await applyAction(action);
    }
  }, [undo, applyAction]);

  // Redo 실행
  const executeRedo = useCallback(async () => {
    const action = redo();
    if (action) {
      await applyAction(action);
    }
  }, [redo, applyAction]);

  // Action 기록 함수들
  const recordMoveAction = useCallback((targetId: string, before: any, after: any) => {
    recordAction({
      type: 'move',
      targetId,
      before,
      after
    });
  }, [recordAction]);

  const recordDeleteAction = useCallback((targetId: string, before: any) => {
    recordAction({
      type: 'delete',
      targetId,
      before,
      after: null
    });
  }, [recordAction]);

  const recordEditAction = useCallback((targetId: string, before: any, after: any) => {
    recordAction({
      type: 'edit',
      targetId,
      before,
      after
    });
  }, [recordAction]);

  const recordCreateAction = useCallback((targetId: string, after: any) => {
    recordAction({
      type: 'create',
      targetId,
      before: null,
      after
    });
  }, [recordAction]);

  return {
    executeUndo,
    executeRedo,
    recordMoveAction,
    recordDeleteAction,
    recordEditAction,
    recordCreateAction
  };
}; 