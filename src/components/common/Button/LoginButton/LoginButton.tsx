import { FcGoogle } from 'react-icons/fc';

interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-11/12 p-3 border border-gray-200 rounded-3xl"
    >
      <FcGoogle fontSize="25px" />
      <span className="ml-2">구글로 로그인 하기</span>
    </button>
  );
};

export default LoginButton;
