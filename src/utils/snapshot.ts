import { CanvasSnapshot } from '../types';
import { useAdminConfigStore } from '../store/adminConfigStore';
import { useEditorStore } from '../store/editorStore';
import { useCellSelectionStore } from '../store/cellSelectionStore';
import { useUndoRedoStore } from '../store/undoRedoStore';
import { flags } from '../flags';

export const createCurrentSnapshot = (): CanvasSnapshot => {
  const { textObjects, imageObjects, floorImage } = useAdminConfigStore.getState();
  const selectedObjectId = useEditorStore.getState().selectedObjectId ?? null;
  const selectedCellIds = useCellSelectionStore.getState().getSelectedCells();

  return {
    textObjects: JSON.parse(JSON.stringify(textObjects)),
    imageObjects: JSON.parse(JSON.stringify(imageObjects)),
    floorImage: floorImage ? JSON.parse(JSON.stringify(floorImage)) : null,
    selectedObjectId,
    selectedCellIds,
    timestamp: Date.now()
  };
};

let snapshotDebounceTimer: ReturnType<typeof setTimeout> | null = null;
let snapshotLastFlush = 0;

export const queueSnapshotPush = (delayMs?: number): void => {
  const debounceMs = flags.lowLatencyMode ? flags.saveDebounceMs : (delayMs ?? 150);
  const maxWaitMs = 2000;
  if (snapshotDebounceTimer) clearTimeout(snapshotDebounceTimer);
  const now = Date.now();
  if (now - snapshotLastFlush >= maxWaitMs) {
    snapshotLastFlush = now;
    const { pushSnapshot, isRestoring } = useUndoRedoStore.getState();
    if (!isRestoring) pushSnapshot(createCurrentSnapshot());
    return;
  }
  snapshotDebounceTimer = setTimeout(() => {
    snapshotLastFlush = Date.now();
    const { pushSnapshot, isRestoring } = useUndoRedoStore.getState();
    if (!isRestoring) pushSnapshot(createCurrentSnapshot());
  }, debounceMs);
};

export const pushSnapshotImmediate = (): void => {
  const { pushSnapshot, isRestoring } = useUndoRedoStore.getState();
  if (isRestoring) return;
  pushSnapshot(createCurrentSnapshot());
};

// flush on unload
if (typeof window !== 'undefined') {
  const flush = () => {
    if (snapshotDebounceTimer) {
      clearTimeout(snapshotDebounceTimer);
      snapshotDebounceTimer = null;
    }
    try { pushSnapshotImmediate(); } catch {}
  };
  window.addEventListener('beforeunload', flush);
}


