// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 초기 로그인 상태를 localStorage에서 확인
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const token = localStorage.getItem('userToken');
    return !!token; // 토큰이 있으면 true, 없으면 false
  });

  // 로그인 함수: 토큰을 localStorage에 저장하고 상태 업데이트
  const login = (token: string) => {
    localStorage.setItem('userToken', token); // 토큰 저장
    setIsLoggedIn(true);
    console.log('User logged in with token:', token);
  };

  // 로그아웃 함수: localStorage에서 토큰 제거하고 상태 업데이트
  const logout = () => {
    localStorage.removeItem('userToken'); // 토큰 제거
    setIsLoggedIn(false);
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};