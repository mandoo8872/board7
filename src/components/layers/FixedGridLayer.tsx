import React, { useState, useCallback } from 'react';

interface FixedGridLayerProps {
  isViewPage?: boolean;
}

interface GridCell {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  value: string;
  selected: boolean;
}

const FixedGridLayer: React.FC<FixedGridLayerProps> = ({ isViewPage = false }) => {
  const [cells, setCells] = useState<GridCell[]>([]);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());
  const [isDragging, setIsDragging] = useState(false);

  // 엑셀 데이터 붙여넣기 핸들러
  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    if (!isViewPage) { // Admin에서만 가능
      e.preventDefault();
      const pasteData = e.clipboardData.getData('text');
      
      if (pasteData) {
        // 탭과 줄바꿈으로 분리하여 2D 배열로 변환
        const rows = pasteData.split('\n').map(row => row.split('\t'));
        
        // 현재 선택된 셀의 위치를 기준으로 새 셀들 생성
        const startX = 50; // 기본 시작 위치
        const startY = 50;
        const cellWidth = 120;
        const cellHeight = 40;
        
        const newCells: GridCell[] = [];
        
        rows.forEach((row, rowIndex) => {
          row.forEach((cellValue, colIndex) => {
            if (cellValue.trim()) { // 빈 셀은 제외
              const newCell: GridCell = {
                id: `cell-${Date.now()}-${rowIndex}-${colIndex}`,
                x: startX + (colIndex * cellWidth),
                y: startY + (rowIndex * cellHeight),
                width: cellWidth,
                height: cellHeight,
                value: cellValue.trim(),
                selected: false,
              };
              newCells.push(newCell);
            }
          });
        });
        
        setCells(prev => [...prev, ...newCells]);
      }
    }
  }, [isViewPage]);

  // 셀 선택 핸들러
  const handleCellClick = useCallback((cellId: string, e: React.MouseEvent) => {
    if (e.ctrlKey || e.metaKey) {
      // Ctrl/Cmd + 클릭: 다중 선택
      setSelectedCells(prev => {
        const newSet = new Set(prev);
        if (newSet.has(cellId)) {
          newSet.delete(cellId);
        } else {
          newSet.add(cellId);
        }
        return newSet;
      });
    } else {
      // 단일 선택
      setSelectedCells(new Set([cellId]));
    }
  }, []);

  // 셀 값 편집 핸들러
  const handleCellEdit = useCallback((cellId: string, newValue: string) => {
    setCells(prev => prev.map(cell => 
      cell.id === cellId ? { ...cell, value: newValue } : cell
    ));
  }, []);

  // 셀 삭제 핸들러
  const handleDeleteSelectedCells = useCallback(() => {
    setCells(prev => prev.filter(cell => !selectedCells.has(cell.id)));
    setSelectedCells(new Set());
  }, [selectedCells]);

  // 키보드 이벤트 핸들러
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Delete' && selectedCells.size > 0) {
      handleDeleteSelectedCells();
    }
  }, [selectedCells, handleDeleteSelectedCells]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      onPaste={handlePaste}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* 엑셀 붙여넣기 안내 (Admin에서만) */}
      {!isViewPage && cells.length === 0 && (
        <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg pointer-events-auto">
          <p className="text-sm">Ctrl+V로 엑셀 데이터를 붙여넣으세요</p>
        </div>
      )}

      {/* 그리드 셀들 렌더링 */}
      {cells.map(cell => (
        <div
          key={cell.id}
          className={`absolute border-2 bg-white pointer-events-auto cursor-pointer transition-all
            ${selectedCells.has(cell.id) 
              ? 'border-blue-500 bg-blue-50 shadow-md' 
              : 'border-gray-300 hover:border-gray-400'
            }`}
          style={{
            left: cell.x,
            top: cell.y,
            width: cell.width,
            height: cell.height,
          }}
          onClick={(e) => handleCellClick(cell.id, e)}
        >
          {/* 셀 값 표시/편집 */}
          <div className="w-full h-full p-1 flex items-center">
            <input
              type="text"
              value={cell.value}
              onChange={(e) => handleCellEdit(cell.id, e.target.value)}
              className="w-full h-full bg-transparent border-none outline-none text-sm"
              readOnly={isViewPage}
              style={{
                cursor: isViewPage ? 'default' : 'text'
              }}
            />
          </div>

          {/* 리사이즈 핸들 (Admin에서만, 선택된 셀에만) */}
          {!isViewPage && selectedCells.has(cell.id) && (
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full cursor-se-resize" />
          )}
        </div>
      ))}

      {/* 선택된 셀 개수 표시 */}
      {selectedCells.size > 0 && (
        <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded text-sm pointer-events-auto">
          {selectedCells.size}개 셀 선택됨
          {!isViewPage && (
            <button
              onClick={handleDeleteSelectedCells}
              className="ml-2 text-red-300 hover:text-red-100"
            >
              삭제
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FixedGridLayer; 