import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@src/components/Common/Layout/Layout';
import FavoritList from '@src/components/Favorite/FavoriteList';
import useIsLogin from '@src/hooks/user/useIsLogin';
import MainLayout from '@src/components/MainPage/MainLayout/MainLayout';

const FavoritePage = () => {
  const navigate = useNavigate();
  const me = useIsLogin();

  useEffect(() => {
    if (!me) {
      alert('로그인 해주세요.');
      navigate('/login');
    }
  }, []);

  return <MainLayout>{me && <FavoritList />}</MainLayout>;
};

export default FavoritePage;
