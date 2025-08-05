import React, { useCallback, useEffect } from 'react';
import { useEditorStore, useAdminConfigStore } from '../../store';
import { useCellSelectionStore } from '../../store/cellSelectionStore';
import { TextObject, ImageObject } from '../../types';

// 분리된 컴포넌트들 import
import MainToolsSection from './sections/MainToolsSection';
import ExcelDataSection from './sections/ExcelDataSection';
import ObjectPropertiesSection from './sections/ObjectPropertiesSection';
import ExcelCellPropertiesSection from './sections/ExcelCellPropertiesSection';
import DataManagementSection from './sections/DataManagementSection';
import SettingsSection from './sections/SettingsSection';

// 커스텀 hooks import
import { useToolbarState } from './hooks/useToolbarState';
import { useColorPalette } from './hooks/useColorPalette';
import { useExcelPaste } from './hooks/useExcelPaste';

// 유틸리티 함수들 import
import { 
  isExcelCellSelected,
  getCurrentColor,
  getMaxZIndex,
  getMinZIndex,
  getNextHigherZIndex,
  getNextLowerZIndex,
  isInputElement,
  isCanvasContainer
} from './utils/toolbarHelpers';

import { 
  convertImageToBase64, 
  getImageDimensions, 
  openFileDialog,
  calculateOptimalImageSize
} from './utils/fileHandlers';

import type { SafeSettings } from './types';

const ToolbarRefactored: React.FC = () => {
  // Store hooks
  const { 
    textObjects, 
    imageObjects,
    drawObjects,
    floorImage,
    addTextObject, 
    addImageObject,
    updateTextObject,
    updateImageObject,
    setFloorImage,
    deleteTextObject,
    deleteImageObject,
    settings,
    updateSettings,
    initializeFirebaseListeners,
    isLoading
  } = useAdminConfigStore();
  
  const { currentTool, setCurrentTool, selectedObjectId, setSelectedObjectId } = useEditorStore();

  // 커스텀 hooks
  const {
    isSettingsExpanded,
    isExcelPasteExpanded,
    isDataManagementExpanded,
    excelPasteData,
    showPreview,
    colorMode,
    updateTimerRef,
    setExcelPasteData,
    setShowPreview,
    setColorMode,
    toggleSettings,
    toggleExcelPaste,
    toggleDataManagement,
    clearUpdateTimer,
  } = useToolbarState();

  // 설정이 로드되지 않았을 때 기본값 제공
  const safeSettings: SafeSettings = {
    admin: {
      autoToolSwitch: settings?.admin?.autoToolSwitch ?? true,
      gridVisible: settings?.admin?.gridVisible ?? true,
      gridSize: settings?.admin?.gridSize ?? 32,
      gridSnapEnabled: settings?.admin?.gridSnapEnabled ?? false,
      defaultFontSize: settings?.admin?.defaultFontSize ?? 16,
      defaultBoxWidth: settings?.admin?.defaultBoxWidth ?? 200,
      defaultBoxHeight: settings?.admin?.defaultBoxHeight ?? 60,
      objectCreationPosition: settings?.admin?.objectCreationPosition ?? { x: 260, y: 950 },
      defaultCheckboxSettings: settings?.admin?.defaultCheckboxSettings ?? {
        checkedColor: '#22c55e',
        uncheckedColor: '#f3f4f6',
        checkedBackgroundColor: '#ffffff',
        uncheckedBackgroundColor: '#ffffff',
        checkedBackgroundOpacity: 1,
        uncheckedBackgroundOpacity: 1
      },
      excelPasteSettings: settings?.admin?.excelPasteSettings ?? {
        startPosition: { x: 100, y: 100 },
        cellWidth: 120,
        cellHeight: 40,
        fontSize: 14,
        fontColor: '#000000',
        backgroundColor: 'transparent',
        maxRows: 50,
        maxCols: 50
      }
    },
    view: {
      virtualKeyboardEnabled: settings?.view?.virtualKeyboardEnabled ?? true,
      touchMode: settings?.view?.touchMode ?? true
    }
  };

  // 선택된 객체 가져오기
  const selectedObject = selectedObjectId 
    ? textObjects.find(obj => obj.id === selectedObjectId) || imageObjects.find(obj => obj.id === selectedObjectId)
    : null;

  // 디바운싱된 업데이트 함수들
  const debouncedUpdateTextObject = useCallback((id: string, updates: any) => {
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
    }
    updateTimerRef.current = setTimeout(() => {
      updateTextObject(id, updates);
    }, 300);
  }, [updateTextObject]);

  const debouncedUpdateImageObject = useCallback((id: string, updates: any) => {
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
    }
    updateTimerRef.current = setTimeout(() => {
      updateImageObject(id, updates);
    }, 300);
  }, [updateImageObject]);

  // 텍스트 스타일 업데이트
  const updateTextStyle = useCallback(async (updates: any) => {
    if (selectedObject && 'text' in selectedObject) {
      const currentTextStyle = selectedObject.textStyle || {
        color: '#000000',
        bold: false,
        italic: false,
        horizontalAlign: 'left',
        verticalAlign: 'middle',
        fontFamily: 'Arial'
      };
      await updateTextObject(selectedObject.id, {
        textStyle: { ...currentTextStyle, ...updates }
      });
    }
  }, [selectedObject, updateTextObject]);

  const updateBoxStyle = useCallback(async (updates: any) => {
    if (selectedObject && 'text' in selectedObject) {
      const currentBoxStyle = selectedObject.boxStyle || {
        backgroundColor: 'transparent',
        backgroundOpacity: 1,
        borderColor: '#000000',
        borderWidth: 0,
        borderRadius: 0
      };
      await updateTextObject(selectedObject.id, {
        boxStyle: { ...currentBoxStyle, ...updates }
      });
    }
  }, [selectedObject, updateTextObject]);

  // 색상 팔레트 hook
  const { handleColorSelect } = useColorPalette({
    selectedObject,
    colorMode,
    updateTextStyle,
    updateBoxStyle
  });

  // Excel 붙여넣기용 addTextObject wrapper
  const addTextObjectForExcel = useCallback(async (obj: Omit<TextObject, 'id'>): Promise<string> => {
    return await addTextObject(obj);
  }, [addTextObject]);

  // Excel 붙여넣기 hook
  const { handleCreateExcelCells, handleDeleteExcelCellGroups } = useExcelPaste({
    excelPasteData,
    showPreview,
    safeSettings,
    textObjects,
    addTextObject: addTextObjectForExcel,
    deleteTextObject,
    onDataChange: setExcelPasteData,
    onPreviewChange: setShowPreview,
  });

  // 현재 색상 가져오기
  const currentColor = getCurrentColor(selectedObject, colorMode);

  // 엑셀 셀 선택 상태
  const { getSelectedCount, clearSelection } = useCellSelectionStore.getState();
  const selectedCellCount = getSelectedCount();

  // 객체 생성 함수들
  const handleCreateText = useCallback(async () => {
    const { x, y } = safeSettings.admin.objectCreationPosition;
    const newTextObject: Omit<TextObject, 'id'> = {
      x,
      y,
      width: safeSettings.admin.defaultBoxWidth,
      height: safeSettings.admin.defaultBoxHeight,
      text: '새 텍스트',
      fontSize: safeSettings.admin.defaultFontSize,
      textStyle: {
        color: '#000000',
        bold: false,
        italic: false,
        horizontalAlign: 'left',
        verticalAlign: 'middle',
        fontFamily: 'Arial'
      },
      boxStyle: {
        backgroundColor: 'transparent',
        backgroundOpacity: 1,
        borderColor: '#000000',
        borderWidth: 0,
        borderRadius: 0
      },
      permissions: {
        editable: true,
        movable: true,
        resizable: true,
        deletable: true,
      },
      zIndex: Date.now(),
      locked: false,
      visible: true,
      opacity: 1,
      hasCheckbox: false,
      checkboxChecked: false,
      checkboxCheckedColor: '#22c55e',
      checkboxUncheckedColor: '#f3f4f6',
      isEditing: false,
      lastModified: Date.now()
    };

    try {
      await addTextObject(newTextObject);
    } catch (error) {
      console.error('텍스트 객체 생성 실패:', error);
    }
  }, [addTextObject, safeSettings]);

  const handleCreateCheckbox = useCallback(async () => {
    const { x, y } = safeSettings.admin.objectCreationPosition;
    const { 
      checkedColor, 
      uncheckedColor,
      checkedBackgroundColor,
      uncheckedBackgroundColor,
      checkedBackgroundOpacity,
      uncheckedBackgroundOpacity
    } = safeSettings.admin.defaultCheckboxSettings;
    
    const newCheckboxObject: Omit<TextObject, 'id'> = {
      x,
      y,
      width: safeSettings.admin.defaultBoxWidth,
      height: safeSettings.admin.defaultBoxHeight,
      text: '새 체크박스',
      fontSize: safeSettings.admin.defaultFontSize,
      textStyle: {
        color: '#000000',
        bold: true,
        italic: false,
        horizontalAlign: 'left',
        verticalAlign: 'middle',
        fontFamily: 'Arial'
      },
      boxStyle: {
        backgroundColor: 'transparent',
        backgroundOpacity: 1,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8
      },
      permissions: {
        editable: true,
        movable: true,
        resizable: true,
        deletable: true,
      },
      zIndex: Date.now(),
      locked: false,
      visible: true,
      opacity: 1,
      hasCheckbox: true,
      checkboxChecked: false,
      checkboxCheckedColor: checkedColor,
      checkboxUncheckedColor: uncheckedColor,
      checkedBackgroundColor: checkedBackgroundColor,
      uncheckedBackgroundColor: uncheckedBackgroundColor,
      checkedBackgroundOpacity: checkedBackgroundOpacity,
      uncheckedBackgroundOpacity: uncheckedBackgroundOpacity,
      isEditing: false,
      lastModified: Date.now()
    };

    try {
      await addTextObject(newCheckboxObject);
    } catch (error) {
      console.error('체크박스 객체 생성 실패:', error);
    }
  }, [addTextObject, safeSettings]);

  const handleCreateImage = useCallback(async () => {
    try {
      const file = await openFileDialog('image/*');
      if (!file) return;

      const src = await convertImageToBase64(file);
      const { width: naturalWidth, height: naturalHeight } = await getImageDimensions(src);
      const { width, height } = calculateOptimalImageSize(naturalWidth, naturalHeight, 200);
      
          const { x, y } = safeSettings.admin.objectCreationPosition;
          
          const newImageObject: Omit<ImageObject, 'id'> = {
            x,
            y,
        width,
        height,
            src,
            permissions: {
              editable: true,
              movable: true,
              resizable: true,
              deletable: true,
            },
            zIndex: Date.now(),
            locked: false,
            visible: true,
            opacity: 1,
        maintainAspectRatio: true,
            lastModified: Date.now()
          };

          await addImageObject(newImageObject);
      } catch (error) {
        console.error('이미지 객체 생성 실패:', error);
      }
  }, [addImageObject, safeSettings]);

  // 레이어 순서 조정 함수들
  const handleBringToFront = useCallback(async () => {
    if (!selectedObjectId) return;
    
    const maxZIndex = getMaxZIndex(textObjects, imageObjects);
    
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: maxZIndex + 1 });
      return;
    }

    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: maxZIndex + 1 });
    }
  }, [selectedObjectId, textObjects, imageObjects, updateTextObject, updateImageObject]);

  const handleBringForward = useCallback(async () => {
    if (!selectedObjectId) return;
    
    const currentObj = [...textObjects, ...imageObjects].find(obj => obj.id === selectedObjectId);
    if (!currentObj) return;
    
    const nextZIndex = getNextHigherZIndex(currentObj.zIndex || 0, textObjects, imageObjects);
    if (nextZIndex === null) return;
    
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: nextZIndex + 1 });
      return;
    }

    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: nextZIndex + 1 });
    }
  }, [selectedObjectId, textObjects, imageObjects, updateTextObject, updateImageObject]);

  const handleSendBackward = useCallback(async () => {
    if (!selectedObjectId) return;
    
    const currentObj = [...textObjects, ...imageObjects].find(obj => obj.id === selectedObjectId);
    if (!currentObj) return;
    
    const prevZIndex = getNextLowerZIndex(currentObj.zIndex || 0, textObjects, imageObjects);
    if (prevZIndex === null) return;
    
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: prevZIndex - 1 });
      return;
    }
    
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: prevZIndex - 1 });
    }
  }, [selectedObjectId, textObjects, imageObjects, updateTextObject, updateImageObject]);

  const handleSendToBack = useCallback(async () => {
    if (!selectedObjectId) return;
    
    const minZIndex = getMinZIndex(textObjects, imageObjects);
    const newZIndex = Math.max(1, minZIndex - 1);
    
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: newZIndex });
      return;
    }
    
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: newZIndex });
    }
  }, [selectedObjectId, textObjects, imageObjects, updateTextObject, updateImageObject]);

  // 객체 복제 및 삭제
  const handleDuplicateObject = useCallback(async () => {
    if (!selectedObjectId) return;
    
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      const duplicatedObj = {
        ...textObj,
        x: textObj.x + 20,
        y: textObj.y + 20,
        isEditing: false
      };
      delete (duplicatedObj as any).id;
      await addTextObject(duplicatedObj);
      return;
    }
    
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      const duplicatedObj = {
        ...imageObj,
        x: imageObj.x + 20,
        y: imageObj.y + 20
      };
      delete (duplicatedObj as any).id;
      await addImageObject(duplicatedObj);
    }
  }, [selectedObjectId, textObjects, imageObjects, addTextObject, addImageObject]);

  const handleDeleteObject = useCallback(async () => {
    if (!selectedObjectId) return;
    
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj && textObj.permissions?.deletable) {
      await deleteTextObject(selectedObjectId);
      setSelectedObjectId(null);
      return;
    }
    
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj && imageObj.permissions?.deletable) {
      await deleteImageObject(selectedObjectId);
      setSelectedObjectId(null);
    }
  }, [selectedObjectId, textObjects, imageObjects, deleteTextObject, deleteImageObject, setSelectedObjectId]);

  // 배경 이미지 업로드
  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await convertImageToBase64(file);
        await setFloorImage({ path: base64 });
      } catch (error) {
        console.error('배경 이미지 업로드 실패:', error);
      }
    }
  }, [setFloorImage]);

  // 미리보기 토글
  const handlePreviewToggle = useCallback(() => {
    setShowPreview(!showPreview);
    const event = new CustomEvent('excel-preview-update', {
      detail: {
        data: excelPasteData,
        show: !showPreview
      }
    });
    window.dispatchEvent(event);
  }, [showPreview, excelPasteData, setShowPreview]);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      clearUpdateTimer();
    };
  }, [clearUpdateTimer]);

  // 로딩 중이거나 설정이 없으면 로딩 표시
  if (isLoading || !settings) {
    return (
      <div className="w-64 h-full bg-white border-r border-gray-200 p-4 flex items-center justify-center">
        <div className="text-gray-500">설정 로드 중...</div>
      </div>
    );
  }

  return (
    <div 
      className="h-full flex flex-col overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100"
      onClick={(e) => {
        e.stopPropagation();
        
        const target = e.target as HTMLElement;
        if (!isInputElement(target)) {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && isCanvasContainer(activeElement)) {
            activeElement.blur();
          }
        }
      }}
    >
      {/* 헤더 */}
      <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-pink-200 to-purple-200">
        <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
          <span>🛠️</span>
        관리자 도구
        </h1>
      </div>

      {/* 스크롤 가능한 콘텐츠 영역 */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4 space-y-4">
          
          {/* 1. 메인 도구 */}
          <MainToolsSection
            currentTool={currentTool}
            onToolSelect={setCurrentTool}
            onCreateText={handleCreateText}
            onCreateCheckbox={handleCreateCheckbox}
            onCreateImage={handleCreateImage}
          />

          {/* 2. 엑셀 데이터 입력 */}
          <ExcelDataSection
            isExpanded={isExcelPasteExpanded}
            onToggle={toggleExcelPaste}
            excelPasteData={excelPasteData}
            showPreview={showPreview}
            safeSettings={safeSettings}
            onDataChange={setExcelPasteData}
            onPreviewToggle={handlePreviewToggle}
            onCreateCells={handleCreateExcelCells}
            onDeleteCellGroups={handleDeleteExcelCellGroups}
            updateSettings={updateSettings}
          />

          {/* 3. 선택된 객체 편집 */}
          {selectedObject && !isExcelCellSelected(selectedObject) && selectedCellCount === 0 && (
            <ObjectPropertiesSection
              selectedObject={selectedObject}
              colorMode={colorMode}
              onColorModeChange={setColorMode}
              onColorSelect={handleColorSelect}
              onUpdateTextObject={debouncedUpdateTextObject}
              onUpdateImageObject={debouncedUpdateImageObject}
              onDuplicate={handleDuplicateObject}
              onDelete={handleDeleteObject}
              onBringToFront={handleBringToFront}
              onBringForward={handleBringForward}
              onSendBackward={handleSendBackward}
              onSendToBack={handleSendToBack}
              getCurrentColor={() => currentColor}
            />
          )}

          {/* 3-1. 다중선택된 엑셀 셀들 편집 */}
          <ExcelCellPropertiesSection
            textObjects={textObjects}
            colorMode={colorMode}
            onColorModeChange={setColorMode}
            onUpdateTextObject={debouncedUpdateTextObject}
            clearCellSelection={clearSelection}
          />

          {/* 4. 데이터 관리 */}
          <DataManagementSection
            isExpanded={isDataManagementExpanded}
            onToggle={toggleDataManagement}
            textObjects={textObjects}
            imageObjects={imageObjects}
            drawObjects={drawObjects}
            floorImage={floorImage}
            settings={settings}
            initializeFirebaseListeners={initializeFirebaseListeners}
          />

          {/* 5. 설정 */}
          <SettingsSection
            isExpanded={isSettingsExpanded}
            onToggle={toggleSettings}
            safeSettings={safeSettings}
            updateSettings={updateSettings}
            onImageUpload={handleImageUpload}
          />
                      </div>
                    </div>
    </div>
  );
};

export default ToolbarRefactored;