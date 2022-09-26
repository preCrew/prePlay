import { Route, Routes, Link } from 'react-router-dom';
import Header from '@src/components/layout/Header';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import View from './post';

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <MainPage />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/view"
          element={<View />}
        />
      </Routes>

      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
