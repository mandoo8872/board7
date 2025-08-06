import { create } from 'zustand';
import { Action } from '../types';

interface UndoRedoStore {
  undoStack: Action[];
  redoStack: Action[];
  maxSteps: number;
  
  // Action 기록
  recordAction: (action: Omit<Action, 'timestamp'>) => void;
  
  // Undo/Redo 실행
  undo: () => Action | null;
  redo: () => Action | null;
  
  // 스택 상태 확인
  canUndo: () => boolean;
  canRedo: () => boolean;
  
  // 스택 초기화
  clearStacks: () => void;
}

export const useUndoRedoStore = create<UndoRedoStore>((set, get) => ({
  undoStack: [],
  redoStack: [],
  maxSteps: 5,
  
  recordAction: (action) => {
    const { undoStack, maxSteps } = get();
    const newAction: Action = {
      ...action,
      timestamp: Date.now()
    };
    
    // undoStack에 추가하고 최대 단계 제한
    const newUndoStack = [...undoStack, newAction];
    if (newUndoStack.length > maxSteps) {
      newUndoStack.shift(); // 가장 오래된 Action 제거
    }
    
    set({
      undoStack: newUndoStack,
      redoStack: [] // 새로운 Action이 기록되면 redoStack 초기화
    });
  },
  
  undo: () => {
    const { undoStack, redoStack, maxSteps } = get();
    
    if (undoStack.length === 0) return null;
    
    const action = undoStack[undoStack.length - 1];
    const newUndoStack = undoStack.slice(0, -1);
    
    // redoStack에 추가하고 최대 단계 제한
    const newRedoStack = [...redoStack, action];
    if (newRedoStack.length > maxSteps) {
      newRedoStack.shift();
    }
    
    set({
      undoStack: newUndoStack,
      redoStack: newRedoStack
    });
    
    return action;
  },
  
  redo: () => {
    const { undoStack, redoStack, maxSteps } = get();
    
    if (redoStack.length === 0) return null;
    
    const action = redoStack[redoStack.length - 1];
    const newRedoStack = redoStack.slice(0, -1);
    
    // undoStack에 추가하고 최대 단계 제한
    const newUndoStack = [...undoStack, action];
    if (newUndoStack.length > maxSteps) {
      newUndoStack.shift();
    }
    
    set({
      undoStack: newUndoStack,
      redoStack: newRedoStack
    });
    
    return action;
  },
  
  canUndo: () => {
    return get().undoStack.length > 0;
  },
  
  canRedo: () => {
    return get().redoStack.length > 0;
  },
  
  clearStacks: () => {
    set({
      undoStack: [],
      redoStack: []
    });
  }
})); 