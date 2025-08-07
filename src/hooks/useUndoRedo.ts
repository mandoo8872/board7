import { useCallback } from 'react';
import { useUndoRedoStore } from '../store/undoRedoStore';
import { useAdminConfigStore } from '../store/adminConfigStore';
import { CanvasSnapshot } from '../types';

export const useUndoRedo = () => {
  const { 
    pushSnapshot, 
    undo, 
    redo, 
    canUndo, 
    canRedo, 
    setPresent 
  } = useUndoRedoStore();
  
  const {
    textObjects,
    imageObjects,
    drawObjects,
    floorImage
  } = useAdminConfigStore();

  // 현재 캔버스 상태로 스냅샷 생성
  const createSnapshot = useCallback((): CanvasSnapshot => {
    return {
      textObjects: JSON.parse(JSON.stringify(textObjects)),
      imageObjects: JSON.parse(JSON.stringify(imageObjects)),
      drawObjects: JSON.parse(JSON.stringify(drawObjects)),
      floorImage: floorImage ? JSON.parse(JSON.stringify(floorImage)) : null,
      timestamp: Date.now()
    };
  }, [textObjects, imageObjects, drawObjects, floorImage]);

  // 스냅샷을 캔버스에 복원
  const restoreSnapshot = useCallback(async (snapshot: CanvasSnapshot) => {
    try {
      // Firebase 리스너를 일시적으로 중단하여 무한 루프 방지
      const adminConfigStore = useAdminConfigStore.getState();
      
      // 각 객체 상태 복원
      adminConfigStore.textObjects = snapshot.textObjects;
      adminConfigStore.imageObjects = snapshot.imageObjects;
      adminConfigStore.drawObjects = snapshot.drawObjects;
      adminConfigStore.floorImage = snapshot.floorImage;
      
      // 상태 강제 업데이트
      useAdminConfigStore.setState({
        textObjects: snapshot.textObjects,
        imageObjects: snapshot.imageObjects,
        drawObjects: snapshot.drawObjects,
        floorImage: snapshot.floorImage
      });
      
    } catch (error) {
      console.error('스냅샷 복원 실패:', error);
    }
  }, []);

  // 현재 상태를 스냅샷으로 저장
  const saveSnapshot = useCallback(() => {
    const snapshot = createSnapshot();
    pushSnapshot(snapshot);
  }, [createSnapshot, pushSnapshot]);

  // Undo 실행
  const executeUndo = useCallback(async () => {
    const snapshot = undo();
    if (snapshot) {
      await restoreSnapshot(snapshot);
    }
  }, [undo, restoreSnapshot]);

  // Redo 실행
  const executeRedo = useCallback(async () => {
    const snapshot = redo();
    if (snapshot) {
      await restoreSnapshot(snapshot);
    }
  }, [redo, restoreSnapshot]);

  // 초기 상태 설정
  const initializePresent = useCallback(() => {
    const snapshot = createSnapshot();
    setPresent(snapshot);
  }, [createSnapshot, setPresent]);

  return {
    saveSnapshot,
    executeUndo,
    executeRedo,
    canUndo: canUndo(),
    canRedo: canRedo(),
    initializePresent
  };
};