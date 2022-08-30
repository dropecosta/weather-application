import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ThemeContext from './utils/ThemeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContext>
    <React.StrictMode>
      <App id='app' />
    </React.StrictMode>
  </ThemeContext>
);
