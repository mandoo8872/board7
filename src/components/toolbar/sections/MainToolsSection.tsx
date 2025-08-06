import React from 'react';
import { Tool } from '../../../types';
import { DEFAULT_TOOLS } from '../utils/toolbarHelpers';
import { useUndoRedoStore } from '../../../store/undoRedoStore';
import { useUndoRedoActions } from '../hooks/useUndoRedoActions';

interface MainToolsSectionProps {
  currentTool: Tool;
  onToolSelect: (tool: Tool) => void;
  onCreateText: () => void;
  onCreateCheckbox: () => void;
  onCreateImage: () => void;
}

const MainToolsSection: React.FC<MainToolsSectionProps> = ({
  currentTool,
  onToolSelect,
  onCreateText,
  onCreateCheckbox,
  onCreateImage
}) => {
  const { undoStack, redoStack } = useUndoRedoStore();
  const { executeUndo, executeRedo } = useUndoRedoActions();

  const canUndo = undoStack.length > 0;
  const canRedo = redoStack.length > 0;
  const handleToolClick = (toolId: string) => {
    switch (toolId) {
      case 'select':
        onToolSelect('select');
        break;
      case 'text':
        onCreateText();
        break;
      case 'checkbox':
        onCreateCheckbox();
        break;
      case 'image':
        onCreateImage();
        break;
      case 'pen':
      case 'eraser':
        onToolSelect(toolId as Tool);
        break;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
      <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
        <span>⚡</span> 메인 도구
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {DEFAULT_TOOLS.map(tool => (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all duration-200 border-2
              ${currentTool === tool.id 
                ? 'bg-blue-500 text-white border-blue-600 shadow-lg scale-105' 
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
          >
            <span className="text-2xl">{tool.icon}</span>
            <span className="text-xs font-medium">{tool.label}</span>
          </button>
        ))}
      </div>
      
      {/* Undo/Redo 버튼 */}
      <div className="mt-3 pt-3 border-t border-slate-200">
        <div className="flex gap-2">
          <button
            onClick={executeUndo}
            disabled={!canUndo}
            className={`
              flex-1 px-3 py-2 text-xs font-medium rounded-lg border transition-colors
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
            onClick={executeRedo}
            disabled={!canRedo}
            className={`
              flex-1 px-3 py-2 text-xs font-medium rounded-lg border transition-colors
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
      </div>
    </div>
  );
};

export default MainToolsSection;