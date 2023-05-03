import Layout from '@src/components/Common/Layout/Layout';
import useIsLogin from '@src/hooks/user/useIsLogin';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FavoritePage = () => {
  const navigate = useNavigate();
  const me = useIsLogin();

  useEffect(() => {
    if (!me) {
      alert('로그인 해주세요.');
      navigate('/login');
    }
  }, []);

  return <Layout></Layout>;
};

export default FavoritePage;
