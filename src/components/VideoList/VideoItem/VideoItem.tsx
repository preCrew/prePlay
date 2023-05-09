import React from 'react';
import { Link } from 'react-router-dom';

import { TSongLists } from '@src/hooks/useGetSongListsQuery';
import Heart from '@src/components/Common/Button/Heart/Heart';
import useGetLikeNum from '@src/hooks/post/useGetLikeNum';
import { useEffect } from 'react';

interface IVideoItemProps {
  item: TSongLists;
}

const VideoItem = ({ item }: IVideoItemProps) => {
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
        <div className="relative w-full rounded-[10px] border-gray-300 shadow-md">
          <figure className="object-cover w-full">
            <img
              src={item.thumnail}
              className="w-full h-full rounded-[10px]"
            />
            <figcaption className="text-black px-4 font-medium mt-[10px] h-50  text-ellipsis overflow-hidden line-clamp-2">
              {item.title}
            </figcaption>
          </figure>
          <div className="flex px-4 pb-6 mt-4 item-center">
            <Heart post={item} />
            <span className="ml-2">+</span>
            {likeNum}
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoItem;
