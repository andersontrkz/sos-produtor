import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, Image, Flex,
} from '@chakra-ui/react';
import { BsFillGeoAltFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { SiOpenstreetmap } from 'react-icons/si';

import { getGeolocation, calculateGeolocationDistance } from '../../../utils/geolocation';

const Producer = ({
  producer: {
    name, image, phone, email, location,
  },
}) => {
  const [geolocation, setGeolocation] = useState(false);

  useEffect(() => {
    getGeolocation(setGeolocation);
  }, []);

  return (
    <Box>
      <Image w="48" h="48" objectFit="cover" src={image} borderRadius="50%" mb={4} />
      <Text pt={1} fontWeight={600} display="flex" alignItems="center">
        <FaUser style={{ marginRight: '4px' }} />
        {name}
      </Text>
      <Flex fontSize="smaller" flexDirection="column">
        {phone && (
          <Box my={3} fontSize="sm">
            <Text fontSize="larger" fontWeight={600} display="flex" alignItems="center">
              <BsFillTelephoneFill style={{ marginRight: '4px' }} />
              Telefone
            </Text>
            <Text>{`(${phone.ddd}) ${phone.ddd}`}</Text>
          </Box>
        ) }
        {email && (
          <Box my={2} fontSize="sm">
            <Text fontSize="larger" fontWeight={600} display="flex" alignItems="center">
              <MdEmail style={{ marginRight: '4px' }} />
              Email
            </Text>
            <Text>{email}</Text>
          </Box>
        ) }
        {location && geolocation && (
          <Box my={2} fontSize="sm">
            <Text fontSize="larger" fontWeight={600} display="flex" alignItems="center">
              <BsFillGeoAltFill style={{ marginRight: '4px' }} />
              Localização
            </Text>
            <Text>{`Aprox. ${calculateGeolocationDistance(geolocation.lat, geolocation.lng, location.lat, location.lng)} Km do seu ponto atual.`}</Text>
          </Box>
        ) }
        {location && (
          <Box my={2} fontSize="sm">
            <Text fontSize="larger" fontWeight={600} display="flex" alignItems="center">
              <SiOpenstreetmap style={{ marginRight: '4px' }} />
              Endereço
            </Text>
            <Text>{`${location.street}, ${location.number}`}</Text>
            <Text>{`Bairro ${location.neighborhood}`}</Text>
            <Text>{`${location.city}, ${location.uf} - BR`}</Text>
          </Box>
        ) }
      </Flex>
    </Box>
  );
};

Producer.propTypes = {
  producer: PropTypes.string.isRequired,
};

export default Producer;
