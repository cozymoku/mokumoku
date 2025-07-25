// src/pages/Recitation.tsx
import React, { useEffect, useState } from 'react';
import RecitationCardBackground from '../components/RecitationCardBackground';
import RecitationCardModal from '../components/RecitationCardModal';

// 구절 데이터 타입 정의
interface BibleVerse {
  id: number;
  verse: string;
  reference: string;
}

function Recitation() {
  const [verses, setVerses] = useState<BibleVerse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // 선택된 구절을 저장할 상태 (모달에 표시될 구절)
  const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/recitations');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BibleVerse[] = await response.json();
        setVerses(data);
      } catch (err) {
        console.error("Failed to fetch recitations:", err);
        setError("암송 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchVerses();
  }, []);

  // 카드 더블클릭 핸들러
  const handleCardDoubleClick = (verse: BibleVerse) => {
    setSelectedVerse(verse);
  };

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setSelectedVerse(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-600">데이터를 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (verses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-600">
        <p className="mb-4">아직 암송할 말씀이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">암송</h1>

      <div className="
        grid gap-6
        grid-cols-1
        md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
        lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        justify-items-center
      ">
        {verses.map((item) => (
          <div
            key={item.id}
            onDoubleClick={() => handleCardDoubleClick(item)}
            className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between
                       transition-transform transform hover:scale-105 hover:shadow-xl
                       border border-gray-100 overflow-hidden cursor-pointer
                       w-full min-h-[280px]
                       md:h-[360px]
                       lg:h-[400px]
                       "
          >
            <RecitationCardBackground />
            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* 성경 구절(verse) 대신 참조(reference)만 표시 */}
              <div className="flex-grow flex items-center justify-center text-center"> {/* 중앙 정렬 및 공간 채우기 */}
                <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-tight">
                  {item.reference}
                </p>
              </div>
              {/* 하단에 작은 글씨로 verse의 첫 부분 또는 짧은 요약 (선택 사항) */}
              <div className="text-center text-gray-500 text-sm mt-4">
                {item.verse.substring(0, 30)}... {/* 말씀의 첫 30자만 미리보기 */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* selectedVerse가 있을 때만 RecitationCardModal 렌더링 */}
      {selectedVerse && (
        <RecitationCardModal verse={selectedVerse} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Recitation;