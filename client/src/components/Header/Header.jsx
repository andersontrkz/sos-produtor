import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';

import Logo from '../Logo/Logo';
import Menu from './Menu';

const Header = ({ onOpen }) => (
  <Flex bg="var(--primary-color)" justify="center" alignItems="center" h="8vh">
    <Menu cartOpenModal={onOpen} />
    <Logo color="white" />
  </Flex>
);

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default Header;
