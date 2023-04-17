import { Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Suspense } from 'react';

import Header from '@src/components/layout/Header';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import CollectMusicPage from './CollectMusicPage';
import Post from './post';
import SkeletonMainPage from '@src/components/MainPage/SkeletonMainPage';
import SearchPage from '@src/pages/SearchPage';
import SkeletonPost from '@src/components/Post/SkeletonPost';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/view/:id"
          element={
            <Suspense fallback={<SkeletonPost />}>
              <Post />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Suspense fallback={<SkeletonMainPage />}>
                <MainPage />
              </Suspense>
            </>
          }
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/profile/:id"
          element={<ProfilePage />}
        />
        <Route
          path="admincollectmusic"
          element={<CollectMusicPage />}
        />
        <Route
          path="/search"
          element={<SearchPage />}
        />
      </Routes>
    </>
  );
};

export default App;
