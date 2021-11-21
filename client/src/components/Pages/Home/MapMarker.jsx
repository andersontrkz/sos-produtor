import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import MarkerIcon from '../../../assets/icons/marker.png';
import MarkerSelectedIcon from '../../../assets/icons/marker-selected.png';

const MapMarker = ({ producer: { _id, image } }) => {
  const { selectedProducerMapMarker } = useSelector((state) => state.shop);

  return (
    <Link to={`/producer/${_id}`}>
      <Flex w="120px" h="120px">
        <Image
          mt="-38.5px"
          ml="-40px"
          src={selectedProducerMapMarker === _id ? MarkerSelectedIcon : MarkerIcon}
          w="100%"
          h="100%"
          objectFit="cover"
          transform="rotate(135deg)"
        />
        <Image
          position="absolute"
          w="66px"
          h="66px"
          borderRadius="50%"
          src={image}
          objectFit="cover"
        />
      </Flex>
    </Link>
  );
};

MapMarker.propTypes = {
  producer: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default MapMarker;
