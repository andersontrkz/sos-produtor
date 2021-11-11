import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
