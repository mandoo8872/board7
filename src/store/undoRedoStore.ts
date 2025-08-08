import { create } from 'zustand';
import { CanvasSnapshot, UndoRedoState } from '../types';

interface UndoRedoStore extends UndoRedoState {
  // 스냅샷 추가 (미래 히스토리 절단, 중복 방지)
  pushSnapshot: (snapshot: CanvasSnapshot) => void;
  // 이동
  undo: () => CanvasSnapshot | null;
  redo: () => CanvasSnapshot | null;
  // 현재 스냅샷 바로 설정(초기화 등)
  setInitialSnapshot: (snapshot: CanvasSnapshot) => void;
  // 상태 확인
  canUndo: () => boolean;
  canRedo: () => boolean;
  // 전체 초기화
  clear: () => void;
}

const deepEqual = (a: any, b: any) => {
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return false;
  }
};

export const useUndoRedoStore = create<UndoRedoStore>((set, get) => ({
  history: [],
  cursor: -1,

  setInitialSnapshot: (snapshot) => {
    set({ history: [snapshot], cursor: 0 });
  },

  pushSnapshot: (snapshot) => {
    const { history, cursor } = get();

    // 중복 방지: 현재 스냅샷과 동일하면 무시
    if (cursor >= 0 && cursor < history.length) {
      const current = history[cursor];
      if (deepEqual(current, snapshot)) return;
    }

    // 미래 히스토리 절단 후 추가
    const trimmed = history.slice(0, cursor + 1);
    const newHistory = [...trimmed, snapshot];
    const newCursor = newHistory.length - 1;

    set({ history: newHistory, cursor: newCursor });
  },

  undo: () => {
    const { history, cursor } = get();
    if (cursor <= 0) return null; // 경계 보호
    const newCursor = cursor - 1;
    set({ cursor: newCursor });
    return history[newCursor] || null;
  },

  redo: () => {
    const { history, cursor } = get();
    if (cursor < 0 || cursor >= history.length - 1) return null; // 경계 보호
    const newCursor = cursor + 1;
    set({ cursor: newCursor });
    return history[newCursor] || null;
  },

  canUndo: () => {
    const { cursor } = get();
    return cursor > 0;
  },

  canRedo: () => {
    const { history, cursor } = get();
    return cursor >= 0 && cursor < history.length - 1;
  },

  clear: () => {
    set({ history: [], cursor: -1 });
  }
}));