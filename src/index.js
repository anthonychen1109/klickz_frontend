import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers';
import 'semantic-ui-css/semantic.min.css';
import thunk from 'redux-thunk';

import App from './App';

const store = createStore(reducer, applyMiddleware(thunk))

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
