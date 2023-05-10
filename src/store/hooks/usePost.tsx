import { useCallback } from 'react';
import {
  addLikeAction,
  deleteLikeAction,
  addCommentAction,
  deleteCommentAction,
} from '../reducers/post-Slice';
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

  const addComment = useCallback(
    (id: number, postId: string | number, userId: string, content: string) => {
      dispatch(addCommentAction({ id, postId, userId, content }));
    },
    [dispatch],
  );

  const deleteComment = useCallback(
    (postId: string | number, id: number) => {
      dispatch(deleteCommentAction({ postId, id }));
    },
    [dispatch],
  );

  return { addLike, deleteLike, addComment, deleteComment };
};

export default usePost;
