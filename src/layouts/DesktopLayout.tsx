// src/layouts/DesktopLayout.tsx
import React, { useMemo } from 'react'; // React 임포트 (아직 사용하지 않아도 일단 유지)
import type { ReactNode } from 'react'; // 'type' 키워드 사용으로 오류 해결

interface DesktopLayoutProps {
  children: ReactNode;
}

const BLOB_COLOR_SETS = [
  ['bg-purple-300', 'bg-pink-300', 'bg-orange-300'],
  ['bg-blue-300', 'bg-green-300', 'bg-yellow-300'],
  ['bg-red-300', 'bg-indigo-300', 'bg-teal-300'],
  ['bg-cyan-300', 'bg-rose-300', 'bg-lime-300'],
  ['bg-teal-300', 'bg-emerald-300', 'bg-blue-200'],
  ['bg-yellow-100', 'bg-red-200', 'bg-purple-100'],
  ['bg-[#f2f2f2]', 'bg-[#abcdef]', 'bg-[#123456]'], // HEX 코드 사용 예시
];

const BLOB_SIZES = ['w-48 h-48', 'w-56 h-56', 'w-64 h-64', 'w-72 h-72'];
const BLOB_POSITIONS = [
  'top-0 left-0', 'top-0 right-0',
  'bottom-0 left-0', 'bottom-0 right-0',
  'top-1/4 left-1/4', 'top-1/2 left-1/2',
  'bottom-1/4 right-1/4', 'bottom-1/2 right-1/2',
  'top-1/3 left-1/3', 'bottom-1/3 right-1/3',
  '-top-12 -left-12',
  '-bottom-12 -right-12',
  'top-1/2 left-1/4 -translate-y-1/2',
  'bottom-1/2 right-1/4 translate-y-1/2',
  'top-1/4 right-0', 'bottom-0 left-1/3',
];

const getRandomBorderRadius = () => {
  const r1 = Math.floor(Math.random() * 100);
  const r2 = Math.floor(Math.random() * 100);
  const r3 = Math.floor(Math.random() * 100);
  const r4 = Math.floor(Math.random() * 100);
  const r5 = Math.floor(Math.random() * 100);
  const r6 = Math.floor(Math.random() * 100);
  const r7 = Math.floor(Math.random() * 100);
  const r8 = Math.floor(Math.random() * 100);
  return `${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%`;
};

function DesktopLayout({ children }: DesktopLayoutProps) {
  const randomBlobs = useMemo(() => {
    const numBlobs = Math.floor(Math.random() * 3) + 2;
    const selectedColorSet = BLOB_COLOR_SETS.at(Math.floor(Math.random() * BLOB_COLOR_SETS.length))!;
    const blobs = [];

    for (let i = 0; i < numBlobs; i++) {
      const randomColor = selectedColorSet.at(i % selectedColorSet.length)!;
      const randomSize = BLOB_SIZES.at(Math.floor(Math.random() * BLOB_SIZES.length))!;
      const randomPosition = BLOB_POSITIONS.at(Math.floor(Math.random() * BLOB_POSITIONS.length))!;
      const randomDelay = `${Math.floor(Math.random() * 4000)}ms`;
      const randomBorderRadius = getRandomBorderRadius();

      blobs.push({
        color: randomColor,
        size: randomSize,
        position: randomPosition,
        delay: randomDelay,
        borderRadius: randomBorderRadius,
      });
    }
    return blobs;
  }, []);

  return (
    <div className="min-h-screen hidden md:flex items-center justify-center bg-gray-100 p-4">
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden
                      flex flex-row w-full max-w-4xl min-h-[580px] max-h-[90vh]"> {/* h-[600px] 대신 min-h 및 max-h 사용, 높이 조정 */}

        {/* Left Section: Login Form Container */}
        <div className="w-1/2 p-8 flex flex-col items-center justify-between"> {/* padding p-12에서 p-8로 줄임, justify-between 추가 */}
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

        {/* Right Section: Decorative Background */}
        <div className="w-1/2 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100
                        items-center justify-center relative overflow-hidden rounded-r-3xl">
          {randomBlobs.map((blob, index) => (
            <div
              key={index}
              className={`absolute mix-blend-multiply filter blur-xl opacity-70 animate-blob ${blob.color} ${blob.size} ${blob.position}`}
              style={{ animationDelay: blob.delay, borderRadius: blob.borderRadius }}
            ></div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white-200/50 to-transparent opacity-30"></div>
        </div>

      </div>
    </div>
  );
}

export default DesktopLayout;