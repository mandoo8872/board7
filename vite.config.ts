import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  envPrefix: 'VITE_',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // node_modules의 라이브러리들은 vendor 청크로 분리
          if (id.includes('node_modules')) {
            // React 관련
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // Firebase 관련
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            // React Router 관련
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            // Zustand 관련
            if (id.includes('zustand')) {
              return 'state-vendor';
            }
            // 기타 모든 node_modules는 vendor로
            return 'vendor';
          }
        }
      }
    },
    // 청크 크기 경고 임계값을 1000KB로 조정 (기본 500KB에서 증가)
    chunkSizeWarningLimit: 1000,
    // 소스맵 생성 (프로덕션에서는 false로 설정 가능)
    sourcemap: false,
    // 압축 최적화 (esbuild 사용 - 더 빠름)
    minify: 'esbuild',
    // console.log 및 debugger 제거는 별도 플러그인으로 처리
  }
}); 