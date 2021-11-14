import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';

import Home from '../components/Pages/Home/Home';
import Producer from '../components/Pages/Producer/Producer';
import Checkout from '../components/Pages/Checkout/Checkout';
import Login from '../components/Pages/Login/Login';

const Routes = () => (
  <Router>
    <Route path="/producer" element={<Producer />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
  </Router>
);

export default Routes;
