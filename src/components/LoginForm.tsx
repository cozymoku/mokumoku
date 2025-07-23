// src/components/LoginForm.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태 추가

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // 로딩 시작

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // HTTP 상태 코드가 200-299 범위인 경우
        const data = await response.json();
        console.log('Login successful:', data);
        alert('로그인 성공!');
        // 실제 애플리케이션에서는 로그인 후 페이지 이동 등의 로직을 추가합니다.
      } else {
        // HTTP 상태 코드가 200-299 범위가 아닌 경우 (예: 401 Unauthorized)
        const errorData = await response.json();
        setError(errorData.message || '로그인 실패: 알 수 없는 오류');
        console.error('Login failed:', errorData);
      }
    } catch (err) {
      // 네트워크 오류 등 예외 발생 시
      setError('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Network error during login:', err);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked!');
    alert('Google 로그인 준비 중...');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col space-y-4 mx-auto">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading} // 로딩 중일 때 입력 비활성화
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading} // 로딩 중일 때 입력 비활성화
      />

      {error && (
        <p className="text-red-500 text-xs text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2.5 rounded-lg transition duration-300 ease-in-out text-sm"
        disabled={loading} // 로딩 중일 때 버튼 비활성화
      >
        {loading ? '로그인 중...' : 'Login'} {/* 로딩 텍스트 추가 */}
      </button>

      <div className="relative flex items-center justify-center py-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-3 text-gray-400 text-xs">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center mt-3">
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300 ease-in-out w-full text-sm"
          onClick={handleGoogleLogin}
          disabled={loading} // 로딩 중일 때 버튼 비활성화
        >
          <span className="text-lg mr-2">G</span>
          Google
        </button>
      </div>

      <div className="text-center mt-3">
        <a href="#" className="text-xs text-purple-600 hover:underline">
          Forgot password?
        </a>
      </div>
    </form>
  );
}

export default LoginForm;