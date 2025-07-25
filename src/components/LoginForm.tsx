// src/components/LoginForm.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

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
        login(data.token || 'mock-token');
        navigate('/dashboard');
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
    // 가장 바깥쪽 div에 'space-y-6'을 적용하여 주요 블록 간의 간격을 통일합니다.
    // 기존의 개별적인 mb-나 mt- 클래스는 제거하거나 조정합니다.
    <div className="flex flex-col items-center justify-center min-h-screen-minus-mobile-nav md:min-h-0 md:h-auto md:py-8 space-y-6">
      
      {/* Welcome section (md 이상에서만 보임) */}
      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center mb-3">
          <span className="text-purple-700 text-2xl font-bold"></span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">WELCOME!</h1>
        <p className="text-center text-xs leading-relaxed max-w-xs px-2">
          {/* 이전의 p 태그에 있던 mb-6은 제거합니다. space-y-6이 이 요소를 h2와 분리합니다. */}
          Log in to access your customized mindfulness exercises, track your progress, and unlock new insights into your mental wellbeing.
        </p>
      </div>

      {/* "로그인" 제목 */}
      {/* 이전의 h2 태그에 있던 mb-6은 제거합니다. space-y-6이 이 요소를 폼과 분리합니다. */}
      <h2 className="text-3xl font-bold text-gray-800">로그인</h2>
      
      {/* 로그인 폼 */}
      {/* 폼 자체에는 mb나 mt를 적용하지 않고, 내부 요소들의 간격만 조정합니다. */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4"> {/* 이메일 입력 필드와 비밀번호 입력 필드 사이 간격 */}
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6"> {/* 비밀번호 입력 필드와 로그인 버튼 사이 간격 */}
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            disabled={loading}
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </div>
      </form>

      {/* 구분자 */}
      {/* 이전에 적용했던 mb-4나 mt-4는 제거합니다. space-y-6이 상단 간격을 처리합니다. */}
      <div className="relative flex items-center justify-center py-3 w-full max-w-sm">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-3 text-gray-400 text-xs">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google 로그인 버튼 */}
      {/* 이전에 적용했던 mt-4는 제거합니다. space-y-6이 상단 간격을 처리합니다. */}
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-sm"
        disabled={loading}
      >
        Google 로그인
      </button>
    </div>
  );
}

export default LoginForm;