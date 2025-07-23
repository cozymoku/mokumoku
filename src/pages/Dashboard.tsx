// src/pages/Dashboard.tsx
import React from 'react';

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">환영합니다! 대시보드입니다.</h2>
      <p className="text-gray-700 mb-6">여기에서 서비스의 주요 내용을 확인하고 관리할 수 있습니다.</p>
    </div>
  );
}

export default Dashboard;