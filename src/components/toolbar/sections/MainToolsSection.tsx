import React from 'react';
import { Tool } from '../../../types';
import { DEFAULT_TOOLS } from '../utils/toolbarHelpers';
import { useUndoRedo } from '../../../hooks/useUndoRedo';
import { 
  ArrowCounterClockwise, 
  ArrowClockwise, 
  Lightning,
  HandPointing,
  TextAa,
  CheckSquare,
  ImageSquare,
  Pencil,
  Eraser
} from 'phosphor-react';

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
  const { executeUndo, executeRedo, canUndo, canRedo } = useUndoRedo();

  // Phosphor Duotone 아이콘 매핑
  const getToolIcon = (toolId: Tool) => {
    const iconProps = { size: 20, weight: "duotone" as const, color: "#302929" };
    
    switch (toolId) {
      case 'select':
        return <HandPointing {...iconProps} />;
      case 'text':
        return <TextAa {...iconProps} />;
      case 'checkbox':
        return <CheckSquare {...iconProps} />;
      case 'image':
        return <ImageSquare {...iconProps} />;
      case 'pen':
        return <Pencil {...iconProps} />;
      case 'eraser':
        return <Eraser {...iconProps} />;
      default:
        return <HandPointing {...iconProps} />;
    }
  };

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
        <Lightning size={20} weight="duotone" color="#302929" /> 메인 도구
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
            {getToolIcon(tool.id as Tool)}
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
                     <ArrowCounterClockwise size={16} weight="duotone" color="#302929" className="mr-1" />
                     되돌리기
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
                     <ArrowClockwise size={16} weight="duotone" color="#302929" className="mr-1" />
                     다시실행
                   </button>
        </div>
      </div>
    </div>
  );
};

export default MainToolsSection;