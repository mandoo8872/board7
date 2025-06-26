import { create } from 'zustand';

export interface DrawStore {
  currentStroke: number[];
  isDrawing: boolean;
  
  // 필기 설정
  penColor: string;
  penWidth: number;
  
  // 액션 추적
  lastActionTime: number;
  
  // 기본 색상 팔레트
  defaultColors: string[];
  
  // 액션들
  addPoint: (x: number, y: number) => void;
  startStroke: () => void;
  endStroke: () => void;
  clearCurrentStroke: () => void;
  
  // 설정 관련
  setPenColor: (color: string) => void;
  setPenWidth: (width: number) => void;
  updateLastActionTime: () => void;
}

export const useDrawStore = create<DrawStore>((set) => ({
  currentStroke: [],
  isDrawing: false,
  
  // 필기 설정
  penColor: '#000000', // 기본 검은색
  penWidth: 4,
  
  // 액션 추적
  lastActionTime: 0,
  
  // 기본 색상 팔레트 (2x5)
  defaultColors: [
    '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
    '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#A52A2A'
  ],
  
  addPoint: (x, y) => set((state) => ({
    currentStroke: [...state.currentStroke, x, y]
  })),
  
  startStroke: () => set({ 
    isDrawing: true, 
    currentStroke: [] 
  }),
  
  endStroke: () => set({ 
    isDrawing: false 
  }),
  
  clearCurrentStroke: () => set({ 
    currentStroke: [] 
  }),
  
  setPenColor: (color) => set({ penColor: color }),
  setPenWidth: (width) => set({ penWidth: width }),
  updateLastActionTime: () => set({ lastActionTime: Date.now() }),
})); 