import { Routes, Route } from 'react-router-dom';
import Header from '@src/components/layout/Header';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import View from './post';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <Routes>
      <Route
        path="/view/:id"
        element={<View />}
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
    </Routes>
  );
};

export default App;
