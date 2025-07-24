// src/components/AnimatedBlobBackground.tsx
import React, { useMemo } from 'react';

// 블롭 색상 세트
const BLOB_COLOR_SETS = [
  ['bg-purple-300', 'bg-pink-300', 'bg-orange-300'],
  ['bg-blue-300', 'bg-green-300', 'bg-yellow-300'],
  ['bg-red-300', 'bg-indigo-300', 'bg-teal-300'],
  ['bg-cyan-300', 'bg-rose-300', 'bg-lime-300'],
  ['bg-teal-300', 'bg-emerald-300', 'bg-blue-200'],
  ['bg-yellow-100', 'bg-red-200', 'bg-purple-100'],
  ['bg-[#f2f2f2]', 'bg-[#abcdef]', 'bg-[#123456]'], // HEX 코드 사용 예시
];

// 블롭 크기
const BLOB_SIZES = ['w-48 h-48', 'w-56 h-56', 'w-64 h-64', 'w-72 h-72'];

// 블롭 위치
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

// 랜덤 보더 라디우스 생성 함수
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

function AnimatedBlobBackground() {
  const randomBlobs = useMemo(() => {
    const numBlobs = Math.floor(Math.random() * 3) + 2; // 2개에서 4개 사이의 블롭
    const selectedColorSet = BLOB_COLOR_SETS.at(Math.floor(Math.random() * BLOB_COLOR_SETS.length))!;
    const blobs = [];

    for (let i = 0; i < numBlobs; i++) {
      const randomColor = selectedColorSet.at(i % selectedColorSet.length)!;
      const randomSize = BLOB_SIZES.at(Math.floor(Math.random() * BLOB_SIZES.length))!;
      const randomPosition = BLOB_POSITIONS.at(Math.floor(Math.random() * BLOB_POSITIONS.length))!;
      const randomDelay = `${Math.floor(Math.random() * 4000)}ms`; // 0~4초 지연
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
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
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
  );
}

export default AnimatedBlobBackground;