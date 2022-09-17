import React from 'react';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const titems = ['Title1', 'Title2', 'Title3'];
  return (
    <div className="grid justify-center w-screen h-full bg-gray-600 gap-x-[27px] gap-y-[30px] grid-cols-auto-fit justify-items-center pr-[48px] pl-[39px]">
      {items.map((item, key) => (
        <>
          <div className="relative m-1 bg-black w-full p-1 h-[327px] rounded-[10px]">
            <div className="absolute top-0 left-0 bg-white w-full h-56 rounded-[10px] ">
              {item}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MainPage;
