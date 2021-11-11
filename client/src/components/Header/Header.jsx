import React from 'react';
import { Flex } from '@chakra-ui/react';

import Logo from '../Logo/Logo';

const Header = () => (
  <Flex bg="var(--secondary-color)" justify="center" alignItems="center">
    <Logo color="white" />
  </Flex>
);

export default Header;
