import { create } from 'zustand';
import { CanvasSnapshot, UndoRedoState } from '../types';

interface UndoRedoStore extends UndoRedoState {
  // 스냅샷 생성 및 저장
  pushSnapshot: (snapshot: CanvasSnapshot) => void;
  
  // Undo/Redo 실행
  undo: () => CanvasSnapshot | null;
  redo: () => CanvasSnapshot | null;
  
  // 현재 상태 설정
  setPresent: (snapshot: CanvasSnapshot) => void;
  
  // 상태 확인
  canUndo: () => boolean;
  canRedo: () => boolean;
  
  // 초기화
  clear: () => void;
}

export const useUndoRedoStore = create<UndoRedoStore>((set, get) => ({
  past: [],
  present: null,
  future: [],
  maxSteps: 5,
  
  pushSnapshot: (snapshot) => {
    const { past, present, maxSteps } = get();
    
    // 현재 상태가 있으면 past에 추가
    const newPast = present ? [...past, present] : past;
    
    // 최대 단계 제한
    if (newPast.length > maxSteps) {
      newPast.shift();
    }
    
    set({
      past: newPast,
      present: snapshot,
      future: [] // 새로운 스냅샷이 추가되면 future 초기화
    });
  },
  
  setPresent: (snapshot) => {
    set({ present: snapshot });
  },
  
  undo: () => {
    const { past, present, future, maxSteps } = get();
    
    if (past.length === 0) return null;
    
    const previous = past[past.length - 1];
    
    // 초기 상태로 돌아가는 것을 방지하는 안전장치
    const isInitialState = (snapshot: CanvasSnapshot) => {
      return snapshot.textObjects.length === 0 && 
             snapshot.imageObjects.length === 0 && 
             snapshot.drawObjects.length === 0 && 
             !snapshot.floorImage;
    };
    
    // 이전 상태가 초기 상태이고 현재 상태에 콘텐츠가 있다면 undo 방지
    if (isInitialState(previous) && present && !isInitialState(present)) {
      return null; // 조용히 무시
    }
    
    const newPast = past.slice(0, -1);
    
    // 현재 상태를 future에 추가
    const newFuture = present ? [present, ...future] : future;
    
    // 최대 단계 제한
    if (newFuture.length > maxSteps) {
      newFuture.pop();
    }
    
    set({
      past: newPast,
      present: previous,
      future: newFuture
    });
    
    return previous;
  },
  
  redo: () => {
    const { past, present, future, maxSteps } = get();
    
    if (future.length === 0) return null;
    
    const next = future[0];
    const newFuture = future.slice(1);
    
    // 현재 상태를 past에 추가
    const newPast = present ? [...past, present] : past;
    
    // 최대 단계 제한
    if (newPast.length > maxSteps) {
      newPast.shift();
    }
    
    set({
      past: newPast,
      present: next,
      future: newFuture
    });
    
    return next;
  },
  
  canUndo: () => {
    return get().past.length > 0;
  },
  
  canRedo: () => {
    return get().future.length > 0;
  },
  
  clear: () => {
    set({
      past: [],
      present: null,
      future: []
    });
  }
})); 