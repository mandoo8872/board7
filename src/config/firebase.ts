import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

// Firebase 설정 인터페이스 (measurementId는 선택적)
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string; // 선택적 속성
}

// 개발환경용 Firebase 설정 (board7-dev)
const developmentConfig: FirebaseConfig = {
  apiKey: "AIzaSyAJIU9ojxqTmqlJAfOZyxDu2DL5GrtzAjM",
  authDomain: "board7-dev.firebaseapp.com",
  databaseURL: "https://board7-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "board7-dev",
  storageBucket: "board7-dev.firebasestorage.app",
  messagingSenderId: "324461926704",
  appId: "1:324461926704:web:35cb2a4d01df21d02450f5"
  // 개발환경에서는 measurementId 없음
};

// 배포환경용 Firebase 설정 (board7-4373c)
const productionConfig: FirebaseConfig = {
  apiKey: "AIzaSyA2Ml7QMBlaUyKZyFu7j83I5Y2eM1COgkc",
  authDomain: "board7-4373c.firebaseapp.com",
  databaseURL: "https://board7-4373c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "board7-4373c",
  storageBucket: "board7-4373c.firebasestorage.app",
  messagingSenderId: "298011654216",
  appId: "1:298011654216:web:084fb0f220aa7be5b4807d"
  // measurementId는 제공되지 않았으므로 제거
};

// 환경에 따른 Firebase 설정 선택
const getFirebaseConfig = (): FirebaseConfig => {
  const isDevelopment = import.meta.env.MODE === 'development';
  
  if (isDevelopment) {
    console.log('🔧 Firebase: 개발환경 (board7-dev) 사용');
    return developmentConfig;
  } else {
    console.log('🚀 Firebase: 배포환경 (board7-4373c) 사용');
    return productionConfig;
  }
};

// 선택된 설정으로 Firebase 초기화
const config = getFirebaseConfig();

// 이미 초기화된 앱이 있으면 재사용
const app = getApps().length === 0 ? initializeApp(config) : getApp();

// Analytics 초기화 (배포환경에서만)
let analytics: any = null;
if (config.measurementId && typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
    console.log('📊 Firebase Analytics 초기화 완료');
  } catch (error) {
    console.warn('⚠️ Firebase Analytics 초기화 실패:', error);
  }
}

// Firebase Realtime Database 초기화
export const database = getDatabase(app);

// Analytics export (배포환경에서만 사용 가능)
export { analytics };

// 현재 환경 정보 export (디버깅용)
export const firebaseEnv = {
  mode: import.meta.env.MODE,
  isDevelopment: import.meta.env.MODE === 'development',
  projectId: config.projectId,
  databaseURL: config.databaseURL
};

console.log(`🔥 Firebase 초기화 완료:`, {
  환경: firebaseEnv.mode,
  프로젝트: firebaseEnv.projectId,
  데이터베이스: firebaseEnv.databaseURL
});

export default app;