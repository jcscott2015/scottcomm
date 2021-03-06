import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-oswald';
import './index.css';
import App from './App';
import scrollbarWidth from './blocs/scrollbarWidth';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Set a custom CSS property with the calculated scrollbar width.
document.documentElement.style.setProperty('--scroll-bar-width', `${scrollbarWidth()}px`);

window.addEventListener('resize', () => {
  // Set a custom CSS property with the calculated scrollbar width.
  document.documentElement.style.setProperty('--scroll-bar-width', `${scrollbarWidth()}px`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
