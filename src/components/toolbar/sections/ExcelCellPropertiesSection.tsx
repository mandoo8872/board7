import React from 'react';
import { useCellSelectionStore } from '../../../store/cellSelectionStore';
import { TextObject } from '../../../types';

interface ExcelCellPropertiesSectionProps {
  textObjects: TextObject[];
  colorMode: 'text' | 'background' | 'border';
  onColorModeChange: (mode: 'text' | 'background' | 'border') => void;
  onUpdateTextObject: (id: string, updates: Partial<TextObject>) => void;
  clearCellSelection: () => void;
}

const ExcelCellPropertiesSection: React.FC<ExcelCellPropertiesSectionProps> = ({
  textObjects,
  colorMode,
  onColorModeChange,
  onUpdateTextObject,
  clearCellSelection
}) => {
  const { getSelectedCells, getSelectedCount } = useCellSelectionStore.getState();
  const selectedCells = getSelectedCells();
  const selectedCount = getSelectedCount();

  if (selectedCount === 0) return null;

  // 선택된 셀들의 최소 폰트 크기 계산
  const getMinFontSize = () => {
    let minFontSize = 72;
    for (const cellId of selectedCells) {
      const cellObj = textObjects.find(obj => obj.id === cellId);
      if (cellObj && cellObj.cellType === 'cell') {
        minFontSize = Math.min(minFontSize, cellObj.fontSize || 16);
      }
    }
    return minFontSize === 72 ? 16 : minFontSize; // 기본값 처리
  };

  // 색상 팔레트
  const colorPalette = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#FFC0CB', '#A52A2A', '#808080', '#008000', '#000080',
    '#800000', '#008080', '#C0C0C0', '#FFFFE0', '#F0F8FF'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2">
          <span>📊</span> 선택된 엑셀 셀 ({selectedCount}개)
        </h3>
        <button
          onClick={clearCellSelection}
          className="text-xs text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded transition-colors"
        >
          선택 해제
        </button>
      </div>
      
      <div className="space-y-4">
        {/* 폰트 크기 일괄 변경 */}
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">
            폰트 크기 (가장 작은 크기: {getMinFontSize()}px 기준)
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={async () => {
                const currentMinSize = getMinFontSize();
                const newFontSize = Math.max(8, currentMinSize - 2);
                
                // 병렬 처리로 모든 선택된 셀에 동일한 폰트 크기 적용
                const updatePromises = selectedCells.map(async (cellId) => {
                  const cellObj = textObjects.find(obj => obj.id === cellId);
                  if (cellObj && cellObj.cellType === 'cell') {
                    return onUpdateTextObject(cellId, { 
                      fontSize: newFontSize
                    });
                  }
                });
                
                try {
                  await Promise.all(updatePromises);
                  console.log(`✅ ${selectedCount}개 셀의 폰트 크기를 ${newFontSize}px로 일괄 변경 완료`);
                } catch (error) {
                  console.error('❌ 폰트 크기 감소 일괄 변경 실패:', error);
                }
              }}
              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors"
              title={`폰트 크기 감소 (${selectedCount}개 셀 일괄 변경)`}
            >
              ▼
            </button>
            <span className="flex-1 text-center text-sm font-mono bg-slate-50 py-1 rounded border">
              {getMinFontSize()}px → 일괄변경
            </span>
            <button
              onClick={async () => {
                const currentMinSize = getMinFontSize();
                const newFontSize = Math.min(72, currentMinSize + 2);
                
                // 병렬 처리로 모든 선택된 셀에 동일한 폰트 크기 적용
                const updatePromises = selectedCells.map(async (cellId) => {
                  const cellObj = textObjects.find(obj => obj.id === cellId);
                  if (cellObj && cellObj.cellType === 'cell') {
                    return onUpdateTextObject(cellId, { 
                      fontSize: newFontSize
                    });
                  }
                });
                
                try {
                  await Promise.all(updatePromises);
                  console.log(`✅ ${selectedCount}개 셀의 폰트 크기를 ${newFontSize}px로 일괄 변경 완료`);
                } catch (error) {
                  console.error('❌ 폰트 크기 증가 일괄 변경 실패:', error);
                }
              }}
              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors"
              title={`폰트 크기 증가 (${selectedCount}개 셀 일괄 변경)`}
            >
              ▲
            </button>
          </div>
        </div>
        
        {/* 색상 일괄 변경 */}
        <div>
          <label className="text-xs font-medium text-slate-600 mb-2 block">색상</label>
          
          {/* 색상 모드 선택 버튼 */}
          <div className="grid grid-cols-3 gap-1 mb-3">
            <button
              onClick={() => onColorModeChange('text')}
              className={`px-2 py-2 rounded text-xs transition-colors ${
                colorMode === 'text'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              텍스트
            </button>
            <button
              onClick={() => onColorModeChange('background')}
              className={`px-2 py-2 rounded text-xs transition-colors ${
                colorMode === 'background'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              배경
            </button>
            <button
              onClick={() => onColorModeChange('border')}
              className={`px-2 py-2 rounded text-xs transition-colors ${
                colorMode === 'border'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              테두리
            </button>
          </div>

          {/* 색상 팔레트 */}
          <div className="grid grid-cols-5 gap-2">
            {/* 배경 모드일 때만 투명 옵션 표시 */}
            {colorMode === 'background' && (
              <button
                onClick={async () => {
                  const updatePromises = selectedCells.map(async (cellId) => {
                    const cellObj = textObjects.find(obj => obj.id === cellId);
                    if (cellObj && cellObj.cellType === 'cell') {
                      const currentBoxStyle = cellObj.boxStyle || {
                        backgroundColor: 'transparent',
                        backgroundOpacity: 1,
                        borderColor: '#000000',
                        borderWidth: 0,
                        borderRadius: 0
                      };
                      return onUpdateTextObject(cellId, {
                        boxStyle: { ...currentBoxStyle, backgroundColor: 'transparent' }
                      });
                    }
                  });
                  
                  try {
                    await Promise.all(updatePromises);
                    console.log(`✅ ${selectedCount}개 셀의 배경을 투명으로 일괄 변경 완료`);
                  } catch (error) {
                    console.error('❌ 투명 배경 일괄 변경 실패:', error);
                  }
                }}
                className="w-8 h-8 rounded border-2 border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                title={`투명 (${selectedCount}개 셀 일괄 변경)`}
              >
                <span className="text-red-500 text-xs">∅</span>
              </button>
            )}
            
            {colorPalette.map((color) => (
              <button
                key={color}
                onClick={async () => {
                  // 병렬 처리로 성능 향상
                  const updatePromises = selectedCells.map(async (cellId) => {
                    const cellObj = textObjects.find(obj => obj.id === cellId);
                    if (cellObj && cellObj.cellType === 'cell') {
                      if (colorMode === 'text') {
                        const currentTextStyle = cellObj.textStyle || {
                          color: '#000000',
                          bold: false,
                          italic: false,
                          horizontalAlign: 'left',
                          verticalAlign: 'middle',
                          fontFamily: 'Arial'
                        };
                        return onUpdateTextObject(cellId, {
                          textStyle: { ...currentTextStyle, color }
                        });
                      } else if (colorMode === 'background') {
                        const currentBoxStyle = cellObj.boxStyle || {
                          backgroundColor: 'transparent',
                          backgroundOpacity: 1,
                          borderColor: '#000000',
                          borderWidth: 0,
                          borderRadius: 0
                        };
                        return onUpdateTextObject(cellId, {
                          boxStyle: { ...currentBoxStyle, backgroundColor: color }
                        });
                      } else if (colorMode === 'border') {
                        const currentBoxStyle = cellObj.boxStyle || {
                          backgroundColor: 'transparent',
                          backgroundOpacity: 1,
                          borderColor: '#000000',
                          borderWidth: 0,
                          borderRadius: 0
                        };
                        return onUpdateTextObject(cellId, {
                          boxStyle: { ...currentBoxStyle, borderColor: color, borderWidth: 1 }
                        });
                      }
                    }
                  });
                  
                  try {
                    await Promise.all(updatePromises);
                    console.log(`✅ ${selectedCount}개 셀의 ${colorMode === 'text' ? '텍스트' : colorMode === 'background' ? '배경' : '테두리'} 색상을 ${color}로 일괄 변경 완료`);
                  } catch (error) {
                    console.error('❌ 색상 일괄 변경 실패:', error);
                  }
                }}
                className="w-8 h-8 rounded border border-gray-300 hover:scale-110 transition-transform cursor-pointer"
                style={{ backgroundColor: color }}
                title={`${color} (${selectedCount}개 셀 일괄 변경)`}
              />
            ))}
          </div>
        </div>

        {/* 텍스트 스타일 일괄 변경 */}
        <div>
          <label className="text-xs font-medium text-slate-600 mb-2 block">텍스트 스타일</label>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const updatePromises = selectedCells.map(async (cellId) => {
                  const cellObj = textObjects.find(obj => obj.id === cellId);
                  if (cellObj && cellObj.cellType === 'cell') {
                    const currentTextStyle = cellObj.textStyle || {
                      color: '#000000',
                      bold: false,
                      italic: false,
                      horizontalAlign: 'left',
                      verticalAlign: 'middle',
                      fontFamily: 'Arial'
                    };
                    return onUpdateTextObject(cellId, {
                      textStyle: { ...currentTextStyle, bold: !currentTextStyle.bold }
                    });
                  }
                });
                
                try {
                  await Promise.all(updatePromises);
                  console.log(`✅ ${selectedCount}개 셀의 굵게 스타일 일괄 변경 완료`);
                } catch (error) {
                  console.error('❌ 굵게 스타일 일괄 변경 실패:', error);
                }
              }}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded text-xs font-bold transition-colors"
              title={`굵게 (${selectedCount}개 셀 일괄 변경)`}
            >
              B
            </button>
            <button
              onClick={async () => {
                const updatePromises = selectedCells.map(async (cellId) => {
                  const cellObj = textObjects.find(obj => obj.id === cellId);
                  if (cellObj && cellObj.cellType === 'cell') {
                    const currentTextStyle = cellObj.textStyle || {
                      color: '#000000',
                      bold: false,
                      italic: false,
                      horizontalAlign: 'left',
                      verticalAlign: 'middle',
                      fontFamily: 'Arial'
                    };
                    return onUpdateTextObject(cellId, {
                      textStyle: { ...currentTextStyle, italic: !currentTextStyle.italic }
                    });
                  }
                });
                
                try {
                  await Promise.all(updatePromises);
                  console.log(`✅ ${selectedCount}개 셀의 기울임 스타일 일괄 변경 완료`);
                } catch (error) {
                  console.error('❌ 기울임 스타일 일괄 변경 실패:', error);
                }
              }}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded text-xs italic transition-colors"
              title={`기울임 (${selectedCount}개 셀 일괄 변경)`}
            >
              I
            </button>
          </div>
        </div>

        {/* 정렬 일괄 변경 */}
        <div>
          <label className="text-xs font-medium text-slate-600 mb-2 block">정렬</label>
          <div className="grid grid-cols-3 gap-1 mb-2">
            {(['left', 'center', 'right'] as const).map((align) => (
              <button
                key={align}
                onClick={async () => {
                  const updatePromises = selectedCells.map(async (cellId) => {
                    const cellObj = textObjects.find(obj => obj.id === cellId);
                    if (cellObj && cellObj.cellType === 'cell') {
                      const currentTextStyle = cellObj.textStyle || {
                        color: '#000000',
                        bold: false,
                        italic: false,
                        horizontalAlign: 'left',
                        verticalAlign: 'middle',
                        fontFamily: 'Arial'
                      };
                      return onUpdateTextObject(cellId, {
                        textStyle: { ...currentTextStyle, horizontalAlign: align }
                      });
                    }
                  });
                  
                  try {
                    await Promise.all(updatePromises);
                    console.log(`✅ ${selectedCount}개 셀의 수평정렬을 ${align}로 일괄 변경 완료`);
                  } catch (error) {
                    console.error('❌ 수평정렬 일괄 변경 실패:', error);
                  }
                }}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors"
                title={`${align === 'left' ? '왼쪽' : align === 'center' ? '가운데' : '오른쪽'} 정렬 (${selectedCount}개 셀 일괄 변경)`}
              >
                {align === 'left' ? '←' : align === 'center' ? '↔' : '→'}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {(['top', 'middle', 'bottom'] as const).map((align) => (
              <button
                key={align}
                onClick={async () => {
                  for (const cellId of selectedCells) {
                    const cellObj = textObjects.find(obj => obj.id === cellId);
                    if (cellObj && cellObj.cellType === 'cell') {
                      const currentTextStyle = cellObj.textStyle || {
                        color: '#000000',
                        bold: false,
                        italic: false,
                        horizontalAlign: 'left',
                        verticalAlign: 'middle',
                        fontFamily: 'Arial'
                      };
                      await onUpdateTextObject(cellId, {
                        textStyle: { ...currentTextStyle, verticalAlign: align }
                      });
                    }
                  }
                }}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded text-xs transition-colors"
              >
                {align === 'top' ? '↑' : align === 'middle' ? '↕' : '↓'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelCellPropertiesSection;