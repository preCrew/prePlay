interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <button
      onClick={onClick}
      className=" rounded border-[0.5px] border-grey shadow-md border-b-[1px]
                pl-[6px] pr-[6px] pt-[5px] pb-[5px] 
                flex justify-around items-center 
                font-[Roboto] text-[#898989]
                hover:bg-[#4285F4] hover:text-white"
    >
      <img
        className="w-[18px] mr-[18px]"
        src="./src/assets/images/google.png"
      />
      <span>Sign in with Google</span>
    </button>
  );
};

export default LoginButton;
