import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Pages/Home/Home';
import Producer from '../components/Pages/Producer/Producer';
import Checkout from '../components/Pages/Checkout/Checkout';
import Register from '../components/Pages/Register/Register';
import Dashboard from '../components/Pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <Route path="/producer/:id" component={Producer} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
