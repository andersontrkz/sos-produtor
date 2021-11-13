import React from 'react';
import PropTypes from 'prop-types';

import { useDisclosure } from '@chakra-ui/react';

import Header from '../Header/Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header onOpen={onOpen} />
      {children}
      <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
