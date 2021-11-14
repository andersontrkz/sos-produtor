import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

const Logo = ({ color }) => (
  <>
    <Text fontWeight="bold" fontSize="4xl" color="var(--primary-color)">SOS</Text>
    <Text fontWeight="bold" fontSize="4xl" color={`var(--${color}-color)`}>Produtor</Text>
  </>
);

Logo.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Logo;
