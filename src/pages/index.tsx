import { Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Suspense } from 'react';

import Header from '@src/components/Common/Layout/Header';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import CollectMusicPage from './CollectMusicPage';
import Post from './post';
import SkeletonMainPage from '@src/components/MainPage/SkeletonMainPage';
import SearchPage from '@src/pages/SearchPage';
import SkeletonPost from '@src/components/Post/SkeletonPost';
import Mypage from './Mypage';
import Profile from './Mypage/Profile';
import SearchResultPage from './SearchPage/SearchResult';

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
          path="/mypage/:id/*"
          element={<Mypage />}
        />
        <Route
          path="/mypage/:id/edit"
          element={<Profile />}
        />
        <Route
          path="admincollectmusic"
          element={<CollectMusicPage />}
        />
        <Route
          path="/search"
          element={<SearchPage />}
        />
        <Route
          path="/searchresult"
          element={<SearchResultPage />}
        />
      </Routes>
    </>
  );
};

export default App;
