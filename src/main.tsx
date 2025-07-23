// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// 개발 환경에서만 MSW를 시작
async function enableMocking() {
  if (process.env.NODE_ENV === 'development') { // `process`는 Vite 환경에서 직접 사용 가능
    const { worker } = await import('./mocks/browser');
    return worker.start({
      onUnhandledRequest: 'bypass', // 정의되지 않은 요청은 실제 네트워크로 통과시킵니다.
    });
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});