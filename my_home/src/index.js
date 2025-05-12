// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // App을 제대로 import 했는지 확인
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);