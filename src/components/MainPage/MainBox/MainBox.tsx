import { Link } from 'react-router-dom';

import { TSongLists } from '@src/hooks/useGetSongListsQuery';
import Heart from '@src/components/Common/Button/Heart/Heart';
import useGetLikeNum from '@src/hooks/post/useGetLikeNum';
import { useEffect } from 'react';

interface MainBoxProps {
  item: TSongLists;
}

const MainBox = ({ item }: MainBoxProps) => {
  const { data: likeNum, refetch } = useGetLikeNum(item.id);

  useEffect(() => {
    refetch();
  }, [likeNum]);

  return (
    <>
      <Link
        to={`/view/${item.id}`}
        state={{ ...item }}
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
                  <Heart postId={item.id} />
                  <div className="ml-[6px]">+{likeNum}</div>
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
