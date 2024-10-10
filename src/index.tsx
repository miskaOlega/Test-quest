import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './Main/main';
import './style.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Main />
    </Provider>
  </React.StrictMode>
);
