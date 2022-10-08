import usePost from '@src/store/hooks/usePost';
import { useAppSelector } from '@src/store/store';
import React, { useCallback, useState } from 'react';

interface CommentProps {
  postId?: number | string;
}

const CommentForm = ({ postId }: CommentProps) => {
  const userId = useAppSelector(state => state.user.id);

  const { addComment } = usePost();
  const [inputValue, setInputValue] = useState('');

  const onChange = useCallback((e: { target: HTMLInputElement }) => {
    setInputValue(e.target.value);
  }, []);

  //임시 댓글 id
  let id = 0;
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      addComment(id, postId!, userId, inputValue);
      id++;
    },
    [inputValue],
  );

  return (
    <div className="px-4 pt-4 pb-8 mb-10 border rounded-basic border-primary1">
      <div className="mb-7">
        <span className="">cdfkjdlfkgjdf@gmail.com</span>
      </div>
      <form
        className="relative"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="댓글을 달아주세요"
          onChange={onChange}
          value={inputValue}
          className="w-[calc(100%-60px)] border-b border-black text-sm pb-1"
        />
        <button className="w-[50px] absolute right-0 bottom-0 bg-[#d2d6f8] text-sm -lg rounded-basic border-primary1 border py-1">
          전송
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
