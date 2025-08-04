import React from 'react';
import { Tool } from '../../../types';
import { DEFAULT_TOOLS } from '../utils/toolbarHelpers';

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
    </div>
  );
};

export default MainToolsSection;