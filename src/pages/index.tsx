import { Routes, Route } from 'react-router-dom';
import Header from '@src/components/layout/Header';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import View from './post';

const App = () => {

  return (
    <div>
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
      </Routes>
    </div>
  );
};

export default App;
