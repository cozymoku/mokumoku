// src/components/MobileBottomNav.tsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // NavLink를 사용하여 활성 상태 강조
import { useAuth } from '../contexts/AuthContext';

function MobileBottomNav() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-lg z-50">
      <nav className="flex justify-around items-center h-16 text-xs font-semibold text-gray-600">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center p-2 rounded-md transition-colors duration-200
            ${isActive ? 'text-purple-600' : 'hover:text-purple-500'}`
          }
        >
          <span className="text-xl">📊</span> {/* 아이콘 (이모지 또는 실제 아이콘 폰트/라이브러리 사용) */}
          대시보드
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center p-2 rounded-md transition-colors duration-200
            ${isActive ? 'text-purple-600' : 'hover:text-purple-500'}`
          }
        >
          <span className="text-xl">👤</span>
          프로필
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center p-2 rounded-md transition-colors duration-200
            ${isActive ? 'text-purple-600' : 'hover:text-purple-500'}`
          }
        >
          <span className="text-xl">⚙️</span>
          설정
        </NavLink>
        <button
          onClick={handleLogout}
          className="flex flex-col items-center justify-center p-2 rounded-md text-red-500 hover:text-red-700 transition-colors duration-200"
        >
          <span className="text-xl">🚪</span>
          로그아웃
        </button>
      </nav>
    </div>
  );
}

export default MobileBottomNav;