// src/components/LoginForm.tsx
import { useState } from 'react';
import type { FormEvent } from 'react'; // 'type' 키워드 사용으로 오류 해결
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>(''); // password 상태 추가
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        login(data.token || 'mock-token'); // 토큰이 있다면 사용, 없다면 모의 토큰
        navigate('/dashboard'); // 대시보드 페이지로 이동
      } else {
        const errorData = await response.json();
        setError(errorData.message || '이메일 또는 비밀번호가 올바르지 않습니다.');
        console.error('Login failed:', errorData);
      }
    } catch (err) {
      setError('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Network error during login:', err);
    } finally {
      setLoading(false);
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
        disabled={loading}
      />
      <input // password 필드 추가
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />

      {error && (
        <p className="text-red-500 text-xs text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2.5 rounded-lg transition duration-300 ease-in-out text-sm"
        disabled={loading}
      >
        {loading ? '로그인 중...' : 'Login'}
      </button>

      <div className="relative flex items-center justify-center py-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-3 text-gray-400 text-xs">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center mt-3"> {/* 단일 Google 로그인 버튼으로 변경 */}
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300 ease-in-out w-full text-sm"
          onClick={handleGoogleLogin}
          disabled={loading}
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