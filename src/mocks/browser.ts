// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// `handlers`에 정의된 요청 핸들러들을 사용하여 서비스 워커를 설정합니다.
export const worker = setupWorker(...handlers);