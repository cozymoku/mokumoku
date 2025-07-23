import type { ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen flex md:hidden items-center justify-center bg-gray-100 p-4">
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden
                      flex flex-col w-full max-w-sm h-auto px-4 py-8 sm:px-6 sm:py-10"> {/* max-w-sm, px/py 조정 */}

        <div className="absolute top-4 right-4"> {/* SIGN UP 위치도 조정 필요할 수 있음 */}
            <span className="text-sm font-semibold text-purple-600 border border-purple-300 rounded-full px-4 py-1">
              SIGN UP
            </span>
          </div>

        <div className="flex flex-col items-center mb-8 mt-8">
          <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mb-4">
            <span className="text-purple-700 text-3xl font-bold"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">WELCOME!</h1> {/* 텍스트 크기 조정 */}
          <p className="text-center text-xs sm:text-sm leading-relaxed max-w-xs">
            Log in to access your customized mindfulness exercises, track your progress, and unlock new insights into your mental wellbeing.
          </p>
        </div>
        
        {children}

        <div className="mt-8 text-center text-xs text-gray-500">
          By proceeding, you agree to our <a href="#" className="underline text-purple-600">Terms of use</a>.<br/>
          Read our <a href="#" className="underline text-purple-600">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default MobileLayout;