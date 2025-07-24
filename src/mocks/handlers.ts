// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

const MOCK_USER = {
  email: 'user@example.com',
  password: 'password123',
};

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json();

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      return HttpResponse.json(
        { message: 'Login successful', user: { email: MOCK_USER.email }, token: 'a-mock-jwt-token-for-user' },
        { status: 200 }
      );
    } else {
      return HttpResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  }),
];