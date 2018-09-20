import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers';

import App from './App';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'));
