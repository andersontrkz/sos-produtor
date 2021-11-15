import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from '@chakra-ui/react';

import MarkerIcon from '../../../assets/icons/marker.png';
// import MarkerSelectedIcon from '../../../assets/icons/marker-selected.png';

const MapMarker = ({ producer: { image } }) => (
  <Flex w="120px" h="120px">
    <Image
      mt="8px"
      ml="27px"
      position="absolute"
      w="66px"
      h="66px"
      borderRadius="50%"
      src={image}
      objectFit="cover"
    />
    <Image src={MarkerIcon} w="100%" h="100%" objectFit="cover" />
  </Flex>
);

MapMarker.propTypes = {
  producer: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
};

export default MapMarker;
