import React, { useState, useCallback, useRef } from 'react';
import { useEditorStore, useAdminConfigStore } from '../../store';
import { Tool, TextObject, ImageObject } from '../../types';
import { useGridStore } from '../../store/gridStore';
import { useCheckboxStore } from '../../store/checkboxStore';

const Toolbar: React.FC = () => {
  const { 
    textObjects, 
    imageObjects,
    addTextObject, 
    addImageObject,
    updateTextObject,
    updateImageObject,
    setFloorImage,
    deleteTextObject,
    deleteImageObject
  } = useAdminConfigStore();
  const { currentTool, setCurrentTool, selectedObjectId, setSelectedObjectId } = useEditorStore();
  const { 
    gridEnabled, 
    gridSize, 
    snapEnabled,
    setGridEnabled, 
    setGridSize, 
    setSnapEnabled 
  } = useGridStore();
  const {
    defaultCheckedColor,
    defaultUncheckedColor,
    setDefaultCheckedColor,
    setDefaultUncheckedColor,
    checkedBackgroundColor,
    uncheckedBackgroundColor,
    checkedBackgroundOpacity,
    uncheckedBackgroundOpacity,
    setCheckedBackgroundColor,
    setUncheckedBackgroundColor,
    setCheckedBackgroundOpacity,
    setUncheckedBackgroundOpacity
  } = useCheckboxStore();
  
  // 설정 메뉴 접기/펼치기 상태
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);

  // 선택된 객체 가져오기
  const selectedObject = selectedObjectId 
    ? textObjects.find(obj => obj.id === selectedObjectId) || imageObjects.find(obj => obj.id === selectedObjectId)
    : null;

  // 타입 가드 함수들
  const isTextObject = (obj: any): obj is TextObject => {
    return obj && typeof obj.hasCheckbox !== 'undefined';
  };

  const isImageObject = (obj: any): obj is ImageObject => {
    return obj && typeof obj.src !== 'undefined';
  };

  // 디바운싱을 위한 타이머 ref
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 속성 업데이트 함수들 (debounced 함수들보다 먼저 정의)
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

  // 권한 업데이트 함수 (현재 사용하지 않음)
  // const updatePermissions = useCallback(async (updates: any) => {
  //   if (selectedObject) {
  //     if ('text' in selectedObject) {
  //       await updateTextObject(selectedObject.id, {
  //         permissions: { ...selectedObject.permissions, ...updates }
  //       });
  //     } else {
  //       await updateImageObject(selectedObject.id, {
  //         permissions: { ...selectedObject.permissions, ...updates }
  //       });
  //     }
  //   }
  // }, [selectedObject, updateTextObject, updateImageObject]);

  // 텍스트 스타일 디바운싱 업데이트
  const debouncedUpdateTextStyle = useCallback((updates: any) => {
    if (!selectedObject) return;
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
    }
    updateTimerRef.current = setTimeout(() => {
      updateTextStyle(updates);
    }, 300);
  }, [selectedObject, updateTextStyle]);

  // 박스 스타일 디바운싱 업데이트
  const debouncedUpdateBoxStyle = useCallback((updates: any) => {
    if (!selectedObject) return;
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
    }
    updateTimerRef.current = setTimeout(() => {
      updateBoxStyle(updates);
    }, 300);
  }, [selectedObject, updateBoxStyle]);

  // 권한 디바운싱 업데이트 (현재 사용하지 않음)
  // const debouncedUpdatePermissions = useCallback((updates: any) => {
  //   if (!selectedObject) return;
  //   if (updateTimerRef.current) {
  //     clearTimeout(updateTimerRef.current);
  //   }
  //   updateTimerRef.current = setTimeout(() => {
  //     updatePermissions(updates);
  //   }, 300);
  // }, [selectedObject, updatePermissions]);

  // 이미지 객체 디바운싱 업데이트
  const debouncedUpdateImageObject = useCallback((id: string, updates: any) => {
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
    }
    updateTimerRef.current = setTimeout(() => {
      updateImageObject(id, updates);
    }, 300);
  }, [updateImageObject]);

  // 컴포넌트 언마운트 시 타이머 정리
  React.useEffect(() => {
    return () => {
      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current);
      }
    };
  }, []);

  // 디바운싱된 업데이트 함수
  const debouncedUpdateTextObject = useCallback((id: string, updates: any) => {
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current);
    }
    updateTimerRef.current = setTimeout(() => {
      updateTextObject(id, updates);
    }, 300); // 300ms 지연
  }, [updateTextObject]);

  const handleCreateText = useCallback(async () => {
    const newTextObject: Omit<TextObject, 'id'> = {
      x: 200,
      y: 200,
      width: 200,
      height: 60,
      text: '새 텍스트',
      fontSize: 16,
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
  }, [addTextObject]);

  const handleCreateCheckbox = useCallback(async () => {
    const newCheckboxObject: Omit<TextObject, 'id'> = {
      x: 200,
      y: 200,
      width: 200,
      height: 60,
      text: '새 체크박스',
      fontSize: 16,
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
      hasCheckbox: true,
      checkboxChecked: false,
      checkboxCheckedColor: defaultCheckedColor,
      checkboxUncheckedColor: defaultUncheckedColor,
      isEditing: false,
      lastModified: Date.now()
    };

    try {
      await addTextObject(newCheckboxObject);
    } catch (error) {
      console.error('체크박스 객체 생성 실패:', error);
    }
  }, [addTextObject, defaultCheckedColor, defaultUncheckedColor]);

  const handleCreateImage = useCallback(async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const src = event.target?.result as string;
          
          const newImageObject: Omit<ImageObject, 'id'> = {
            x: 200,
            y: 200,
            width: 200,
            height: 200,
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
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error('이미지 객체 생성 실패:', error);
      }
    };

    input.click();
  }, [addImageObject]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        await setFloorImage({ path: base64 });
      };
      reader.readAsDataURL(file);
    }
  };

  // 선택된 객체 복제
  const handleDuplicateObject = async () => {
    if (!selectedObjectId) return;
    
    // 텍스트 객체 복제
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      const duplicatedObj = {
        ...textObj,
        x: textObj.x + 20, // 약간 오프셋
        y: textObj.y + 20,
        isEditing: false
      };
      delete (duplicatedObj as any).id; // id 제거하여 새로 생성되도록
      await addTextObject(duplicatedObj);
      return;
    }
    
    // 이미지 객체 복제
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      const duplicatedObj = {
        ...imageObj,
        x: imageObj.x + 20, // 약간 오프셋
        y: imageObj.y + 20
      };
      delete (duplicatedObj as any).id; // id 제거하여 새로 생성되도록
      await addImageObject(duplicatedObj);
      return;
    }
  };

  // 선택된 객체 삭제
  const handleDeleteObject = async () => {
    if (!selectedObjectId) return;
    
    // 텍스트 객체 삭제
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj && textObj.permissions?.deletable) {
      await deleteTextObject(selectedObjectId);
      setSelectedObjectId(null);
      return;
    }
    
    // 이미지 객체 삭제
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj && imageObj.permissions?.deletable) {
      await deleteImageObject(selectedObjectId);
      setSelectedObjectId(null);
      return;
    }
  };

  // 레이어 순서 조정 함수들
  const handleBringToFront = async () => {
    if (!selectedObjectId) return;
    
    // 모든 객체의 최대 zIndex 찾기
    const allObjects = [...textObjects, ...imageObjects];
    const maxZIndex = Math.max(...allObjects.map(obj => obj.zIndex || 0));
    
    // 텍스트 객체인 경우
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: maxZIndex + 1 });
      return;
    }
    
    // 이미지 객체인 경우
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: maxZIndex + 1 });
      return;
    }
  };

  const handleBringForward = async () => {
    if (!selectedObjectId) return;
    
    const allObjects = [...textObjects, ...imageObjects];
    const currentObj = allObjects.find(obj => obj.id === selectedObjectId);
    if (!currentObj) return;
    
    // 현재 객체보다 zIndex가 큰 객체들 중 가장 작은 값 찾기
    const higherObjects = allObjects.filter(obj => (obj.zIndex || 0) > (currentObj.zIndex || 0));
    if (higherObjects.length === 0) return; // 이미 최상위
    
    const nextZIndex = Math.min(...higherObjects.map(obj => obj.zIndex || 0));
    
    // 텍스트 객체인 경우
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: nextZIndex + 1 });
      return;
    }
    
    // 이미지 객체인 경우
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: nextZIndex + 1 });
      return;
    }
  };

  const handleSendBackward = async () => {
    if (!selectedObjectId) return;
    
    const allObjects = [...textObjects, ...imageObjects];
    const currentObj = allObjects.find(obj => obj.id === selectedObjectId);
    if (!currentObj) return;
    
    // 현재 객체보다 zIndex가 작은 객체들 중 가장 큰 값 찾기
    const lowerObjects = allObjects.filter(obj => (obj.zIndex || 0) < (currentObj.zIndex || 0));
    if (lowerObjects.length === 0) return; // 이미 최하위
    
    const prevZIndex = Math.max(...lowerObjects.map(obj => obj.zIndex || 0));
    
    // 텍스트 객체인 경우
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: prevZIndex - 1 });
      return;
    }
    
    // 이미지 객체인 경우
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: prevZIndex - 1 });
      return;
    }
  };

  const handleSendToBack = async () => {
    if (!selectedObjectId) return;
    
    // 모든 객체의 최소 zIndex 찾기
    const allObjects = [...textObjects, ...imageObjects];
    const minZIndex = Math.min(...allObjects.map(obj => obj.zIndex || 0));
    
    // 텍스트 객체인 경우
    const textObj = textObjects.find(obj => obj.id === selectedObjectId);
    if (textObj) {
      await updateTextObject(selectedObjectId, { zIndex: minZIndex - 1 });
      return;
    }
    
    // 이미지 객체인 경우
    const imageObj = imageObjects.find(obj => obj.id === selectedObjectId);
    if (imageObj) {
      await updateImageObject(selectedObjectId, { zIndex: minZIndex - 1 });
      return;
    }
  };

  const tools: { id: Tool; label: string; icon: string }[] = [
    { id: 'select', label: '선택', icon: '👆' },
    { id: 'text', label: '텍스트', icon: '📝' },
    { id: 'checkbox', label: '체크', icon: '☑️' },
    { id: 'image', label: '이미지', icon: '🖼️' },
    { id: 'pen', label: '필기', icon: '✏️' },
    { id: 'eraser', label: '지우개', icon: '🧽' },
  ];

  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 overflow-y-auto">
      {/* 제목 */}
      <div className="text-lg font-bold text-gray-800 border-b pb-2">
        관리자 도구
      </div>

      {/* 1. 도구 */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-600">도구</h3>
        <div className="grid grid-cols-3 gap-2">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => {
                if (tool.id === 'select') {
                  setCurrentTool('select');
                } else if (tool.id === 'text') {
                  handleCreateText();
                } else if (tool.id === 'checkbox') {
                  handleCreateCheckbox();
                } else if (tool.id === 'image') {
                  handleCreateImage();
                } else if (tool.id === 'pen' || tool.id === 'eraser') {
                  setCurrentTool(tool.id);
                }
              }}
              className={`px-3 py-2 rounded-lg flex flex-col items-center gap-1 transition-colors text-center
                ${currentTool === tool.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="text-xs">{tool.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-300" />

      {/* 2. 객체 속성 */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-600">
          객체 {selectedObject && isTextObject(selectedObject) 
            ? `(${selectedObject.hasCheckbox ? '체크박스' : '텍스트'})` 
            : selectedObject && isImageObject(selectedObject) 
            ? '(이미지)' 
            : ''}
        </h3>
        
        {selectedObject ? (
          <>
            {/* 객체 액션 버튼 */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <h4 className="text-xs font-semibold text-gray-500 mb-2">액션</h4>
              
              {/* 복제/삭제 버튼 */}
              <div className="flex gap-2 mb-3">
                <button
                  onClick={handleDuplicateObject}
                  className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs flex items-center justify-center gap-1"
                  title="복제 (Ctrl+D)"
                >
                  📋 복제
                </button>
                <button
                  onClick={handleDeleteObject}
                  disabled={!(selectedObject as any).permissions?.deletable}
                  className={`flex-1 px-3 py-2 rounded-lg transition-colors text-xs flex items-center justify-center gap-1 ${
                    (selectedObject as any).permissions?.deletable
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  title="삭제 (Del)"
                >
                  🗑️ 삭제
                </button>
              </div>
              
              {/* 레이어 순서 조정 버튼 */}
              <div className="text-xs text-gray-600 mb-1">레이어</div>
              <div className="grid grid-cols-4 gap-1">
                <button
                  onClick={handleBringToFront}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="맨 앞으로"
                >
                  ⬆️⬆️
                </button>
                <button
                  onClick={handleBringForward}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="앞으로"
                >
                  ⬆️
                </button>
                <button
                  onClick={handleSendBackward}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="뒤로"
                >
                  ⬇️
                </button>
                <button
                  onClick={handleSendToBack}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="맨 뒤로"
                >
                  ⬇️⬇️
                </button>
              </div>
            </div>

            {/* 텍스트 객체 속성 */}
            {selectedObject && isTextObject(selectedObject) && (
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-gray-500 mb-2">속성</h4>
                
                {/* 텍스트 속성 */}
                <div className="mb-3">
                  <div className="text-xs text-gray-600 mb-2">텍스트 속성</div>
                  
                  {/* 글꼴 크기 */}
                  <div className="mb-2">
                    <label className="text-xs text-gray-500">글꼴 크기</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="range" 
                        min="8" 
                        max="72" 
                        value={(selectedObject as TextObject).fontSize || 16}
                        onChange={(e) => debouncedUpdateTextObject(selectedObject.id, { fontSize: parseInt(e.target.value) })}
                        className="flex-1" 
                      />
                      <span className="text-xs text-gray-600 w-8">{(selectedObject as TextObject).fontSize || 16}px</span>
                    </div>
                  </div>

                  {/* 글꼴 선택 */}
                  <div className="mb-2">
                    <label className="text-xs text-gray-500">글꼴</label>
                    <select 
                      value={(selectedObject as TextObject).textStyle?.fontFamily || 'Arial, sans-serif'}
                      onChange={(e) => debouncedUpdateTextStyle({ fontFamily: e.target.value })}
                      className="w-full px-2 py-1 border rounded text-xs"
                    >
                      <option value="Arial, sans-serif">Arial</option>
                      <option value="'Times New Roman', serif">Times New Roman</option>
                      <option value="'Courier New', monospace">Courier New</option>
                      <option value="Helvetica, sans-serif">Helvetica</option>
                      <option value="Georgia, serif">Georgia</option>
                      <option value="Verdana, sans-serif">Verdana</option>
                      <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                      <option value="'Comic Sans MS', cursive">Comic Sans MS</option>
                      <option value="Impact, sans-serif">Impact</option>
                      <option value="'Lucida Console', monospace">Lucida Console</option>
                    </select>
                  </div>

                  {/* 텍스트 색상과 스타일 버튼 */}
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <input 
                      type="color" 
                      value={(selectedObject as TextObject).textStyle?.color || '#000000'}
                      onChange={(e) => debouncedUpdateTextStyle({ color: e.target.value })}
                      className="w-full h-8 rounded border" 
                      title="텍스트 색상" 
                    />
                    <div className="flex gap-1">
                      <button 
                        onClick={() => debouncedUpdateTextStyle({ bold: !(selectedObject as TextObject).textStyle?.bold })}
                        className={`flex-1 px-2 py-1 border rounded text-xs transition-colors ${
                          (selectedObject as TextObject).textStyle?.bold 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'bg-white hover:bg-gray-100 border-gray-300'
                        }`}
                      >
                        B
                      </button>
                      <button 
                        onClick={() => debouncedUpdateTextStyle({ italic: !(selectedObject as TextObject).textStyle?.italic })}
                        className={`flex-1 px-2 py-1 border rounded text-xs transition-colors ${
                          (selectedObject as TextObject).textStyle?.italic 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'bg-white hover:bg-gray-100 border-gray-300'
                        }`}
                      >
                        I
                      </button>
                    </div>
                  </div>
                  
                  {/* 정렬 옵션 */}
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    {['left', 'center', 'right'].map(align => (
                      <button 
                        key={align}
                        onClick={() => debouncedUpdateTextStyle({ horizontalAlign: align as any })}
                        className={`px-2 py-1 border rounded text-xs transition-colors ${
                          (selectedObject as TextObject).textStyle?.horizontalAlign === align
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white hover:bg-gray-100 border-gray-300'
                        }`} 
                        title={`${align === 'left' ? '왼쪽' : align === 'center' ? '가운데' : '오른쪽'} 정렬`}
                      >
                        {align === 'left' ? '⬅️' : align === 'center' ? '↔️' : '➡️'}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {['top', 'middle', 'bottom'].map(align => (
                      <button 
                        key={align}
                        onClick={() => debouncedUpdateTextStyle({ verticalAlign: align as any })}
                        className={`px-2 py-1 border rounded text-xs transition-colors ${
                          (selectedObject as TextObject).textStyle?.verticalAlign === align
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white hover:bg-gray-100 border-gray-300'
                        }`} 
                        title={`${align === 'top' ? '위쪽' : align === 'middle' ? '중앙' : '아래쪽'} 정렬`}
                      >
                        {align === 'top' ? '⬆️' : align === 'middle' ? '↕️' : '⬇️'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 박스 속성 */}
                <div>
                  <div className="text-xs text-gray-600 mb-2">박스 속성</div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <input 
                      type="color" 
                      value={(selectedObject as TextObject).boxStyle?.backgroundColor || '#ffffff'}
                      onChange={(e) => debouncedUpdateBoxStyle({ backgroundColor: e.target.value })}
                      className="w-full h-8 rounded border" 
                      title="배경색" 
                    />
                    <input 
                      type="color" 
                      value={(selectedObject as TextObject).boxStyle?.borderColor || '#000000'}
                      onChange={(e) => debouncedUpdateBoxStyle({ borderColor: e.target.value })}
                      className="w-full h-8 rounded border" 
                      title="테두리 색상" 
                    />
                  </div>
                  
                  {/* 투명도 슬라이더 */}
                  <div className="mb-2">
                    <label className="text-xs text-gray-500">배경 투명도</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={((selectedObject as TextObject).boxStyle?.backgroundOpacity || 1) * 100}
                        onChange={(e) => debouncedUpdateBoxStyle({ backgroundOpacity: parseInt(e.target.value) / 100 })}
                        className="flex-1" 
                      />
                      <span className="text-xs text-gray-600 w-8">{Math.round(((selectedObject as TextObject).boxStyle?.backgroundOpacity || 1) * 100)}%</span>
                    </div>
                  </div>
                  
                  {/* 테두리 두께 */}
                  <div className="mb-2">
                    <label className="text-xs text-gray-500">테두리 두께</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="10" 
                        value={(selectedObject as TextObject).boxStyle?.borderWidth || 0}
                        onChange={(e) => debouncedUpdateBoxStyle({ borderWidth: parseInt(e.target.value) })}
                        className="flex-1" 
                      />
                      <span className="text-xs text-gray-600 w-8">{(selectedObject as TextObject).boxStyle?.borderWidth || 0}px</span>
                    </div>
                  </div>
                </div>

                {/* 체크박스 전용 속성 */}
                {(selectedObject as TextObject).hasCheckbox && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-600 mb-2">체크박스 속성</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-gray-500">체크됨 색상</label>
                        <input 
                          type="color" 
                          value={(selectedObject as TextObject).checkboxCheckedColor || defaultCheckedColor}
                          onChange={(e) => debouncedUpdateTextObject(selectedObject.id, { checkboxCheckedColor: e.target.value })}
                          className="w-full h-8 rounded border" 
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">체크안됨 색상</label>
                        <input 
                          type="color" 
                          value={(selectedObject as TextObject).checkboxUncheckedColor || defaultUncheckedColor}
                          onChange={(e) => debouncedUpdateTextObject(selectedObject.id, { checkboxUncheckedColor: e.target.value })}
                          className="w-full h-8 rounded border" 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 이미지 객체 속성 */}
            {selectedObject && isImageObject(selectedObject) && (
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-gray-500 mb-2">이미지 속성</h4>
                
                {/* 투명도 슬라이더 */}
                <div className="mb-2">
                  <label className="text-xs text-gray-500">투명도</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={((selectedObject as ImageObject).opacity || 1) * 100}
                      onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { opacity: parseInt(e.target.value) / 100 })}
                      className="flex-1" 
                    />
                    <span className="text-xs text-gray-600 w-8">{Math.round(((selectedObject as ImageObject).opacity || 1) * 100)}%</span>
                  </div>
                </div>
                
                {/* 비율 유지 체크박스 */}
                <div className="mb-2">
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={(selectedObject as ImageObject).maintainAspectRatio || false}
                      onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { maintainAspectRatio: e.target.checked })}
                      className="rounded" 
                    />
                    비율 유지
                  </label>
                </div>
              </div>
            )}

            {/* 권한 설정 */}
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-gray-500 mb-2">권한</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={(selectedObject as any).permissions?.movable || false}
                    onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { permissions: { ...(selectedObject as any).permissions, movable: e.target.checked } })}
                    className="rounded" 
                  />
                  <span>이동가능</span>
                </label>
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={(selectedObject as any).permissions?.deletable || false}
                    onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { permissions: { ...(selectedObject as any).permissions, deletable: e.target.checked } })}
                    className="rounded" 
                  />
                  <span>삭제가능</span>
                </label>
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={(selectedObject as any).permissions?.resizable || false}
                    onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { permissions: { ...(selectedObject as any).permissions, resizable: e.target.checked } })}
                    className="rounded" 
                  />
                  <span>크기조절 가능</span>
                </label>
              </div>
            </div>
          </>
        ) : selectedObject ? (
          <>
            {/* 이미지 객체 액션 버튼 */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <h4 className="text-xs font-semibold text-gray-500 mb-2">액션</h4>
              
              {/* 복제/삭제 버튼 */}
              <div className="flex gap-2 mb-3">
                <button
                  onClick={handleDuplicateObject}
                  className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-xs flex items-center justify-center gap-1"
                  title="복제 (Ctrl+D)"
                >
                  📋 복제
                </button>
                <button
                  onClick={handleDeleteObject}
                  disabled={!(selectedObject as any).permissions?.deletable}
                  className={`flex-1 px-3 py-2 rounded-lg transition-colors text-xs flex items-center justify-center gap-1 ${
                    (selectedObject as any).permissions?.deletable
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  title="삭제 (Del)"
                >
                  🗑️ 삭제
                </button>
              </div>
              
              {/* 레이어 순서 조정 버튼 */}
              <div className="text-xs text-gray-600 mb-1">레이어</div>
              <div className="grid grid-cols-4 gap-1">
                <button
                  onClick={handleBringToFront}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="맨 앞으로"
                >
                  ⬆️⬆️
                </button>
                <button
                  onClick={handleBringForward}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="앞으로"
                >
                  ⬆️
                </button>
                <button
                  onClick={handleSendBackward}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="뒤로"
                >
                  ⬇️
                </button>
                <button
                  onClick={handleSendToBack}
                  className="px-2 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-xs flex items-center justify-center"
                  title="맨 뒤로"
                >
                  ⬇️⬇️
                </button>
              </div>
            </div>

            {/* 이미지 객체 속성 */}
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-gray-500 mb-2">속성</h4>
              
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <label className="text-xs text-gray-500">전체투명도</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={((selectedObject as ImageObject).opacity || 1) * 100}
                    onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { opacity: parseInt(e.target.value) / 100 })}
                    className="w-full" 
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-xs">
                    <input 
                      type="checkbox" 
                      checked={(selectedObject as ImageObject).maintainAspectRatio || false}
                      onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { maintainAspectRatio: e.target.checked })}
                      className="rounded" 
                    />
                    <span>원본 비율 유지</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 권한 */}
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-gray-500 mb-2">권한</h4>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={(selectedObject as any).permissions?.movable || false}
                    onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { permissions: { ...(selectedObject as any).permissions, movable: e.target.checked } })}
                    className="rounded" 
                  />
                  <span>이동가능</span>
                </label>
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={(selectedObject as any).permissions?.deletable || false}
                    onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { permissions: { ...(selectedObject as any).permissions, deletable: e.target.checked } })}
                    className="rounded" 
                  />
                  <span>삭제가능</span>
                </label>
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={(selectedObject as any).permissions?.resizable || false}
                    onChange={(e) => debouncedUpdateImageObject((selectedObject as any).id, { permissions: { ...(selectedObject as any).permissions, resizable: e.target.checked } })}
                    className="rounded" 
                  />
                  <span>크기조절 가능</span>
                </label>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gray-50 rounded-lg p-3 text-center text-sm text-gray-500">
            객체를 선택하면 속성을 편집할 수 있습니다
          </div>
        )}
      </div>

      <div className="h-px bg-gray-300" />

      {/* 3. 설정 */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setIsSettingsExpanded(!isSettingsExpanded)}
          className="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span>⚙️</span>
            <span>설정</span>
          </div>
          <span className={`transform transition-transform ${isSettingsExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {/* 설정 메뉴 내용 */}
        {isSettingsExpanded && (
          <div className="bg-gray-50 rounded-lg p-3 space-y-4">
            {/* 배경 설정 */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-2">배경 설정</h4>
              <label className="w-full px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors cursor-pointer text-xs flex items-center gap-2">
                <span>🖼️</span>
                <span>배경 업로드</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* 그리드 설정 */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-2">그리드 설정</h4>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={gridEnabled}
                    onChange={(e) => setGridEnabled(e.target.checked)}
                    className="rounded" 
                  />
                  <span>그리드 표시</span>
                </label>

                <label className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={snapEnabled}
                    onChange={(e) => setSnapEnabled(e.target.checked)}
                    className="rounded" 
                  />
                  <span>그리드 스냅</span>
                </label>

                <div className="text-xs text-gray-600 mb-1">그리드 크기</div>
                <div className="grid grid-cols-2 gap-1">
                  {[10, 20, 25, 50].map(size => (
                    <button
                      key={size}
                      onClick={() => setGridSize(size)}
                      className={`px-2 py-1 text-xs rounded border transition-colors
                        ${gridSize === size 
                          ? 'bg-blue-500 text-white border-blue-500' 
                          : 'bg-white hover:bg-gray-100 border-gray-300'
                        }`}
                    >
                      {size}px
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 체크박스 색상 설정 */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-2">체크박스 기본 색상</h4>
              
              <div className="space-y-2">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">체크된 색상</label>
                  <input 
                    type="color" 
                    value={defaultCheckedColor}
                    onChange={(e) => setDefaultCheckedColor(e.target.value)}
                    className="w-full h-8 rounded border cursor-pointer" 
                    title="체크된 상태 색상" 
                  />
                </div>
                
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">체크 안된 색상</label>
                  <input 
                    type="color" 
                    value={defaultUncheckedColor}
                    onChange={(e) => setDefaultUncheckedColor(e.target.value)}
                    className="w-full h-8 rounded border cursor-pointer" 
                    title="체크 안된 상태 색상" 
                  />
                </div>
              </div>
            </div>

            {/* 체크박스 배경 설정 */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-2">체크박스 배경 설정</h4>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">체크시 배경색</label>
                  <input 
                    type="color" 
                    value={checkedBackgroundColor}
                    onChange={(e) => setCheckedBackgroundColor(e.target.value)}
                    className="w-full h-8 rounded border cursor-pointer" 
                    title="체크된 상태 배경색" 
                  />
                  <label className="text-xs text-gray-600 mb-1 block mt-2">투명도</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={checkedBackgroundOpacity * 100}
                    onChange={(e) => setCheckedBackgroundOpacity(parseInt(e.target.value) / 100)}
                    className="w-full" 
                  />
                  <span className="text-xs text-gray-500">{Math.round(checkedBackgroundOpacity * 100)}%</span>
                </div>
                
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">해제시 배경색</label>
                  <input 
                    type="color" 
                    value={uncheckedBackgroundColor}
                    onChange={(e) => setUncheckedBackgroundColor(e.target.value)}
                    className="w-full h-8 rounded border cursor-pointer" 
                    title="체크 해제된 상태 배경색" 
                  />
                  <label className="text-xs text-gray-600 mb-1 block mt-2">투명도</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={uncheckedBackgroundOpacity * 100}
                    onChange={(e) => setUncheckedBackgroundOpacity(parseInt(e.target.value) / 100)}
                    className="w-full" 
                  />
                  <span className="text-xs text-gray-500">{Math.round(uncheckedBackgroundOpacity * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 현재 도구 표시 */}
      <div className="mt-auto p-3 bg-gray-50 rounded-lg">
        <div className="text-xs text-gray-500 mb-1">현재 도구</div>
        <div className="text-sm font-semibold text-gray-800">
          {tools.find(t => t.id === currentTool)?.icon} {tools.find(t => t.id === currentTool)?.label}
        </div>
        {selectedObject && (
          <div className="text-xs text-gray-500 mt-1">
            선택된 객체: {isTextObject(selectedObject) 
              ? ((selectedObject as TextObject).hasCheckbox ? '체크박스' : '텍스트')
              : '이미지'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar; 