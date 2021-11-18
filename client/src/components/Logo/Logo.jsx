import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = ({ color }) => (
  <Link to="/" style={{ display: 'flex' }}>
    <Text fontWeight="bold" fontSize="4xl" color="var(--tertiary-color)">SOS</Text>
    <Text fontWeight="bold" fontSize="4xl" color={`var(--${color}-color)`}>Produtor</Text>
  </Link>
);

Logo.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Logo;
