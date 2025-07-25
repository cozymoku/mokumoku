// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MobileLayout from './layouts/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
// import Settings from './pages/Settings'; // Settings 대신 Recitation을 사용하므로 주석 처리하거나 제거
import Recitation from './pages/Recitation'; // Recitation 컴포넌트 임포트

// 보호된 라우트 컴포넌트
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* 로그인 페이지 */}
          <Route path="/" element={
            <>
              <MobileLayout>
                <LoginForm />
              </MobileLayout>
              <DesktopLayout>
                <LoginForm />
              </DesktopLayout>
            </>
          } />

          {/* 인증이 필요한 페이지들 */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Dashboard />
              </AuthenticatedLayout>
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Profile />
              </AuthenticatedLayout>
            </ProtectedRoute>
          } />

          {/* 암송 메뉴 추가 */}
          <Route path="/recitation" element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Recitation />
              </AuthenticatedLayout>
            </ProtectedRoute>
          } />

          {/* 정의되지 않은 모든 경로를 로그인 페이지로 리다이렉트 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;