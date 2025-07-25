// src/layouts/MobileLayout.tsx
import type { ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen flex md:hidden items-center justify-center bg-gray-100 p-2">
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden bg-gray-100
                      flex flex-col w-full max-w-sm h-auto px-5 py-6">

        <div className="absolute top-3 right-3">
            <span className="text-sm font-semibold text-purple-600 border border-purple-300 rounded-full px-3 py-0.5">
              SIGN UP
            </span>
          </div>

        <div className="flex flex-col items-center mb-4 mt-5">
          <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center mb-3">
            <span className="text-purple-700 text-2xl font-bold"></span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">WELCOME!</h1>
          <p className="text-center text-xs leading-relaxed max-w-xs px-2">
            Log in to access your customized mindfulness exercises, track your progress, and unlock new insights into your mental wellbeing.
          </p>
        </div>
        
        {children}

        <div className="mt-4 text-center text-xs text-gray-500">
            By proceeding, you agree to our <a href="#" className="underline text-purple-600">Terms of use</a>.<br/>
            Read our <a href="#" className="underline text-purple-600">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default MobileLayout;