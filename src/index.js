import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={App} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'));
