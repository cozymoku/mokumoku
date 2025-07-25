// src/components/RecitationCardBackground.tsx
import React, { useMemo } from 'react';

// 블롭 색상 세트 (AnimatedBlobBackground와 동일하게 유지)
const BLOB_COLOR_SETS = [
  ['bg-purple-300', 'bg-pink-300', 'bg-orange-300'],
  ['bg-blue-300', 'bg-green-300', 'bg-yellow-300'],
  ['bg-red-300', 'bg-indigo-300', 'bg-teal-300'],
  ['bg-cyan-300', 'bg-rose-300', 'bg-lime-300'],
  ['bg-teal-300', 'bg-emerald-300', 'bg-blue-200'],
  ['bg-yellow-100', 'bg-red-200', 'bg-purple-100'],
  ['bg-[#f2f2f2]', 'bg-[#abcdef]', 'bg-[#123456]'], // HEX 코드 사용 예시
];

// 블롭 크기 (카드 내부에 적합한 더 작은 크기)
const BLOB_SIZES = ['w-16 h-16', 'w-20 h-20', 'w-24 h-24', 'w-28 h-28'];

// 블롭 위치 (카드 내부에서 너무 벗어나지 않도록 조정)
const BLOB_POSITIONS = [
  'top-0 left-0', 'top-0 right-0',
  'bottom-0 left-0', 'bottom-0 right-0',
  'top-1/4 left-1/4', 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'bottom-1/4 right-1/4',
];

// 랜덤 보더 라디우스 생성 함수 (AnimatedBlobBackground와 동일)
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

function RecitationCardBackground() {
  const randomBlobs = useMemo(() => {
    // 각 카드에 1개에서 3개 사이의 블롭
    const numBlobs = Math.floor(Math.random() * 3) + 1;
    const selectedColorSet = BLOB_COLOR_SETS.at(Math.floor(Math.random() * BLOB_COLOR_SETS.length))!;
    const blobs = [];

    for (let i = 0; i < numBlobs; i++) {
      const randomColor = selectedColorSet.at(i % selectedColorSet.length)!;
      const randomSize = BLOB_SIZES.at(Math.floor(Math.random() * BLOB_SIZES.length))!;
      const randomPosition = BLOB_POSITIONS.at(Math.floor(Math.random() * BLOB_POSITIONS.length))!;
      const randomDelay = `${Math.floor(Math.random() * 3000)}ms`; // 0~3초 지연
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
    <div className="absolute bg-gradient-to-br from-purple-100 via-blue-100 to-orange-100 inset-0 overflow-hidden rounded-xl">
      {randomBlobs.map((blob, index) => (
        <div
          key={index}
          // opacity를 10%~30%로 조정하여 더욱 미묘하게
          className={`absolute mix-blend-multiply filter blur-xl opacity-70 animate-blob ${blob.color} ${blob.size} ${blob.position}`}
          style={{ animationDelay: blob.delay, borderRadius: blob.borderRadius }}
        ></div>
      ))}
      {/* 가장 위에 투명한 그라데이션 오버레이를 추가하여 블롭 효과를 부드럽게 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-50"></div>
    </div>
  );
}

export default RecitationCardBackground;