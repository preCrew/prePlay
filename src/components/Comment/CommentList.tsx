import usePost from '@src/store/hooks/usePost';
import { TUser } from '@src/store/reducers/user-Slice';
import { useAppSelector } from '@src/store/store';
import React, { useCallback } from 'react';

interface CommetListProps {
  postId: number | string;
  me?: TUser;
}

const CommentList = ({ postId, me }: CommetListProps) => {
  const { posts } = useAppSelector(state => state.post);
  const { deleteComment } = usePost();
  const currentPost = posts?.find(post => post.id === postId);

  const onClickDelete = useCallback(
    (id: number) => () => {
      deleteComment(postId, id);
    },
    [],
  );

  return (
    <ul>
      {currentPost?.Comments?.map(comment => (
        <li className="py-8 border-b border-b-gray1 first:border-t-gray1 first:border-t">
          <div className="flex items-center mb-5">
            <span>{comment.userId}</span>
            {/* <sub className="ml-3 text-gray2">2022.09.10</sub> */}
          </div>
          <p className="overflow-x-hidden text-sm whitespace-nowrap text-ellipsis">
            {comment.content}
          </p>
          <div className="text-right">
            {comment.userId === me!.id && (
              <button
                onClick={onClickDelete(comment.id as number)}
                className="px-3 py-1 text-sm border border-black rounded-basic "
              >
                삭제
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
