import React from 'react';

interface KeyboardHeaderProps {
  onPointerDown: (e: React.PointerEvent) => void;
  selectedColor: 'black' | 'red' | 'blue';
  onColorSelect: (color: 'black' | 'red' | 'blue') => void;
}

const KeyboardHeader: React.FC<KeyboardHeaderProps> = ({ onPointerDown, selectedColor, onColorSelect }) => {
  // 색상 팔레트 정의 (더 진한 색상)
  const colorPalette = [
    { id: 'black' as const, color: '#000000' },
    { id: 'red' as const, color: '#D32F2F' },
    { id: 'blue' as const, color: '#1976D2' }
  ];

  return (
    <div 
      className="bg-gray-700 px-3 py-2 rounded-t-lg border-b border-gray-600 cursor-move select-none flex items-center justify-between"
      onPointerDown={onPointerDown}
    >
      <div className="text-gray-300 font-medium text-sm">가상 키보드</div>
      
      {/* 색상 팔레트 - 우측에 배치 */}
      <div className="flex gap-1">
        {colorPalette.map(({ id, color }) => (
          <button
            key={id}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onColorSelect(id);
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
            className={`rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-50 ${
              selectedColor === id 
                ? 'ring-2 ring-white ring-offset-1 ring-offset-gray-700' 
                : 'hover:scale-110'
            }`}
            style={{
              backgroundColor: color,
              width: '16px',
              height: '16px',
              minWidth: '16px',
              minHeight: '16px',
              cursor: 'pointer',
            }}
            title={id}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyboardHeader;