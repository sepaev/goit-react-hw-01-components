import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../conponents/App/App';

export const goHomeClick = e => {
  e.preventDefault();
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
