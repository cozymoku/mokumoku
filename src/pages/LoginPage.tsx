import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import LoginForm from '../components/LoginForm'; // LoginForm을 여기서 직접 렌더링

function LoginPage() {
  return (
    <>
      {/* 데스크톱 레이아웃은 md 이상에서 보이고, 그 외에는 숨겨집니다. */}
      <DesktopLayout>
        <LoginForm />
      </DesktopLayout>

      {/* 모바일 레이아웃은 md 미만에서 보이고, md 이상에서는 숨겨집니다. */}
      <MobileLayout>
        <LoginForm />
      </MobileLayout>
    </>
  );
}

export default LoginPage;