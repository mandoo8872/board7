import React, { useEffect } from 'react';
import Canvas from '../components/Canvas';
import FloatingToolbar from '../components/toolbar/FloatingToolbar';
import VirtualKeyboard from '../components/keyboard/VirtualKeyboard';
import DrawToolSettings from '../components/toolbar/DrawToolSettings';
import { useAdminConfigStore } from '../store/adminConfigStore';

const ViewPage: React.FC = () => {
  const { initializeFirebaseListeners, settings } = useAdminConfigStore();

  // 설정이 로드되지 않았을 때 기본값 제공
  const virtualKeyboardEnabled = settings?.view?.virtualKeyboardEnabled ?? true;

  useEffect(() => {
    // ViewPage에서도 Firebase 리스너 초기화
    initializeFirebaseListeners();
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      const { cleanupFirebaseListeners } = useAdminConfigStore.getState();
      cleanupFirebaseListeners();
    };
  }, [initializeFirebaseListeners]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-white relative">
      {/* 메인 캔버스 영역 */}
      <main className="w-full h-full">
        <Canvas isViewPage={true} />
      </main>
      
      {/* 플로팅 툴바 (T/T 생성용) */}
      <FloatingToolbar />
      
      {/* 필기/지우개 도구 설정 */}
      <DrawToolSettings />
      
      {/* 가상 키보드 (설정에 따라 표시) */}
      {virtualKeyboardEnabled && <VirtualKeyboard />}
    </div>
  );
};

export default ViewPage; 