import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
// import App from './App.jsx';
import App from './components/BlurBlob';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <App />  // No StrictMode, so content won't render twice
);
