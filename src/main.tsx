// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// 개발 환경에서만 MSW를 시작
async function enableMocking() {
  // `process.env.NODE_ENV` 대신 `import.meta.env.DEV`를 사용하는 것이 Vite 환경에서 권장됩니다.
  // 이전에 `process` 관련 오류가 있었으므로, `import.meta.env.DEV`로 수정했습니다.
  if (import.meta.env.DEV) {
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