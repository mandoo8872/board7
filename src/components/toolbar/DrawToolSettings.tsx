import React from 'react';
import { useDrawStore } from '../../store/drawStore';
import { useEditorStore } from '../../store/editorStore';

const DrawToolSettings: React.FC = () => {
  const { currentTool } = useEditorStore();
  const { 
    penColor, 
    penWidth, 
    defaultColors,
    setPenColor, 
    setPenWidth
  } = useDrawStore();

  // 필기나 지우개 도구가 선택되지 않으면 렌더링하지 않음
  if (currentTool !== 'pen' && currentTool !== 'eraser') {
    return null;
  }

  const widthOptions = [2, 4, 6, 8, 12];

  return (
    <div 
      className="absolute left-4 top-20 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50"
      style={{ minWidth: '280px' }}
    >
      <div className="space-y-4">
        {/* 도구 타이틀 */}
        <div className="text-sm font-medium text-gray-700">
          {currentTool === 'pen' ? '필기 설정' : '지우개 설정'}
        </div>

        {/* 필기 도구일 때만 색상 선택 */}
        {currentTool === 'pen' && (
          <div>
            <div className="text-xs text-gray-600 mb-2">색상</div>
            <div className="grid grid-cols-5 gap-1">
              {defaultColors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded border-2 ${
                    penColor === color 
                      ? 'border-blue-500 border-4' 
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setPenColor(color)}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* 필기 도구일 때만 굵기 선택 */}
        {currentTool === 'pen' && (
          <div>
            <div className="text-xs text-gray-600 mb-2">굵기</div>
            <div className="flex gap-2">
              {widthOptions.map((width) => (
                <button
                  key={width}
                  className={`px-3 py-2 rounded text-xs ${
                    penWidth === width
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setPenWidth(width)}
                >
                  {width}px
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawToolSettings; 