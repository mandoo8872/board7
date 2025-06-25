import React from 'react';
import Canvas from '../components/Canvas';
import { default as Toolbar } from '../components/toolbar/Toolbar';
import ZoomControls from '../components/zoom/ZoomControls';
import DrawToolSettings from '../components/toolbar/DrawToolSettings';

const AdminPage: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-50 flex">
      {/* 왼쪽 툴바 */}
      <div className="w-64 h-full bg-white shadow-lg">
        <Toolbar />
      </div>
      
      {/* 메인 캔버스 영역 - 나머지 공간 전체 사용 */}
      <main className="flex-1 h-full bg-gray-200 relative">
        {/* 테스트용 간단한 박스 - TailwindCSS 클래스 사용 */}
        <div className="absolute top-12 left-72 w-48 h-36 bg-red-500 border-4 border-black flex items-center justify-center text-white text-base font-bold">
          TailwindCSS 테스트
        </div>
        
        <Canvas isViewPage={false} />
        
        {/* 필기/지우개 도구 설정 */}
        <DrawToolSettings />
      </main>
      
      {/* 확대/축소 컨트롤 */}
      <ZoomControls />
    </div>
  );
};

export default AdminPage; 