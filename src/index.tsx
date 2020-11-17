import './index.css';
import 'normalize.css';
import 'bootstrap-4-grid';

import React from 'react';
import ReactDOM from 'react-dom';
import BattlePage from 'src/components/pages/BattlePage';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BattlePage />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
