import React, { FormEvent, useCallback, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

import { useAppSelector } from '@src/store/store';
import MyActivityList from '@src/components/Mypage/MyActivityList';
import useProfile from '@src/hooks/user/useProfile';
import Profile from './Profile';

const Mypage = () => {
  const { id } = useParams();
  const { data } = useProfile(); //메인에서 불러와야함 (로그인 했을때)
  const { nickname, email } = useAppSelector(state => state.user);
  console.log(nickname);
  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-center text-white border-2 border-black rounded-full w-50 h-50 bg-primary1">
          {nickname[0]}
        </div>
        <h2 className="relative mt-2">
          {nickname}{' '}
          <Link
            to={`edit`}
            className="absolute right-0 p-1 text-xs text-gray-500 border border-black rounded-lg"
          >
            {' '}
            닉네임 수정
          </Link>
        </h2>
        <sub className="bottom-0 text-xs text-gray-500">{email}</sub>

        <section className="mt-10">
          <h4 className="text-xs text-gray-500">내 활동</h4>
          <MyActivityList />
        </section>
      </div>
    </>
  );
};

export default Mypage;
