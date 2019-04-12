import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from './app/AppContainer';
import { store } from './store/store';

import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement,
);
