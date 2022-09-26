import { Route, Routes, Link } from 'react-router-dom';
import Header from '@src/components/layout/Header';
import LoginPage from './LoginPage';
import View from './post';

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/view"
          element={<View />}
        />
      </Routes>
      <Link to="/view">
        <button>임시 상세페이지</button>
      </Link>
      <Header />
      <LoginPage />
    </div>
  );
};

export default App;
