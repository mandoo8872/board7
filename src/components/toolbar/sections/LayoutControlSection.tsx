import React from 'react';

interface LayoutControlSectionProps {
  onDuplicate: () => void;
  onDelete: () => void;
  onBringToFront: () => void;
  onBringForward: () => void;
  onSendBackward: () => void;
  onSendToBack: () => void;
}

const LayoutControlSection: React.FC<LayoutControlSectionProps> = ({
  onDuplicate,
  onDelete,
  onBringToFront,
  onBringForward,
  onSendBackward,
  onSendToBack
}) => {
  return (
    <div className="space-y-4">
      {/* 객체 제어 버튼 */}
      <div className="flex gap-2">
        <button
          onClick={onDuplicate}
          className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors"
        >
          📋 복사
        </button>
        <button
          onClick={onDelete}
          className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-medium transition-colors"
        >
          🗑️ 삭제
        </button>
      </div>
      
      {/* 레이어 제어 */}
      <div>
        <label className="text-xs font-medium text-slate-600 mb-2 block">레이어 순서</label>
        <div className="grid grid-cols-4 gap-1">
          <button
            onClick={onBringToFront}
            className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs font-medium transition-colors"
            title="맨 위로"
          >
            ⬆⬆
          </button>
          <button
            onClick={onBringForward}
            className="px-2 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded text-xs font-medium transition-colors"
            title="위로"
          >
            ⬆
          </button>
          <button
            onClick={onSendBackward}
            className="px-2 py-1 bg-purple-400 hover:bg-purple-500 text-white rounded text-xs font-medium transition-colors"
            title="아래로"
          >
            ⬇
          </button>
          <button
            onClick={onSendToBack}
            className="px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded text-xs font-medium transition-colors"
            title="맨 아래로"
          >
            ⬇⬇
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutControlSection;