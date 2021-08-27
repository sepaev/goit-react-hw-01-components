import React from 'react';
import ReactDOM from 'react-dom';
import { HomeButtons } from '../conponents/Home/Home';
export const goHomeClick = e => {
  e.preventDefault();
  ReactDOM.render(
    <React.StrictMode>
      <HomeButtons />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
