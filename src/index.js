import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import rootReducer from './store/root-reducer';
import './assets/scss/index.scss';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat()
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
