import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  UNSAFE_NavigationContext,
  useNavigate,
  NavigationType,
} from 'react-router-dom';

import LoginButton from '@src/components/Common/Button/LoginButton/LoginButton';
import useLoginWithGoogleQuery from '@src/hooks/useLoginWithGoogleQuery';
import Layout from '@src/components/Common/Layout/Layout';
import { History, Update } from 'history';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const navigator = useNavigate();

  const [cookies, setCookie] = useCookies(['uid']);
  const { refetch } = useLoginWithGoogleQuery();

  const onBackButtonEvent = () => {
    window.history.pushState(null, '/mypage', 'mypage');
    navigator('/');
    // navigator('/');
  };

  useEffect(() => {
    window.addEventListener('popstate', onBackButtonEvent);
    return () => {
      //window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, []);

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
    <Layout>
      <div className="flex flex-col items-center w-full h-screen pt-10">
        <h1 className="text-[28px] pb-[20px] mb-10 font-bold">로그인</h1>
        <LoginButton onClick={handleClickLoginButton} />
      </div>
    </Layout>
  );
};

export default LoginPage;
