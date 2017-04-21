import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/app';
import AppRoute from '../containers/app-route';

ReactDOM.render(
  <App>
    <AppRoute />
  </App>,
  document.getElementById('app')
);
