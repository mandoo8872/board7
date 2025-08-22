import { useAdminConfigStore } from '../../../../store/adminConfigStore';
import { Position } from '../types';
import { flags } from '../../../../flags';

// Simple module-level cache for DB grid centers in world coords
let centersWorldCache: Position[] | null = null;
let cacheReady = false;

// TODO: Replace with real DB grid config when available.
// Here we probe settings for presence; if absent, v2 will be a no-op.
function ensureCacheReady() {
  if (cacheReady) return;
  // In this codebase we don't yet have explicit DB grid config types.
  // We treat absence as no-op by leaving centersWorldCache null.
  centersWorldCache = null;
  cacheReady = true;
}

// Public API: returns snapped position if v2 DB grid can supply a target, otherwise null.
export function getDBSnapPosition(anchorWorld: Position): Position | null {
  if (!flags.useCellCenterSnapV2) return null;
  const { settings } = useAdminConfigStore.getState();
  const snapOn = settings?.admin?.gridSnapEnabled ?? false;
  if (!snapOn) return null;
  ensureCacheReady();
  if (!centersWorldCache || centersWorldCache.length === 0) return null;
  // 화면에서 멀리 있는 객체가 강제로 들어가는 문제 방지: 화면 거리 임계값(px) 적용
  // 여기서는 간단히 월드 거리 기준으로 필터(스케일 1 기준 64px). UI에서 개선 가능.
  const MAX_WORLD_DIST = 64; // 객체 기준 근접 센터만 스냅 허용
  // Find nearest center in O(n); callers are throttled, and array sizes are moderate.
  // If performance needed, replace with spatial index.
  let best: Position | null = null;
  let bestDist2 = Number.POSITIVE_INFINITY;
  for (const c of centersWorldCache) {
    const dx = c.x - anchorWorld.x;
    const dy = c.y - anchorWorld.y;
    const d2 = dx * dx + dy * dy;
    if (d2 > MAX_WORLD_DIST * MAX_WORLD_DIST) continue;
    if (d2 < bestDist2) {
      best = c;
      bestDist2 = d2;
    }
  }
  // Screen-radius threshold is delegated to caller's UX; here we just return nearest.
  return best;
}

// UX helper: find nearest within screen radius with hysteresis; return null if no candidate
export function findSnapCandidate(
  anchorWorld: Position,
  worldToScreen: (p: Position) => Position,
  zoom: number,
  prevCandidate: Position | null,
  radiusPxBase = 16,
  hysteresisFactor = 1.5,
): Position | null {
  if (!flags.useCellCenterSnapV2) return null;
  const { settings } = useAdminConfigStore.getState();
  const snapOn = settings?.admin?.gridSnapEnabled ?? false;
  if (!snapOn) return null;
  ensureCacheReady();
  if (!centersWorldCache || centersWorldCache.length === 0) return null;

  const radiusPx = radiusPxBase / Math.max(zoom, 0.01);
  const keepPx = radiusPx * hysteresisFactor;

  let best: Position | null = null;
  let bestDistPx2 = Number.POSITIVE_INFINITY;
  const anchorScreen = worldToScreen(anchorWorld);
  for (const c of centersWorldCache) {
    const cs = worldToScreen(c);
    const dx = cs.x - anchorScreen.x;
    const dy = cs.y - anchorScreen.y;
    const d2 = dx * dx + dy * dy;
    if (d2 < bestDistPx2) {
      best = c;
      bestDistPx2 = d2;
    }
  }
  if (!best) return null;
  const bestScreen = worldToScreen(best);
  const distPx = Math.hypot(bestScreen.x - anchorScreen.x, bestScreen.y - anchorScreen.y);
  if (prevCandidate) {
    const prevScreen = worldToScreen(prevCandidate);
    const prevDistPx = Math.hypot(prevScreen.x - anchorScreen.x, prevScreen.y - anchorScreen.y);
    if (prevDistPx <= keepPx) return prevCandidate;
  }
  return distPx <= radiusPx ? best : null;
}

// Placeholder API to be called when DB grid config is loaded/changed in future.
export function setDBGridCentersWorld(centers: Position[] | null) {
  centersWorldCache = centers;
  cacheReady = true;
}


