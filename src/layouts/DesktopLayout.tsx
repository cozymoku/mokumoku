import { useMemo } from 'react';
import type { ReactNode } from 'react';

interface DesktopLayoutProps {
  children: ReactNode;
}

// 배경 blob의 가능한 색상 조합 정의
const BLOB_COLOR_SETS = [
  ['bg-purple-300', 'bg-pink-300', 'bg-orange-300'],
  ['bg-blue-300', 'bg-green-300', 'bg-yellow-300'],
  ['bg-red-300', 'bg-indigo-300', 'bg-teal-300'],
  ['bg-cyan-300', 'bg-rose-300', 'bg-lime-300'],
  // 이전에 추가하셨던 조합들도 여기에 유지됩니다.
  ['bg-teal-300', 'bg-emerald-300', 'bg-blue-200'],
  ['bg-yellow-100', 'bg-red-200', 'bg-purple-100'],
];

// 가능한 blob 크기 정의 (크기도 무작위로 다양하게)
const BLOB_SIZES = ['w-56 h-56', 'w-64 h-64', 'w-72 h-72', 'w-80 h-80', 'w-96 h-96']; // 크기 옵션 추가

// 가능한 blob 위치 정의 (더 다양하게 추가 가능)
const BLOB_POSITIONS = [
  'top-0 left-0', 'top-1/4 left-1/4', 'top-1/2 left-1/2',
  'bottom-0 right-0', 'bottom-1/4 right-1/4', 'bottom-1/2 right-1/2',
  'top-1/3 left-1/3', 'bottom-1/3 right-1/3',
  '-top-16 -left-16',
  '-bottom-16 -right-16',
  'top-1/2 left-1/4 -translate-y-1/2',
  'bottom-1/2 right-1/4 translate-y-1/2',
  'top-1/4 right-0', 'bottom-0 left-1/3', // 추가 위치 옵션
];

// 무작위 border-radius 생성 함수 (더 다양한 불규칙 모양을 위해 8개의 독립적인 값 사용)
const getRandomBorderRadius = () => {
  const r1 = Math.floor(Math.random() * 100);
  const r2 = Math.floor(Math.random() * 100);
  const r3 = Math.floor(Math.random() * 100);
  const r4 = Math.floor(Math.random() * 100);
  const r5 = Math.floor(Math.random() * 100);
  const r6 = Math.floor(Math.random() * 100);
  const r7 = Math.floor(Math.random() * 100);
  const r8 = Math.floor(Math.random() * 100);
  // CSS border-radius 속성의 'X% Y% Z% W% / A% B% C% D%' 형태를 사용하여 복잡한 타원형 정의
  return `${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%`;
};

function DesktopLayout({ children }: DesktopLayoutProps) {
  // 컴포넌트가 마운트될 때 한 번만 무작위 값을 생성하도록 useMemo 사용
  const randomBlobs = useMemo(() => {
    const numBlobs = Math.floor(Math.random() * 3) + 2; // 2개에서 4개 사이의 blob 선택 (최대 개수 3 -> 4로 늘림)
    const selectedColorSet = BLOB_COLOR_SETS.at(Math.floor(Math.random() * BLOB_COLOR_SETS.length))!;
    const blobs = [];

    // 각 blob에 무작위 속성 할당
    for (let i = 0; i < numBlobs; i++) {
      const randomColor = selectedColorSet.at(i % selectedColorSet.length)!;
      const randomSize = BLOB_SIZES.at(Math.floor(Math.random() * BLOB_SIZES.length))!;
      const randomPosition = BLOB_POSITIONS.at(Math.floor(Math.random() * BLOB_POSITIONS.length))!;
      const randomDelay = `${Math.floor(Math.random() * 4000)}ms`; // 0ms ~ 3999ms 지연
      const randomBorderRadius = getRandomBorderRadius(); // 무작위 border-radius 생성

      blobs.push({
        color: randomColor,
        size: randomSize,
        position: randomPosition,
        delay: randomDelay,
        borderRadius: randomBorderRadius, // borderRadius 속성 추가
      });
    }
    return blobs;
  }, []); // 빈 의존성 배열로 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className="min-h-screen hidden md:flex items-center justify-center bg-gray-100 p-4">
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden
                      flex flex-row w-full max-w-4xl h-[600px]">

        {/* Left Section: Login Form Container (변경 없음) */}
        <div className="w-1/2 p-12 flex flex-col justify-center items-center">
          <div className="self-end mb-4">
            <span className="text-sm font-semibold text-purple-600 border border-purple-300 rounded-full px-4 py-1">
              SIGN UP
            </span>
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mb-4">
              <span className="text-purple-700 text-3xl font-bold"></span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">WELCOME!</h1>
            <p className="text-center text-gray-600 text-sm leading-relaxed max-w-xs">
              Log in to access your customized mindfulness exercises, track your progress, and unlock new insights into your mental wellbeing.
            </p>
          </div>
          
          {children}

          <div className="mt-8 text-center text-xs text-gray-500">
            By proceeding, you agree to our <a href="#" className="underline text-purple-600">Terms of use</a>.<br/>
            Read our <a href="#" className="underline text-purple-600">Privacy Policy</a>
          </div>
        </div>

        {/* Right Section: Decorative Background */}
        <div className="w-1/2 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100
                        items-center justify-center relative overflow-hidden rounded-r-3xl">
          {/* 동적으로 생성된 blob들을 렌더링 */}
          {randomBlobs.map((blob, index) => (
            <div
              key={index} // 고유한 key 부여
              // rounded-full 클래스 제거, border-radius는 style 속성으로 직접 적용
              className={`absolute mix-blend-multiply filter blur-xl opacity-70 animate-blob ${blob.color} ${blob.size} ${blob.position}`}
              style={{ animationDelay: blob.delay, borderRadius: blob.borderRadius }} // 인라인 스타일로 애니메이션 딜레이와 border-radius 적용
            ></div>
          ))}
          {/* 오버레이는 유지하여 배경 그라데이션 위에 블렌딩 효과 추가 */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white-200/50 to-transparent opacity-30"></div>
        </div>

      </div>
    </div>
  );
}

export default DesktopLayout;