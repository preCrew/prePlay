import Header from '@src/components/layout/Header';
import LoginPage from './LoginPage';
import { Route, Routes } from 'react-router-dom';
import ViewPage from './ViewPage';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies] = useCookies(['uid']);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={cookies.uid ? <ViewPage /> : <LoginPage />}
        />
      </Routes>
    </>
  );
};

export default App;
