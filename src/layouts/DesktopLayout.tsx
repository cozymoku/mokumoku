// src/layouts/DesktopLayout.tsx
import React from 'react';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground';

function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    // 전체 화면 컨테이너: 가로 방향으로 아이템 배치, 세로 중앙 정렬, 우측으로 아이템 밀기
    <div className="hidden md:flex flex-row items-center justify-end h-screen w-full overflow-hidden">
      
      {/* 로그인 폼 컨테이너 (좌측 절반):
        absolute left-0를 사용하여 부모의 좌측에 고정 배치합니다.
        z-10으로 AnimatedBlobBackground 위에 오도록 합니다.
      */}
      <div className="flex items-center justify-center w-1/2 h-full p-8 absolute left-0">
        <div className="relative z-10 bg-white p-8 rounded-lg w-full max-w-md">
          {children} {/* LoginForm이 여기에 렌더링됩니다. */}
        </div>
      </div>

      {/* AnimatedBlobBackground 영역 (우측 절반):
        w-1/2 h-full로 우측 절반을 차지하도록 합니다.
        AnimatedBlobBackground 컴포넌트 자체는 이 부모 div의 크기에 맞춰집니다.
      */}
      <div className="w-1/2 h-full">
        <AnimatedBlobBackground className="h-full" /> {/* AnimatedBlobBackground를 우측에 배치 */}
      </div>

    </div>
  );
}

export default DesktopLayout;