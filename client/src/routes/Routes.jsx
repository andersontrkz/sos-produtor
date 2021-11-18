import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Home from '../components/Pages/Home/Home';
import Producer from '../components/Pages/Producer/Producer';
import Checkout from '../components/Pages/Checkout/Checkout';
import Login from '../components/Pages/Login/Login';

const Routes = () => (
  <Switch>
    <Route path="/producer/:id" component={Producer} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/login" component={Login} />
    {/* <Route path="/" component={Home} /> */}
  </Switch>
);

export default Routes;
