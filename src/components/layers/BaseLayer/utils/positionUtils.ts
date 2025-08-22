import { isValidPosition, isValidSize } from '../../../../utils/validation';
import { snapPositionToGrid, snapSizeToGrid } from '../../../../utils/gridUtils';
import { getDBSnapPosition } from './snapV2';
import { flags } from '../../../../flags';
import { Position, Size } from '../types';

// 캔버스 스케일 계산
export const getCanvasScale = (canvasContainer: HTMLElement): number => {
  const transform = window.getComputedStyle(canvasContainer).transform;
  
  let scale = 1;
  if (transform && transform !== 'none') {
    const matrix = transform.match(/matrix\(([^)]+)\)/);
    if (matrix) {
      const values = matrix[1].split(',').map(v => parseFloat(v.trim()));
      scale = values[0];
    }
  }
  
  return scale;
};

// 마우스 위치를 캔버스 좌표로 변환
export const getCanvasCoordinates = (
  clientX: number,
  clientY: number,
  canvasContainer: HTMLElement
): Position => {
  const rect = canvasContainer.getBoundingClientRect();
  const scale = getCanvasScale(canvasContainer);

  return {
    x: (clientX - rect.left) / scale,
    y: (clientY - rect.top) / scale
  };
};

// 그리드 스냅 적용
export const applyGridSnap = (
  position: Position,
  size: Size | undefined,
  gridSnapEnabled: boolean,
  gridSize: number
): { position: Position; size?: Size } => {
  if (!gridSnapEnabled) {
    return { position, size };
  }

  // v2: DB 그리드 기반 셀 중심 스냅이 활성화된 경우 위치만 v2로 처리
  if (flags.useCellCenterSnapV2) {
    // 객체 크기가 있으면 객체 중심을 기준으로 스냅 후 좌상단을 보정
    const anchor = size ? { x: position.x + size.width / 2, y: position.y + size.height / 2 } : position;
    const v2 = getDBSnapPosition(anchor);
    if (v2) {
      const newPos = size ? { x: v2.x - size.width / 2, y: v2.y - size.height / 2 } : v2;
      return { position: newPos, size };
    }
    // 실패 안전: v2 후보가 없으면 원본 좌표 유지 (디자인 그리드에는 스냅하지 않음)
    return { position, size };
  }

  // v1: 기존 디자인 그리드 스냅 (fallback)
  const snappedPosition = snapPositionToGrid(position.x, position.y, gridSize);
  const snappedSize = size ? snapSizeToGrid(size.width, size.height, gridSize) : undefined;

  return {
    position: snappedPosition,
    size: snappedSize
  };
};

// 드래그 위치 계산
export const calculateDragPosition = (
  mousePosition: Position,
  dragOffset: Position,
  scale: number
): Position => {
  return {
    x: mousePosition.x - dragOffset.x / scale,
    y: mousePosition.y - dragOffset.y / scale
  };
};

// 리사이즈 계산
export const calculateResizeDeltas = (
  currentMouse: Position,
  startMouse: Position
): Position => {
  return {
    x: currentMouse.x - startMouse.x,
    y: currentMouse.y - startMouse.y
  };
};

// 안전한 위치와 크기 검증
export const validatePositionAndSize = (
  position: Position,
  size?: Size,
  fallbackPosition?: Position,
  fallbackSize?: Size
): { position: Position; size?: Size } => {
  const safePosition = isValidPosition(position) ? position : (fallbackPosition || { x: 0, y: 0 });
  const safeSize = size && isValidSize(size) ? size : fallbackSize;

  return { position: safePosition, size: safeSize };
};