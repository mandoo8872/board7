import { useCallback, useEffect } from 'react';
import { TextObject } from '../../../types';
import { parseExcelData, getExcelDataDimensions } from '../utils/toolbarHelpers';
import { dispatchExcelPreviewEvent } from '../utils/fileHandlers';
import type { SafeSettings } from '../types';

interface UseExcelPasteProps {
  excelPasteData: string;
  showPreview: boolean;
  safeSettings: SafeSettings;
  textObjects: TextObject[];
  addTextObject: (obj: Omit<TextObject, 'id'>) => Promise<string>;
  deleteTextObject: (id: string) => Promise<void>;
  onDataChange: (data: string) => void;
  onPreviewChange: (show: boolean) => void;
}

export const useExcelPaste = ({
  excelPasteData,
  showPreview,
  safeSettings,
  textObjects,
  addTextObject,
  deleteTextObject,
  onDataChange,
  onPreviewChange,
}: UseExcelPasteProps) => {

  // 엑셀 데이터의 차원 계산
  const dataDimensions = getExcelDataDimensions(excelPasteData);

  // 엑셀 셀 생성 함수
  const handleCreateExcelCells = useCallback(async () => {
    const parsedData = parseExcelData(excelPasteData);
    if (parsedData.length === 0) {
      alert('붙여넣을 데이터가 없습니다.');
      return;
    }

    const { 
      startPosition, 
      cellWidth, 
      cellHeight, 
      fontSize, 
      fontColor, 
      backgroundColor,
      maxRows = 100,
      maxCols = 50
    } = safeSettings.admin.excelPasteSettings;
    
    const groupId = `excel-input-${Date.now()}`;
    const cells: Omit<TextObject, 'id'>[] = [];

    const actualRows = Math.min(parsedData.length, maxRows);
    const rowLengths = parsedData.map(row => row.length);
    const maxRowLength = rowLengths.length > 0 ? Math.max(...rowLengths) : 0;
    const actualCols = Math.min(maxRowLength, maxCols);

    for (let row = 0; row < actualRows; row++) {
      for (let col = 0; col < actualCols; col++) {
        const cellText = parsedData[row]?.[col] || '';
        
        const cellObject: Omit<TextObject, 'id'> = {
          x: startPosition.x + col * cellWidth,
          y: startPosition.y + row * cellHeight,
          width: cellWidth,
          height: cellHeight,
          text: cellText,
          fontSize: fontSize,
          textStyle: {
            color: fontColor,
            bold: false,
            italic: false,
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            fontFamily: 'Arial'
          },
          boxStyle: {
            backgroundColor: backgroundColor,
            backgroundOpacity: 1,
            borderColor: '#d1d5db',
            borderWidth: 1,
            borderRadius: 0
          },
          permissions: {
            editable: true,
            movable: false,
            resizable: false,
            deletable: false,
          },
          zIndex: 1000 + row * actualCols + col, // 엑셀 셀은 1000-9999 범위
          locked: true,
          visible: true,
          opacity: 1,
          hasCheckbox: false,
          checkboxChecked: false,
          checkboxCheckedColor: '#22c55e',
          checkboxUncheckedColor: '#f3f4f6',
          isEditing: false,
          lastModified: Date.now(),
          groupId: groupId,
          cellType: 'cell',
          cellPosition: { row, col }
        };

        cells.push(cellObject);
      }
    }

    try {
      for (const cell of cells) {
        await addTextObject(cell);
      }
      
      alert(`${actualRows}x${actualCols} 셀이 생성되었습니다.`);
      onDataChange('');
      onPreviewChange(false);
      dispatchExcelPreviewEvent('', false);
    } catch (error) {
      console.error('엑셀 셀 생성 실패:', error);
      alert('셀 생성 중 오류가 발생했습니다.');
    }
  }, [excelPasteData, safeSettings.admin.excelPasteSettings, addTextObject, onDataChange, onPreviewChange]);

  // 엑셀 셀 그룹 삭제 함수
  const handleDeleteExcelCellGroups = useCallback(async () => {
    const excelCells = textObjects.filter(obj => 
      obj.groupId && obj.groupId.startsWith('excel-input-')
    );

    if (excelCells.length === 0) {
      alert('삭제할 엑셀 셀이 없습니다.');
      return;
    }

    const groupCount = new Set(excelCells.map(cell => cell.groupId)).size;
    
    const confirmMessage = `${groupCount}개의 엑셀 그룹 (총 ${excelCells.length}개 셀)을 삭제하시겠습니까?`;
    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      for (const cell of excelCells) {
        await deleteTextObject(cell.id);
      }
      
      alert(`${groupCount}개 그룹 (${excelCells.length}개 셀)이 삭제되었습니다.`);
    } catch (error) {
      console.error('엑셀 셀 삭제 실패:', error);
      alert('셀 삭제 중 오류가 발생했습니다.');
    }
  }, [textObjects, deleteTextObject]);

  // 미리보기 업데이트
  useEffect(() => {
    if (showPreview && excelPasteData.trim()) {
      dispatchExcelPreviewEvent(excelPasteData, true);
    } else {
      dispatchExcelPreviewEvent('', false);
    }
  }, [showPreview, excelPasteData, safeSettings.admin.excelPasteSettings]);

  return {
    dataDimensions,
    handleCreateExcelCells,
    handleDeleteExcelCellGroups,
  };
};