import { useCallback, useEffect, useRef, useState } from 'react';

import useDeleteComment from '@src/hooks/useDeleteComment';
import useGetComment from '@src/hooks/useGetComment';
import useInfinityScroll from '@src/hooks/useInfitityScroll';

interface CommetListProps {
  postId: number | string;
  me?: string;
}

const CommentList = ({ postId, me }: CommetListProps) => {
  const nextpage = useRef<number>(0);
  const {
    data: commentData,
    isLoading: commentLoading,
    fetchNextPage,
  } = useGetComment(postId as string);

  const { mutate } = useDeleteComment();

  const onClickDelete = useCallback(
    (id: string) => () => {
      mutate(id);
    },
    [],
  );

  useInfinityScroll(() => {
    nextpage.current += 10;
    fetchNextPage();
  });

  if (commentLoading) alert('로딩중 입니다.');

  return (
    <>
      <ul>
        {commentData?.pages.map(page =>
          page.map(comment => (
            <li
              className="py-8 border-b border-b-gray1 first:border-t-gray1 first:border-t"
              key={comment.id}
            >
              <div className="flex items-center mb-5">
                <span>{comment?.me}</span>
                {/* <sub className="ml-3 text-gray2">2022.09.10</sub> */}
              </div>
              <p className="overflow-x-hidden text-sm whitespace-nowrap text-ellipsis">
                {comment?.text}
              </p>
              <div className="text-right">
                {comment?.me === me && (
                  <button
                    onClick={onClickDelete(comment.id)}
                    className="px-3 py-1 text-sm border border-black rounded-basic "
                  >
                    삭제
                  </button>
                )}
              </div>
            </li>
          )),
        )}
      </ul>
    </>
  );
};

export default CommentList;
