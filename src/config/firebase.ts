import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// 환경 설정 가져오기 (기본값을 development로 설정)
const isProduction = import.meta.env.VITE_APP_ENV === "production" || import.meta.env.PROD;

const config = isProduction
  ? {
      apiKey: "AIzaSyA2Ml7QMBlaUyKZyFu7j83I5Y2eM1COgkc",
      authDomain: "board7-4373c.firebaseapp.com",
      databaseURL: "https://board7-4373c-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "board7-4373c",
      storageBucket: "board7-4373c.firebasestorage.app",
      messagingSenderId: "298011654216",
      appId: "1:298011654216:web:084fb0f220aa7be5b4807d"
    }
  : {
      apiKey: "AIzaSyAJIU9ojxqTmqlJAfOZyxDu2DL5GrtzAjM",
      authDomain: "board7-dev.firebaseapp.com",
      databaseURL: "https://board7-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "board7-dev",
      storageBucket: "board7-dev.firebasestorage.app",
      messagingSenderId: "324461926704",
      appId: "1:324461926704:web:35cb2a4d01df21d02450f5"
    };

// 이미 초기화된 앱이 있으면 재사용
const app = getApps().length === 0 ? initializeApp(config) : getApp();

// Firebase 서비스 초기화 (Realtime Database만 사용)
export const database = getDatabase(app);

export default app; 