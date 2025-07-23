// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MobileLayout from './layouts/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

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
      <AuthProvider> {/* AuthProvider로 전체 애플리케이션 감싸기 */}
        <Routes>
          {/* 로그인 페이지: MobileLayout과 DesktopLayout으로 감싸서 렌더링 */}
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

          {/* 인증이 필요한 페이지들: ProtectedRoute로 보호하고 AuthenticatedLayout으로 감싸서 렌더링 */}
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

          <Route path="/settings" element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <Settings />
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