import LoginButton from '@src/components/common/Button/LoginButton';

interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="text-[28px] pb-[20px]">LOGIN</span>
        <LoginButton />
      </div>
    </>
  );
};

export default LoginPage;
