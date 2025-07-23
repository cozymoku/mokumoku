// src/layouts/MobileLayout.tsx
import type { ReactNode } from 'react'; // 'type' 키워드 사용으로 오류 해결

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen flex md:hidden items-center justify-center bg-gray-100 p-2"> {/* 전체 화면 패딩을 p-4에서 p-2로 더 줄임 */}
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden
                      flex flex-col w-full max-w-sm h-auto px-5 py-6"> {/* px-6 py-8에서 px-5 py-6으로 조정 */}

        <div className="absolute top-3 right-3"> {/* top-4 right-4에서 top-3 right-3으로 조정 */}
            <span className="text-sm font-semibold text-purple-600 border border-purple-300 rounded-full px-3 py-0.5"> {/* px-4 py-1에서 px-3 py-0.5로 조정 */}
              SIGN UP
            </span>
          </div>

        <div className="flex flex-col items-center mb-4 mt-5"> {/* mb-6 mt-6에서 mb-4 mt-5로 조정 */}
          <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center mb-3"> {/* w-16 h-16에서 w-14 h-14로, mb-4에서 mb-3으로 조정 */}
            <span className="text-purple-700 text-2xl font-bold"></span> {/* text-3xl에서 text-2xl로 조정 */}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">WELCOME!</h1> {/* text-3xl에서 text-2xl로, mb-2에서 mb-1로 조정 */}
          <p className="text-center text-xs leading-relaxed max-w-xs px-2">
            Log in to access your customized mindfulness exercises, track your progress, and unlock new insights into your mental wellbeing.
          </p>
        </div>
        
        {children}

        <div className="mt-4 text-center text-xs text-gray-500"> {/* mt-6에서 mt-4로 조정 */}
            By proceeding, you agree to our <a href="#" className="underline text-purple-600">Terms of use</a>.<br/>
            Read our <a href="#" className="underline text-purple-600">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default MobileLayout;