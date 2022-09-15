import LoginButton from '@src/components/common/Button/LoginButton';
import useLoginWithGoogleQuery from '@src/hooks/useLoginWithGoogleQuery';
import { useCookies } from 'react-cookie';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  const [cookies, setCookie] = useCookies(['uid']);
  const { refetch } = useLoginWithGoogleQuery();

  const handleClickLoginButton = () => {
    if (!cookies.uid) {
      refetch()
        .then(res => {
          setCookie('uid', res.data);
        })
        .catch(e => {
          alert('로그인에 실패하였습니다: ' + e);
        });
    } else {
    }
  };
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="text-[28px] pb-[20px]">LOGIN</span>
        <LoginButton onClick={handleClickLoginButton} />
      </div>
    </>
  );
};

export default LoginPage;
