import LoginButton from '@src/components/Common/Button/LoginButton/LoginButton';
import useLoginWithGoogleQuery from '@src/hooks/useLoginWithGoogleQuery';
import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const navigator = useNavigate();
  const [cookies, setCookie] = useCookies(['uid']);
  const { refetch } = useLoginWithGoogleQuery();

  useEffect(() => {
    // 로그인한적 없으면 로그인
    if (cookies.uid) {
      navigator(-1);
    }
  }, []);
  const handleClickLoginButton = async () => {
    try {
      const user = await refetch();
      user.data && setCookie('uid', user.data.uid);
      navigator(-1);
    } catch (e) {
      throw new Error('로그인 실패' + e);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span className="text-[28px] pb-[20px]">LOGIN</span>
        <LoginButton onClick={handleClickLoginButton} />
      </div>
    </>
  );
};

export default LoginPage;
