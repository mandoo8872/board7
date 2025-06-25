import React from 'react';
import { useEditorStore, useAdminConfigStore } from '../../store';
import { Tool } from '../../types';

interface FloatingToolbarProps {
  currentTool?: Tool;
  onToolChange?: (tool: Tool) => void;
  onTTCreate?: () => void;
}

const FloatingToolbar: React.FC<FloatingToolbarProps> = () => {
  const { currentTool, setCurrentTool } = useEditorStore();
  const { addTextObject } = useAdminConfigStore();

  const handleToolChange = (tool: Tool) => {
    setCurrentTool(tool);
  };

  const handleTTCreate = async () => {
    // T/T (체크박스 + 텍스트) 객체 생성
    await addTextObject({
      x: 300,
      y: 300,
      width: 300,
      height: 100,
      text: '새 T/T 항목',
      hasCheckbox: true,
      checkboxChecked: false,
      boxStyle: {
        backgroundColor: '#f9f9f9',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 8,
      },
      fontSize: 18,
      zIndex: Date.now(),
      locked: false,
      visible: true,
      opacity: 1,
      isEditing: false,
    });
  };

  const getToolButtonClass = (tool: Tool) => {
    const baseClass = 'p-3 rounded-full transition-all duration-200 shadow-lg';
    const activeClass = 'bg-blue-500 text-white scale-110';
    const inactiveClass = 'bg-white text-gray-700 hover:bg-gray-100';

    return `${baseClass} ${currentTool === tool ? activeClass : inactiveClass}`;
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3">
      {/* 펜 도구 */}
      <button
        onClick={() => handleToolChange('pen')}
        className={getToolButtonClass('pen')}
        title="펜으로 그리기"
      >
        <span className="text-2xl">✏️</span>
      </button>
      
      {/* 지우개 도구 */}
      <button
        onClick={() => handleToolChange('eraser')}
        className={getToolButtonClass('eraser')}
        title="지우개"
      >
        <span className="text-2xl">🧽</span>
      </button>
      
      {/* T/T 생성 버튼 */}
      <button
        onClick={handleTTCreate}
        className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-200 shadow-lg hover:scale-105"
        title="T/T 항목 추가"
      >
        <span className="text-2xl">📝</span>
      </button>

      {/* 현재 도구 표시 */}
      <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs text-center">
        {currentTool === 'pen' && '펜'}
        {currentTool === 'eraser' && '지우개'}
        {currentTool === 'select' && '선택'}
      </div>
    </div>
  );
};

export default FloatingToolbar;
