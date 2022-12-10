import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { index } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={index}>
    <App />
  </Provider>
);
