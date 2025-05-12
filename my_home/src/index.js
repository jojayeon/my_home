// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // App을 제대로 import 했는지 확인
import './styles/index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);