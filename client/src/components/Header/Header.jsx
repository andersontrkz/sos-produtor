import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Button } from '@chakra-ui/react';

import Logo from '../Logo/Logo';

const Header = ({ onOpen }) => (
  <Flex bg="var(--secondary-color)" justify="center" alignItems="center" h="8vh">
    <Logo color="white" />
    <Button position="absolute" right="20" bg="var(--primary-color)" color="white" onClick={onOpen}>Meu Carrinho (6)</Button>
  </Flex>
);

Header.propTypes = {
  onOpen: PropTypes.oneOfType([]).isRequired,
};

export default Header;
