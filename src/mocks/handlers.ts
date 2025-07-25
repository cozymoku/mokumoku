// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

const MOCK_USER = {
  email: 'user@example.com',
  password: 'password123',
};

// 샘플 성경 구절 데이터 (MSW로 이동)
const MOCK_VERSES = [
  {
    id: 1,
    verse: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도우리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
    reference: "이사야 41:10"
  },
  {
    id: 2,
    verse: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
    reference: "빌립보서 4:13"
  },
  {
    id: 3,
    verse: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라",
    reference: "빌립보서 4:6-7"
  },
  {
    id: 4,
    verse: "여호와는 나의 목자시니 내게 부족함이 없으리로다",
    reference: "시편 23:1"
  },
  {
    id: 5,
    verse: "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며",
    reference: "고린도전서 13:4"
  },
  {
    id: 6,
    verse: "너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라 그리하면 주시리라",
    reference: "야고보서 1:5"
  },
  {
    id: 7,
    verse: "내가 진실로 너희에게 이르노니 무엇이든지 너희가 땅에서 매면 하늘에서도 매일 것이요 무엇이든지 땅에서 풀면 하늘에서도 풀리리라",
    reference: "마태복음 18:18"
  },
  {
    id: 8,
    verse: "너희는 세상의 빛이라 산 위에 있는 동네가 숨겨지지 못할 것이요",
    reference: "마태복음 5:14"
  },
  {
    id: 9,
    verse: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라",
    reference: "마태복음 11:28"
  },
  {
    id: 10,
    verse: "이는 하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라",
    reference: "요한복음 3:16"
  }
];

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

  // 새로운 암송 데이터 GET 핸들러
  http.get('/api/recitations', () => {
    return HttpResponse.json(MOCK_VERSES, { status: 200 });
  }),
];