import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@src/components/Common/Layout/Layout';
import FavoritList from '@src/components/Favorite/FavoriteList';
import useIsLogin from '@src/hooks/user/useIsLogin';

const FavoritePage = () => {
  const navigate = useNavigate();
  const me = useIsLogin();

  useEffect(() => {
    if (!me) {
      alert('로그인 해주세요.');
      navigate('/login');
    }
  }, []);

  return <Layout>{me && <FavoritList />}</Layout>;
};

export default FavoritePage;
