import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../containers/app';
import Login from '../containers/login';

// Disable 'no-undef' rule for this export because it's required from server, which uses nodeJs
// eslint-disable-next-line no-undef
module.exports = ReactDOMServer.renderToString(
  <App>
    <Login />
  </App>
);
