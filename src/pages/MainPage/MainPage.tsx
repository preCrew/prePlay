import React from 'react';
import heartF from '../../assets/heartFlat.png';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const items = [
    {
      title: 'Title1',
      video: 1,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
    {
      title: 'Title2',
      video: 2,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
    {
      title: 'Title3',
      video: 3,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
    {
      title: 'Title4',
      video: 4,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
    {
      title: 'Title5',
      video: 5,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
    {
      title: 'Title6',
      video: 6,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
    {
      title: 'Title7',
      video: 7,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
    {
      title: 'Title8',
      video: 8,
      singer: 'singer1',
      playlist: 'playlist1',
      like: 30,
    },
  ];
  return (
    <div className="grid justify-center w-screen h-full bg-gray-600 gap-x-[27px] gap-y-[30px] grid-cols-auto-fit justify-items-center pr-[48px] pl-[39px]">
      {items.map((item, key) => (
        <>
          <div className="relative m-1 bg-black w-full  h-[327px] rounded-[10px] ">
            <div className=" px-[10px] bg-white w-full h-[212px] rounded-[10px] ">
              {item.video}
            </div>
            <div className=" absolute bottom-0 w-full px-[10px]  h-[115px]">
              <div className=" text-white mt-[10px] font-[Inter]  font-light">
                {item.title}
              </div>
              <div className="flex flex-row flex-no-wrap justify-between  text-white mt-[10px] font-[Inter] font-light">
                {item.singer}
                <div>{item.playlist}</div>
              </div>
              <div className=" text-white mt-[10px]  font-[Inter] font-light">
                <div className="inline-flex w-5">
                  <img
                    src={heartF}
                    alt="heart"
                  ></img>
                  <div className="ml-[6px]">+{item.like}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MainPage;
