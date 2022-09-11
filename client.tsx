import * as React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { store } from '@src/store/store';
import App from '@src/pages/';
import '@src/assets/font.css';
import '@src/styles/global.css';

const container = document.querySelector('#root');

createRoot(container!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
