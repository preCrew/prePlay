import React from 'react';
import Header from '@src/components/layout/Header';
import MainPage from './MainPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <div>
      <Header />
      {/* <LoginPage /> */}
      <MainPage />
    </div>
  );
};

export default App;
