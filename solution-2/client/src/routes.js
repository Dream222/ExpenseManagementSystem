// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Products from './containers/Products';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Home} />
     <Route path="/login" component={Login} />
     <Route path="/register" component={Register} />
     <Route path="/Products" component={Products} />
  </Route>
)
