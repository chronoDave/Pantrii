import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux';
import { App } from './modules';

import './scss/index.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
