import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

import MarkerIcon from '../../../assets/icons/marker.png';

const ClientMapMarker = () => (
  <Flex w="120px" h="120px">
    <Image
      mt="-39px"
      ml="-40px"
      src={MarkerIcon}
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
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png"
      objectFit="cover"
    />
  </Flex>
);

export default ClientMapMarker;
