import React from 'react';
import PropTypes from 'prop-types';

import { Flex, useDisclosure } from '@chakra-ui/react';

import Header from '../Header/Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDir="column" h="100vh">
      <Header onOpen={onOpen} />
      {children}
      <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
