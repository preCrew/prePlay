import { useCallback } from 'react';
import { addLikeAction, deleteLikeAction } from '../reducers/post-Slice';
import { useAppDispatch } from '../store';

const usePost = () => {
  const dispatch = useAppDispatch();

  const addLike = useCallback(
    (postId: string | number, userId: string) => {
      dispatch(addLikeAction({ postId, userId }));
    },
    [dispatch],
  );

  const deleteLike = useCallback(
    (postId: string | number, userId: string) => {
      dispatch(deleteLikeAction({ postId, userId }));
    },
    [dispatch],
  );

  return { addLike, deleteLike };
};

export default usePost;
