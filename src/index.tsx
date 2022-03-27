import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const element = <div className="test">Hello</div>;
ReactDOM.render(
  // element,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
