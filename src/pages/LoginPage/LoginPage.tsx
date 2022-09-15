interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="text-[28px] pb-[20px]">LOGIN</span>
        <button
          className=" rounded border-[0.5px] border-grey shadow-md border-b-[1px]
                      pl-[6px] pr-[6px] pt-[5px] pb-[5px] 
                      flex justify-around items-center 
                      font-[Roboto] text-[#898989]
                      hover:bg-[#4285F4] hover:text-white"
        >
          <img
            className="w-[18px] mr-[18px]"
            src="https://developers.google.com/static/identity/images/g-logo.png"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </>
  );
};

export default LoginPage;
