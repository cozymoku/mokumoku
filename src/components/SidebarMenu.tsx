// src/components/SidebarMenu.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function SidebarMenu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-full p-4">
      <div className="text-xl font-bold mb-8">내 서비스</div>
      <nav className="flex-grow">
        <ul>
          <li className="mb-2">
            <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-700">
              대시보드
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="block p-2 rounded hover:bg-gray-700">
              프로필
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/recitation" className="block p-2 rounded hover:bg-gray-700"> {/* 경로 및 텍스트 변경 */}
              암송
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        로그아웃
      </button>
    </div>
  );
}

export default SidebarMenu;