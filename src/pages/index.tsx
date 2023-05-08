import { Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Suspense } from 'react';

import MainPage from './MainPage';
import LoginPage from './LoginPage';
import CollectMusicPage from './CollectMusicPage';
import Post from './PostPage/Post';
import SearchPage from '@src/pages/SearchPage';
import SkeletonPost from '@src/components/Post/SkeletonPost';
import Profile from './Mypage/Profile';
import SearchResultPage from './SearchPage/SearchResult';
import Mypage from './Mypage';
import SkeletonMainList from './MainPage/Skeleton/SkeletonMainList';
import FavoritePage from './FevoritePage/FavoritePage';

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
              <Suspense fallback={<SkeletonMainList />}>
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
          path="/favorite"
          element={
            <Suspense fallback={<SkeletonMainList />}>
              <FavoritePage />
            </Suspense>
          }
        />
        <Route
          path="/mypage"
          element={<Mypage />}
        />
        <Route
          path="/mypage/edit"
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
          element={
            <Suspense fallback={<SkeletonMainList />}>
              <SearchResultPage />{' '}
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
