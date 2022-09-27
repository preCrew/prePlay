import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from '@src/components/layout/Header';
import LoginPage from './LoginPage';
import View from './post';
import { useAppSelector } from '@src/store/store';

const App = () => {
  const { posts } = useAppSelector(state => state.post);
  const testPostId = posts[0].id;

  return (
    <div>
      <Routes>
        <Route
          path="/view/:id"
          element={<View />}
        />
      </Routes>
      <Link to={`/view/${testPostId}`}>
        <button>임시 상세페이지</button>
      </Link>
      <Header />
      <LoginPage />
    </div>
  );
};

export default App;
