import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useEditorStore, useAdminConfigStore, useDrawStore } from '../../store';
import { useUndoRedo } from '../../hooks/useUndoRedo';
import { Tool, TextObject } from '../../types';
import { 
  ArrowCounterClockwise, 
  ArrowClockwise, 
  Eraser,
  HandPointing,
  Pencil,
  CheckSquare,
  House,
  Palette,
  Circle
} from 'phosphor-react';

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

const ViewFloatingToolbar: React.FC = () => {
  const { currentTool, setCurrentTool, fitToWindow, setSelectedObjectId } = useEditorStore();
  const { addTextObject, settings } = useAdminConfigStore();
  const { penColor, penWidth, setPenColor, setPenWidth } = useDrawStore();
  const { executeUndo, executeRedo, canUndo, canRedo } = useUndoRedo();
  
  // 간소화된 색상 팔레트 (확장 팔레트에서 사용)
  
  // 저장된 위치와 크기 로드
  const loadSettings = () => {
    try {
      const savedPosition = localStorage.getItem('viewFloatingToolbar_position');
      const savedSize = localStorage.getItem('viewFloatingToolbar_size');
      
      const defaultPosition = { x: window.innerWidth - 200, y: window.innerHeight - 150 };
      const defaultSize = { width: 180, height: 120 };
      
      return {
        position: savedPosition ? JSON.parse(savedPosition) : defaultPosition,
        size: savedSize ? JSON.parse(savedSize) : defaultSize
      };
    } catch {
      return {
        position: { x: window.innerWidth - 200, y: window.innerHeight - 150 },
        size: { width: 180, height: 120 }
      };
    }
  };

  const savedSettings = loadSettings();
  
  // 툴바 위치 및 크기 상태
  const [position, setPosition] = useState<Position>(savedSettings.position);
  const [size, setSize] = useState<Size>(savedSettings.size);
  
  // 초기 마운트 시 경계 체크
  useEffect(() => {
    const constrainedPosition = constrainToViewport(savedSettings.position, savedSettings.size);
    if (constrainedPosition.x !== savedSettings.position.x || constrainedPosition.y !== savedSettings.position.y) {
      setPosition(constrainedPosition);
      saveSettings(constrainedPosition, savedSettings.size);
    }
  }, []);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [showSizeAdjuster, setShowSizeAdjuster] = useState(false);
  
  const toolbarRef = useRef<HTMLDivElement>(null);

  // 위치 및 크기 저장 함수
  const saveSettings = (newPosition: Position, newSize: Size) => {
    try {
      localStorage.setItem('viewFloatingToolbar_position', JSON.stringify(newPosition));
      localStorage.setItem('viewFloatingToolbar_size', JSON.stringify(newSize));
    } catch (error) {
      console.warn('Failed to save toolbar settings:', error);
    }
  };

  // 경계 체크 및 조정 함수
  const constrainToViewport = (pos: Position, sz: Size): Position => {
    const rectW = sz.width;
    const expandHeight = (showColorPalette || showSizeAdjuster) ? 110 : 0;
    const rectH = sz.height + expandHeight;

    const maxX = Math.max(8, window.innerWidth - rectW - 8);
    const maxY = Math.max(8, window.innerHeight - rectH - 8);
    const minX = 8;
    const minY = 8;

    return {
      x: Math.max(minX, Math.min(maxX, pos.x)),
      y: Math.max(minY, Math.min(maxY, pos.y))
    };
  };

  // 설정이 로드되지 않았을 때 기본값 제공
  const safeSettings = {
    admin: {
      objectCreationPosition: settings?.admin?.objectCreationPosition ?? { x: 200, y: 200 },
      defaultBoxWidth: settings?.admin?.defaultBoxWidth ?? 200,
      defaultBoxHeight: settings?.admin?.defaultBoxHeight ?? 60,
      defaultFontSize: settings?.admin?.defaultFontSize ?? 18,
      defaultCheckboxSettings: settings?.admin?.defaultCheckboxSettings ?? {
        checkedColor: '#22c55e',
        uncheckedColor: '#f3f4f6',
        checkedBackgroundColor: '#22c55e',
        uncheckedBackgroundColor: '#f3f4f6',
        checkedBackgroundOpacity: 0.2,
        uncheckedBackgroundOpacity: 0.1
      }
    }
  };

  // 마우스 및 터치 이벤트 처리
  useEffect(() => {
    if (!isDragging && !isResizing) {
      return; // 드래그나 리사이즈 중이 아니면 이벤트 리스너 추가하지 않음
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const newPosition = {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        };
        const constrainedPosition = constrainToViewport(newPosition, size);
        setPosition(constrainedPosition);
      }
      
      if (isResizing) {
        const rect = toolbarRef.current?.getBoundingClientRect();
        if (rect) {
          const newWidth = Math.max(120, e.clientX - rect.left);
          const newHeight = Math.max(80, e.clientY - rect.top);
          const newSize = { width: newWidth, height: newHeight };
          const constrainedPosition = constrainToViewport(position, newSize);
          setSize(newSize);
          setPosition(constrainedPosition);
        }
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (isDragging || isResizing) {
        // 드래그나 리사이즈 종료 시 설정 저장
        saveSettings(position, size);
      }
      setIsDragging(false);
      setIsResizing(false);
      
      // 포인터 캡처 해제
      if (toolbarRef.current) {
        try {
          toolbarRef.current.releasePointerCapture(e.pointerId);
        } catch (error) {
          // 포인터 캡처 해제 실패는 무시
        }
      }
    };

    // 포인터 이벤트 리스너 추가 (포인터 캡처와 일관성 유지)
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      // cleanup - 추가된 이벤트 리스너만 제거
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, isResizing, dragOffset]);

  // 윈도우 리사이즈 시 위치 조정
  useEffect(() => {
    const handleWindowResize = () => {
      const constrainedPosition = constrainToViewport(position, size);
      if (constrainedPosition.x !== position.x || constrainedPosition.y !== position.y) {
        setPosition(constrainedPosition);
        saveSettings(constrainedPosition, size);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [position, size, showColorPalette, showSizeAdjuster]);

  // 툴바 리사이즈/내용 변화 자동 보정
  useEffect(() => {
    if (!toolbarRef.current) return;
    const ro = new ResizeObserver(() => {
      const constrainedPosition = constrainToViewport(position, size);
      if (constrainedPosition.x !== position.x || constrainedPosition.y !== position.y) {
        setPosition(constrainedPosition);
        saveSettings(constrainedPosition, size);
      }
    });
    ro.observe(toolbarRef.current);
    return () => ro.disconnect();
  }, [position, size, showColorPalette, showSizeAdjuster]);

  // 외부 클릭 시 확장 패널 닫기
  useEffect(() => {
    const onDocPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!toolbarRef.current) return;
      if (!toolbarRef.current.contains(target)) {
        setShowColorPalette(false);
        setShowSizeAdjuster(false);
      }
    };
    document.addEventListener('pointerdown', onDocPointerDown);
    return () => document.removeEventListener('pointerdown', onDocPointerDown);
  }, []);

  // 통합 포인터 툴바 드래그 핸들러 (iPhone/iPad Safari 호환)
  const handleToolbarPointerDown = (e: React.PointerEvent) => {
    // 버튼이나 리사이즈 핸들이 아닌 경우에만 드래그 시작
    const target = e.target as HTMLElement;
    if (
      target.closest('button') ||
      target.closest('.resize-handle') ||
      target.closest('input') ||
      target.classList.contains('no-drag')
    ) {
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    
    // 포인터 캡처로 드래그 중 포인터가 벗어나도 추적 가능
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (error) {
      // 포인터 캡처 실패는 무시 (일부 브라우저에서 지원하지 않음)
    }
    
    const rect = toolbarRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    
    if (import.meta.env.DEV) {
      console.log(`🔧 Floating Toolbar drag started with ${e.pointerType}`);
    }
  };

  // 통합 포인터 리사이즈 핸들러 (iPhone/iPad Safari 호환)
  const handleResizePointerStart = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    
    // 포인터 캡처로 리사이즈 중 포인터가 벗어나도 추적 가능
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (error) {
      // 포인터 캡처 실패는 무시 (일부 브라우저에서 지원하지 않음)
    }
    
    if (import.meta.env.DEV) {
      console.log(`🔧 Floating Toolbar resize started with ${e.pointerType}`);
    }
  };

  const handleToolChange = (tool: Tool) => {
    setCurrentTool(tool);
    if (tool !== 'pen') {
      setShowColorPalette(false);
      setShowSizeAdjuster(false);
    }
  };

  const handleCheckboxCreate = async () => {
    // admin 설정된 위치 사용
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
      hasCheckbox: true,
      checkboxChecked: false,
      checkboxCheckedColor: checkedColor,
      checkboxUncheckedColor: uncheckedColor,
      checkedBackgroundColor: checkedBackgroundColor,
      uncheckedBackgroundColor: uncheckedBackgroundColor,
      checkedBackgroundOpacity: checkedBackgroundOpacity,
      uncheckedBackgroundOpacity: uncheckedBackgroundOpacity,
      boxStyle: {
        backgroundColor: '#ffffff',
        backgroundOpacity: 1,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8, // 라운딩 처리 추가
      },
      fontSize: safeSettings.admin.defaultFontSize,
      textStyle: {
        color: '#000000',
        fontFamily: 'Arial, sans-serif',
        bold: false,
        italic: false,
        horizontalAlign: 'left',
        verticalAlign: 'middle'
      },
      permissions: {
        movable: true,
        resizable: true,
        deletable: true
      },
      zIndex: Date.now(),
      locked: false,
      visible: true,
      opacity: 1,
      isEditing: true,
      lastModified: Date.now()
    };

    try {
      // 체크박스 생성하고 새로 생성된 ID 받기
      const newObjectId = await addTextObject(newCheckboxObject);
      
      // 새로 생성된 체크박스 자동 선택
      setSelectedObjectId(newObjectId);
      
      // 가상 키보드 활성화 (약간의 지연 후)
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('activateVirtualKeyboard', {
          detail: { objectId: newObjectId }
        }));
      }, 100);
      
      if (import.meta.env.DEV) {
        console.log(`✅ 체크박스 생성 및 선택 완료: ${newObjectId}`);
      }
    } catch (error) {
      console.error('❌ 체크박스 생성 실패:', error);
    }
  };

  const handleColorSelect = (color: string) => {
    setPenColor(color);
    setShowColorPalette(false);
  };

  // 토글 핸들러는 인라인에서 구현하여 미사용 경고 제거

  // 3x3 그리드에 맞춘 동적 버튼/아이콘 크기 계산
  const layoutPadding = 8; // p-2
  const layoutGap = 8; // gap-2
  const { buttonSize, iconSize, minW, minH } = useMemo(() => {
    const gridCols = 3;
    const gridRows = 3;
    const availableW = Math.max(0, size.width - layoutPadding * 2 - layoutGap * (gridCols - 1));
    const availableH = Math.max(0, size.height - layoutPadding * 2 - layoutGap * (gridRows - 1));
    const rawButton = Math.floor(Math.min(availableW / gridCols, availableH / gridRows));
    const clampedButton = Math.max(36, Math.min(72, rawButton || 36));
    const computedIcon = Math.floor(clampedButton * 0.72);
    const minW = layoutPadding * 2 + gridCols * clampedButton + layoutGap * (gridCols - 1);
    const minH = layoutPadding * 2 + gridRows * clampedButton + layoutGap * (gridRows - 1);
    return { buttonSize: clampedButton, iconSize: computedIcon, minW, minH };
  }, [size.width, size.height]);

  return (
    <div
      ref={toolbarRef}
      data-floating-toolbar="true"
      className="fixed bg-white bg-opacity-95 rounded-lg shadow-2xl border border-gray-300 select-none cursor-move"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: 9999,
        minWidth: minW,
        minHeight: minH,
        touchAction: 'none' // iOS Safari에서 터치 스크롤 방지
      }}
      onPointerDown={handleToolbarPointerDown}
      onClick={(e) => e.stopPropagation()}
    >
      {/* 툴바 내용 */}
      <div className="p-2 h-full flex flex-col">
        {/* 3x3 고정 그리드 */}
        <div className="grid grid-cols-3 gap-2" style={{ minHeight: buttonSize * 3 }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToolChange('select');
            }}
            className={`rounded transition-all duration-200 flex items-center justify-center ${
              currentTool === 'select' 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ width: buttonSize, height: buttonSize }}
            title="선택 도구"
          >
            <HandPointing size={iconSize * 0.8} weight="duotone" color="#302929" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToolChange('pen');
            }}
            className={`rounded transition-all duration-200 flex items-center justify-center ${
              currentTool === 'pen' 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ width: buttonSize, height: buttonSize }}
            title="필기 도구"
          >
            <Pencil size={iconSize * 0.8} weight="duotone" color="#302929" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToolChange('eraser');
            }}
            className={`rounded transition-all duration-200 flex items-center justify-center ${
              currentTool === 'eraser' 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ width: buttonSize, height: buttonSize }}
            title="지우개"
          >
            <Eraser size={iconSize * 0.8} weight="duotone" color="#302929" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCheckboxCreate();
            }}
            className="rounded transition-all duration-200 flex items-center justify-center bg-green-500 text-white hover:bg-green-600 shadow-md"
            style={{ width: buttonSize, height: buttonSize }}
            title="체크박스 추가"
          >
            <CheckSquare size={iconSize * 0.8} weight="duotone" color="#302929" />
          </button>

          {/* Undo/Redo 버튼들 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              executeUndo();
            }}
            disabled={!canUndo}
            className={`rounded transition-all duration-200 flex items-center justify-center ${
              canUndo 
                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={{ width: buttonSize, height: buttonSize }}
            title="되돌리기"
          >
            <ArrowCounterClockwise size={iconSize * 0.8} weight="duotone" color="#302929" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              executeRedo();
            }}
            disabled={!canRedo}
            className={`rounded transition-all duration-200 flex items-center justify-center ${
              canRedo 
                ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-md' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={{ width: buttonSize, height: buttonSize }}
            title="다시 실행"
          >
            <ArrowClockwise size={iconSize * 0.8} weight="duotone" color="#302929" />
          </button>

          {/* 창맞춤 버튼 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              fitToWindow();
            }}
            className="rounded transition-all duration-200 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 shadow-md"
            style={{ width: buttonSize, height: buttonSize }}
            title="창맞춤"
          >
            <House size={iconSize * 0.8} weight="duotone" color="#302929" />
          </button>

          {/* 8: Color Picker */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowColorPalette((v) => !v);
              setShowSizeAdjuster(false);
            }}
            className="rounded border flex items-center justify-center bg-white hover:bg-gray-50"
            style={{ width: buttonSize, height: buttonSize }}
            title="색상 선택"
          >
            <Palette size={iconSize * 0.9} weight="duotone" color="#302929" />
          </button>

          {/* 9: Size Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowSizeAdjuster((v) => !v);
              setShowColorPalette(false);
            }}
            className="rounded border flex items-center justify-center bg-white hover:bg-gray-50"
            style={{ width: buttonSize, height: buttonSize }}
            title="크기 조절"
          >
            <Circle size={iconSize * 0.9} weight="duotone" color="#302929" />
          </button>
        </div>

        {/* 확장 영역: 색상 팔레트 */}
        {showColorPalette && (
          <div className="mt-2 p-2 bg-gray-50 rounded border">
            <div className="flex flex-wrap gap-2 justify-center">
              {['#000000', '#ff0000', '#00a854', '#1d4ed8', '#ff9900', '#ffff00', '#ffffff', '#7c3aed'].map((color) => (
                <button
                  key={color}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleColorSelect(color);
                  }}
                  className="rounded border-2 hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: color,
                    borderColor: penColor === color ? '#000' : '#ccc',
                    width: 24,
                    height: 24
                  }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* 확장 영역: 크기 슬라이더 */}
        {showSizeAdjuster && (
          <div className="mt-2 p-2 bg-gray-50 rounded border flex items-center gap-3">
            <span className="text-xs text-slate-600">굵기</span>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={penWidth}
              onChange={(e) => setPenWidth(Number(e.target.value))}
              className="w-40 no-drag"
            />
            <span className="text-xs font-mono w-6 text-right">{penWidth}</span>
          </div>
        )}
      </div>

      {/* 리사이즈 핸들 */}
      <div
        className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        style={{
          touchAction: 'none' // iOS Safari에서 터치 스크롤 방지
        }}
        onPointerDown={handleResizePointerStart}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-gray-400"></div>
      </div>
    </div>
  );
};

export default ViewFloatingToolbar; 