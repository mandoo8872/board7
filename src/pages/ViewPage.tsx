import React, { useEffect } from 'react';
import Canvas from '../components/Canvas';
import FloatingToolbar from '../components/toolbar/FloatingToolbar';
import VirtualKeyboard from '../components/keyboard/VirtualKeyboard';
import DrawToolSettings from '../components/toolbar/DrawToolSettings';
import { useAdminConfigStore } from '../store/adminConfigStore';

const ViewPage: React.FC = () => {
  const { initializeFirebaseListeners } = useAdminConfigStore();

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
      
      {/* 가상 키보드 (필요시 표시) */}
      <VirtualKeyboard />
    </div>
  );
};

export default ViewPage; 