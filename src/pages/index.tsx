import { Routes, Route } from 'react-router-dom';
import Header from '@src/components/layout/Header';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import ViewPage from './ViewPage';
import { useCookies } from 'react-cookie';
import ProfilePage from './ProfilePage';
import CollectMusicPage from './CollectMusicPage';
import Post from './post';

const App = () => {
  const [cookies] = useCookies(['uid']);

  return (
    <>
      <Routes>
        <Route
          path="/view/:id"
          element={<Post />}
        />
        <Route
          path="/"
          element={
            <>
              <Header /> <MainPage />
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
      </Routes>
    </>
  );
};

export default App;
