import React from 'react';

const CommentList = () => {
  return (
    <ul>
      <li className="py-8 border-b border-b-gray1 first:border-t-gray1 first:border-t">
        <div className="flex items-center mb-5">
          <span>cdfkjdlfkgjdf@gmail.com</span>
          <sub className="ml-3 text-gray2">2022.09.10</sub>
        </div>
        <p className="text-sm">
          정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여
        </p>
      </li>
    </ul>
  );
};

export default CommentList;
