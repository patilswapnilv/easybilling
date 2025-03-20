import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/App.css';

// Render the App component into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
