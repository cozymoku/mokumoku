// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  // 로그인 요청 핸들러
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json();

    // 모의 사용자 데이터
    const MOCK_USER = {
      email: 'user@example.com',
      password: 'password123',
    };

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      // 로그인 성공 시 응답
      return HttpResponse.json(
        { message: 'Login successful', user: { email: MOCK_USER.email } },
        { status: 200 }
      );
    } else {
      // 로그인 실패 시 응답
      return HttpResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  }),

  // 다른 API 핸들러들을 여기에 추가할 수 있습니다.
];