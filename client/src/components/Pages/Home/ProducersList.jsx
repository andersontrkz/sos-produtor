import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
} from '@chakra-ui/react';

import ProducerCard from './ProducerCard';

const ProducersList = ({ producers }) => (
  <Flex overflowX="auto" mt={1}>
    {producers.map((producer) => <ProducerCard producer={producer} />)}
  </Flex>
);

ProducersList.propTypes = {
  producers: PropTypes.string.isRequired,
};

export default ProducersList;
