// src/components/LoginForm.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';

function LoginForm() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login attempt with email:', email);
    // TODO: 여기에 실제 로그인 API 호출 로직 추가 (MSW 사용 시 Mocking)
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked!');
    // TODO: Google OAuth 연동 로직 추가
    alert('Google 로그인 준비 중...');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out"
      >
        Continue
      </button>

      <div className="relative flex items-center justify-center py-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* 소셜 로그인 버튼: Google만 남기고 크기 조정 */}
      <div className="flex justify-center">
        <button
          type="button"
          // 여기를 수정: max-w-[200px]를 제거하고 w-full만 남김
          className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300 ease-in-out w-full"
          onClick={handleGoogleLogin}
        >
          <span className="text-lg mr-2">G</span> {/* Google 로고 아이콘 */}
          Google
        </button>
      </div>
    </form>
  );
}

export default LoginForm;