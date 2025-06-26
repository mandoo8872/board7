import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate
} from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import ViewPage from './pages/ViewPage';

const App: React.FC = () => {
  // 인증 관련 상태 (현재 사용하지 않음)
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [password, setPassword] = useState('');

  // 전역 컨텍스트 메뉴 방지 및 터치 길게 누르기 방지
  useEffect(() => {
    // 컨텍스트 메뉴 방지 (우클릭)
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // 터치 길게 누르기 방지 (모바일)
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        // let touchStartTime = Date.now(); // 현재 사용하지 않음
        let longPressTimer: NodeJS.Timeout;

        const preventLongPress = () => {
          longPressTimer = setTimeout(() => {
            e.preventDefault();
          }, 500); // 500ms 후 길게 누르기 방지
        };

        const clearLongPress = () => {
          if (longPressTimer) {
            clearTimeout(longPressTimer);
          }
          document.removeEventListener('touchend', clearLongPress);
          document.removeEventListener('touchmove', clearLongPress);
        };

        preventLongPress();
        document.addEventListener('touchend', clearLongPress, { once: true });
        document.addEventListener('touchmove', clearLongPress, { once: true });
      }
    };

    // 선택 방지 (텍스트 드래그 선택 방지)
    const handleSelectStart = (e: Event) => {
      // 입력 필드가 아닌 경우에만 방지
      const target = e.target as HTMLElement;
      if (target && !['INPUT', 'TEXTAREA'].includes(target.tagName) && !target.isContentEditable) {
        e.preventDefault();
        return false;
      }
    };

    // 드래그 방지
    const handleDragStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // 이벤트 리스너 등록
    document.addEventListener('contextmenu', handleContextMenu, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('selectstart', handleSelectStart, { passive: false });
    document.addEventListener('dragstart', handleDragStart, { passive: false });

    // cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/" element={<Navigate to="/view" />} />
      </Routes>
    </Router>
  );
};

export default App; 