// src/components/AnimatedBlobBackground.tsx
import React, { useMemo } from 'react';

// 블롭 색상 세트 (기존과 동일하게 유지)
const BLOB_COLOR_SETS = [
  ['bg-purple-300', 'bg-pink-300', 'bg-orange-300'],
  ['bg-blue-300', 'bg-green-300', 'bg-yellow-300'],
  ['bg-red-300', 'bg-indigo-300', 'bg-teal-300'],
  ['bg-cyan-300', 'bg-rose-300', 'bg-lime-300'],
  ['bg-teal-300', 'bg-emerald-300', 'bg-blue-200'],
  ['bg-yellow-100', 'bg-red-200', 'bg-purple-100'],
  ['bg-[#f2f2f2]', 'bg-[#abcdef]', 'bg-[#123456]'], // HEX 코드 사용 예시
];

// 블롭 크기 (현재는 RecitationCardBackground와 공유하지만, 필요에 따라 더 크게 설정 가능)
// 로그인 배경용이라면, BLOB_SIZES를 더 크게 조정할 수 있습니다.
const BLOB_SIZES = ['w-32 h-32', 'w-48 h-48', 'w-64 h-64', 'w-80 h-80', 'w-96 h-96', 'w-1/4 h-1/4'];


// 블롭 위치 (화면 전체에 걸쳐 넓게 퍼지도록 조정)
const BLOB_POSITIONS = [
  'top-0 left-0', 'top-0 right-0',
  'bottom-0 left-0', 'bottom-0 right-0',
  'top-1/4 left-1/4', 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'bottom-1/4 right-1/4',
  'top-1/3 left-2/3', 'bottom-2/3 right-1/3',
  'top-2/5 left-1/5', 'bottom-1/5 right-2/5',
];


// 랜덤 보더 라디우스 생성 함수 (기존과 동일)
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

interface AnimatedBlobBackgroundProps {
  className?: string; // 외부에서 클래스를 받아 추가할 수 있도록 함
}

function AnimatedBlobBackground({ className }: AnimatedBlobBackgroundProps) {
  const randomBlobs = useMemo(() => {
    const numBlobs = Math.floor(Math.random() * 5) + 3; // 3개에서 7개 사이의 블롭
    const selectedColorSet = BLOB_COLOR_SETS[Math.floor(Math.random() * BLOB_COLOR_SETS.length)];
    const blobs = [];

    for (let i = 0; i < numBlobs; i++) {
      const randomColor = selectedColorSet[i % selectedColorSet.length];
      const randomSize = BLOB_SIZES[Math.floor(Math.random() * BLOB_SIZES.length)];
      const randomPosition = BLOB_POSITIONS[Math.floor(Math.random() * BLOB_POSITIONS.length)];
      const randomDelay = `${Math.floor(Math.random() * 5000)}ms`; // 0~5초 지연
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
    // 이 div의 className에서 너비와 높이를 'w-full h-full'로 변경합니다.
    // 이렇게 하면 부모 컨테이너의 크기 (DesktopLayout에서 지정한 w-1/2 h-full)를 따르게 됩니다.
    <div className={`relative w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 overflow-hidden ${className || ''}`}>
      {randomBlobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute mix-blend-multiply filter blur-xl opacity-20 animate-blob ${blob.color} ${blob.size} ${blob.position}`}
          style={{ animationDelay: blob.delay, borderRadius: blob.borderRadius }}
        ></div>
      ))}
    </div>
  );
}

export default AnimatedBlobBackground;