import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" style={{ display: 'flex' }}>
    <Text fontWeight="bold" fontSize="4xl" color="var(--tertiary-color)">SOS</Text>
    <Text fontWeight="bold" fontSize="4xl" color="var(--white-color)">Produtor</Text>
  </Link>
);

export default Logo;
