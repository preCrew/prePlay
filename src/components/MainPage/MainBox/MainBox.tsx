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
        <div className="relative m-1 w-full rounded-[10px] border-gray-300 shadow-md">
          {/* 썸네일 공간 */}
          <div className="object-cover w-full">
            <img
              src={item.thumnail}
              className="w-full h-full rounded-[10px]"
            />
          </div>
          {/* 아래공간 */}
          <div className="text-black font-medium absolute bottom-0 w-full px-[10px] h-[115px]">
            {/* 타이틀 */}
            <div className="mt-[10px] font-[Inter]  font-light h-50  text-ellipsis overflow-hidden line-clamp-2">
              {item.title}
            </div>
            {/* 좋아요 */}
            <div className="mt-[10px]  font-[Inter] font-light">
              <div className="flex w-20 h-20">
                <Heart post={item} />
                <div className="ml-[6px]">+{likeNum}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MainBox;
