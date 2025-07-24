// src/layouts/DesktopLayout.tsx
import React from 'react'; // useMemo는 AnimatedBlobBackground로 이동했으므로 제거
import type { ReactNode } from 'react';
import AnimatedBlobBackground from '../components/AnimatedBlobBackground'; // 새로 만든 컴포넌트 임포트

interface DesktopLayoutProps {
  children: ReactNode;
}

function DesktopLayout({ children }: DesktopLayoutProps) {
  // randomBlobs 관련 로직은 AnimatedBlobBackground로 이동했으므로 제거

  return (
    <div className="min-h-screen hidden md:flex items-center justify-center bg-gray-100 p-4">
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden
                      flex flex-row w-full max-w-4xl min-h-[580px] max-h-[90vh]">

        {/* Left Section: Login Form Container */}
        <div className="w-1/2 p-8 flex flex-col items-center justify-between">
          <div className="self-end mb-4">
            <span className="text-sm font-semibold text-purple-600 border border-purple-300 rounded-full px-4 py-1">
              SIGN UP
            </span>
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mb-4">
              <span className="text-purple-700 text-3xl font-bold"></span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">WELCOME!</h1>
            <p className="text-center text-gray-600 text-sm leading-relaxed max-w-xs mb-4">
              Log in to access your customized mindfulness exercises, track your progress, and unlock new insights into your mental wellbeing.
            </p>
          </div>
          
          {children}

          <div className="mt-6 text-center text-xs text-gray-500">
            By proceeding, you agree to our <a href="#" className="underline text-purple-600">Terms of use</a>.<br/>
            Read our <a href="#" className="underline text-purple-600">Privacy Policy</a>
          </div>
        </div>

        {/* Right Section: Decorative Background (분리된 컴포넌트 사용) */}
        <AnimatedBlobBackground /> {/* 여기서 AnimatedBlobBackground 컴포넌트를 렌더링 */}

      </div>
    </div>
  );
}

export default DesktopLayout;