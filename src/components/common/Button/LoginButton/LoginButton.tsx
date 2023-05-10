interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-11/12 p-3 border border-gray-200 rounded-3xl"
    >
      <img
        className="w-[18px] mr-[18px]"
        src="./src/assets/images/google.png"
      />
      <span>구글로 로그인 하기</span>
    </button>
  );
};

export default LoginButton;
