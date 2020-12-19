import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './default.scss';

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter
    basename="/RFGeCommerce">
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);