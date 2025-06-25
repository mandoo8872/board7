export interface BaseObject {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  locked: boolean;
  resizable: boolean;
  deletable: boolean;
  selected: boolean;
  updatedAt?: number;
  updatedBy?: string;
}

export interface TextObject extends BaseObject {
  type: 'text';
  text: string;
  fontSize: number;
  textAlign: 'left' | 'center' | 'right';
  textColor: string;
  textOpacity: number;
  backgroundColor: string;
  backgroundOpacity: number;
}

export interface CheckboxTextObject extends BaseObject {
  type: 'checkbox-text';
  text: string;
  checked: boolean;
  fontSize: number;
  textAlign: 'left' | 'center' | 'right';
  textColor: string;
  textOpacity: number;
  backgroundColor: string;
  backgroundOpacity: number;
}

export interface ImageObject extends BaseObject {
  type: 'image';
  src: string;
  maintainAspectRatio: boolean;
}

export interface BoxObject extends BaseObject {
  type: 'box';
  backgroundColor: string;
  backgroundOpacity: number;
}

export interface GridCellObject extends BaseObject {
  type: 'grid-cell';
  text: string;
  row: number;
  col: number;
  rowSpan?: number;
  colSpan?: number;
  fontSize: number;
  textAlign: 'left' | 'center' | 'right';
  textColor: string;
  textOpacity: number;
  backgroundColor: string;
  backgroundOpacity: number;
}

export type BoardObject = TextObject | CheckboxTextObject | ImageObject | BoxObject | GridCellObject;

export interface Stroke {
  id: string;
  points: { x: number; y: number }[];
  color: string;
  width: number;
  opacity: number;
}

// 기본 도구 타입
export type Tool = 'select' | 'text' | 'checkbox' | 'image' | 'pen' | 'eraser';

// 캔버스 관련 타입 정의
export interface CanvasProps {
  isViewPage: boolean;
}

// 스트로크 타입 정의
export interface Stroke {
  path: number[][];
  color: string;
  width: number;
}

// 셀 타입 정의
export interface Cell {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  text: string;
}

export interface CanvasSize {
  width: number;
  height: number;
}

// 텍스트/체크박스/사각형 객체 (Firebase textObjects 스키마)
export interface TextObject {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  hasCheckbox: boolean;
  checkboxChecked: boolean;
  checkboxCheckedColor?: string; // 체크된 상태 색상
  checkboxUncheckedColor?: string; // 체크 안된 상태 색상
  boxStyle: BoxStyle;
  fontSize: number;
  textStyle: TextStyle;
  permissions: ObjectPermissions;
  zIndex: number;
  locked: boolean;
  visible: boolean;
  opacity: number;
  isEditing: boolean;
  
  // LWW (Last Write Wins) 지원
  lastModified: number; // Unix timestamp
  modifiedBy?: string; // 사용자 식별자 (선택사항)
}

// 박스 스타일
export interface BoxStyle {
  backgroundColor: string;
  backgroundOpacity: number;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
}

// 텍스트 스타일
export interface TextStyle {
  color: string;
  fontFamily: string;
  bold: boolean;
  italic: boolean;
  horizontalAlign: 'left' | 'center' | 'right';
  verticalAlign: 'top' | 'middle' | 'bottom';
}

// 객체 권한
export interface ObjectPermissions {
  movable: boolean;
  deletable: boolean;
  resizable: boolean;
}

// IR 필기 stroke (Firebase drawObjects 스키마)
export interface DrawObject {
  id: string;
  points: number[]; // [x1, y1, x2, y2, ...]
  color: string;
  width: number;
  createdAt: string;
  
  // LWW (Last Write Wins) 지원
  lastModified: number; // Unix timestamp
  modifiedBy?: string; // 사용자 식별자 (선택사항)
}

// 바닥 이미지 (Firebase floorImage)
export interface FloorImage {
  path: string; // Base64 or Firebase Storage URL
}

// 설정값 (Firebase settings/{admin|view})
export interface Settings {
  admin: AdminSettings;
  view: ViewSettings;
}

export interface AdminSettings {
  autoToolSwitch: boolean;
  gridVisible: boolean;
  gridSize: number;
  defaultFontSize: number;
}

export interface ViewSettings {
  virtualKeyboardEnabled: boolean;
  touchMode: boolean;
}

// 캔버스 상태
export interface CanvasState {
  zoom: number;
  panX: number;
  panY: number;
  selectedObjectId: string | null;
  currentTool: Tool;
  isDrawing: boolean;
  currentStroke: number[];
}

// Zustand 스토어 타입들
export interface EditorStore {
  currentTool: Tool;
  zoom: number;
  selectedObjectId: string | null;
  setCurrentTool: (tool: Tool) => void;
  setZoom: (zoom: number) => void;
  setSelectedObjectId: (id: string | null) => void;
}

export interface CanvasStore {
  isDragging: boolean;
  viewCam: { x: number; y: number };
  snapEnabled: boolean;
  setIsDragging: (dragging: boolean) => void;
  setViewCam: (cam: { x: number; y: number }) => void;
  setSnapEnabled: (enabled: boolean) => void;
}

export interface DrawStore {
  strokes: number[][];
  currentStroke: number[];
  isDrawing: boolean;
  addPoint: (x: number, y: number) => void;
  startStroke: () => void;
  endStroke: () => void;
  clearStrokes: () => void;
}

export interface AdminConfigStore {
  textObjects: TextObject[];
  drawObjects: DrawObject[];
  floorImage: FloorImage | null;
  settings: Settings;
  isLoading: boolean;
  
  // Firebase 동기화
  initializeFirebaseListeners: () => void;
  
  // TextObject 관리
  addTextObject: (obj: Omit<TextObject, 'id'>) => Promise<void>;
  updateTextObject: (id: string, updates: Partial<TextObject>) => Promise<void>;
  deleteTextObject: (id: string) => Promise<void>;
  
  // DrawObject 관리 (ViewPage에서만 생성, 여기서는 동기화만)
  deleteDrawObject: (id: string) => Promise<void>;
  
  // FloorImage 관리
  setFloorImage: (image: FloorImage) => Promise<void>;
  
  // Settings 관리
  updateSettings: (section: 'admin' | 'view', updates: Partial<AdminSettings | ViewSettings>) => Promise<void>;
}

// 이미지 객체 (Firebase imageObjects 스키마)
export interface ImageObject {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  src: string; // Base64 또는 URL
  maintainAspectRatio: boolean;
  permissions: ObjectPermissions;
  zIndex: number;
  locked: boolean;
  visible: boolean;
  opacity: number;
  
  // LWW (Last Write Wins) 지원
  lastModified: number; // Unix timestamp
  modifiedBy?: string; // 사용자 식별자 (선택사항)
} 