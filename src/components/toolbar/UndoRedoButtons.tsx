import React from 'react';
import { useUndoRedoStore } from '../../store/undoRedoStore';
import { useUndoRedoActions } from './hooks/useUndoRedoActions';

const UndoRedoButtons: React.FC = () => {
  const { undoStack, redoStack } = useUndoRedoStore();
  const { executeUndo, executeRedo } = useUndoRedoActions();

  const canUndo = undoStack.length > 0;
  const canRedo = redoStack.length > 0;

  const handleUndo = async () => {
    await executeUndo();
  };

  const handleRedo = async () => {
    await executeRedo();
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={handleUndo}
        disabled={!canUndo}
        className={`
          px-3 py-2 text-xs font-medium rounded-lg border transition-colors
          ${canUndo 
            ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700' 
            : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
          }
        `}
        title="되돌리기 (Ctrl+Z)"
      >
        ↶ 되돌리기
      </button>
      
      <button
        onClick={handleRedo}
        disabled={!canRedo}
        className={`
          px-3 py-2 text-xs font-medium rounded-lg border transition-colors
          ${canRedo 
            ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700' 
            : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
          }
        `}
        title="다시 실행 (Ctrl+Y)"
      >
        ↷ 다시실행
      </button>
    </div>
  );
};

export default UndoRedoButtons; 