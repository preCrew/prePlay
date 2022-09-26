import React from 'react';

const CommentForm = () => {
  return (
    <div className="px-4 pt-4 pb-8 mb-10 border rounded-basic border-primary1">
      <div className="mb-7">
        <span className="">cdfkjdlfkgjdf@gmail.com</span>
      </div>
      <form className="relative">
        <input
          type="text"
          placeholder="댓글을 달아주세요"
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
