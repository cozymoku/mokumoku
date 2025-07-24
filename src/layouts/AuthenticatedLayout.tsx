// src/layouts/AuthenticatedLayout.tsx
import React, { ReactNode } from 'react';
import SidebarMenu from '../components/SidebarMenu';
import MobileBottomNav from '../components/MobileBottomNav';

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 데스크톱 사이드바 메뉴 (md 이상에서만 보임) */}
      <div className="hidden md:flex flex-col h-full z-40">
        <SidebarMenu />
      </div>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8"> {/* 모바일 하단 메뉴 공간 확보를 위해 pb-20 추가 */}
        {children}
      </main>

      {/* 모바일 하단 메뉴 (md 미만에서만 보임) */}
      <MobileBottomNav />
    </div>
  );
}

export default AuthenticatedLayout;