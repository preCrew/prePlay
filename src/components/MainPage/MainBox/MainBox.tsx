import { TSongLists } from '@src/hooks/useGetSongListsQuery';
import { Link } from 'react-router-dom';
import heartF from '@src/assets/heartFlat.png';

interface MainBoxProps {
  item: TSongLists;
}

const MainBox = ({ item }: MainBoxProps) => {
  return (
    <>
      <Link
        to={`/view/${item.id}`}
        state={{ id: item.id }}
        className="w-full h-full"
        key={item.id}
      >
        <div>
          <div className="relative m-1 bg-black w-full  h-[327px] rounded-[10px] ">
            {/* 썸네일 공간 */}
            <div className=" p-1 bg-white w-full h-[212px] rounded-[10px] object-cover">
              <img
                src={item.thumnail}
                className="w-full h-full rounded-[10px]"
              />
            </div>
            {/* 아래공간 */}
            <div className=" absolute bottom-0 w-full px-[10px]  h-[115px]">
              {/* 타이틀 */}
              <div className=" text-white mt-[10px] font-[Inter]  font-light h-50  text-ellipsis overflow-hidden line-clamp-2">
                {item.title}
              </div>
              {/* 좋아요 */}
              <div className=" text-white mt-[10px]  font-[Inter] font-light">
                <div className="flex w-20 h-20">
                  <img
                    src={heartF}
                    alt="heart"
                  ></img>
                  <div className="ml-[6px]">+{1}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MainBox;
