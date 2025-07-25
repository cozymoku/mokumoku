// src/components/RecitationCardModal.tsx
import React, { useEffect, useCallback } from 'react';

interface BibleVerse {
  id: number;
  verse: string;
  reference: string;
}

interface RecitationCardModalProps {
  verse: BibleVerse; // 표시할 성경 구절 데이터
  onClose: () => void; // 모달을 닫는 함수
}

function RecitationCardModal({ verse, onClose }: RecitationCardModalProps) {
  // ESC 키를 눌렀을 때 모달 닫기
  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    // 모달이 열릴 때 스크롤 방지
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // 모달이 닫힐 때 스크롤 복원
      document.body.style.overflow = 'unset';
    };
  }, [handleEscKey]);

  if (!verse) {
    return null; // verse가 없으면 렌더링하지 않음
  }

  return (
    // 모달 오버레이 (반투명 배경)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      // 여기를 수정합니다: bg-black bg-opacity-70 대신 직접 rgba 색상 사용
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // 검정색에 70% 불투명도
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      {/* 모달 내용 컨테이너 */}
      <div
        className="relative bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto
                   transform transition-all duration-300 ease-out scale-95 opacity-0 sm:scale-100 sm:opacity-100"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 배경 클릭 이벤트 방지
        style={{ animation: 'scaleIn 0.3s forwards' }} // 간단한 등장 애니메이션
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* 성경 구절 내용 */}
        <div className="flex flex-col h-full">
          <p className="text-gray-900 text-xl md:text-2xl leading-relaxed mb-6 whitespace-pre-wrap">
            "{verse.verse}"
          </p>
          <div className="text-right text-gray-600 text-base md:text-lg font-semibold mt-auto">
            - {verse.reference}
          </div>
        </div>
      </div>

      {/* 간단한 CSS 애니메이션 정의 (RecitationCardModal에 직접 정의) */}
      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default RecitationCardModal;