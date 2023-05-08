import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from '@src/store/store';
import MyActivityList from '@src/components/Mypage/MyActivityList';
import useIsLogin from '@src/hooks/user/useIsLogin';
import useProfile from '@src/hooks/user/useProfile';
import Layout from '@src/components/Common/Layout/Layout';

const Mypage = () => {
  const me = useIsLogin();
  const navigate = useNavigate();
  const { data, refetch: refetchProfile } = useProfile();

  useEffect(() => {
    if (!me) {
      alert('로그인 해주세요.');
      navigate('/login');
    } else {
      refetchProfile();
    }
  }, []);

  const { nickname, email } = useAppSelector(state => state.user);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Mypage;
