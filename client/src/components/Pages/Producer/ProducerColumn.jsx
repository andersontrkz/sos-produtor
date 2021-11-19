import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, Image, Badge, Flex,
} from '@chakra-ui/react';
import { MdOutlineGrade, MdGrade } from 'react-icons/md';
import { RiMoneyDollarCircleLine, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { BsFillGeoAltFill } from 'react-icons/bs';

import { getGeolocation, calculateGeolocationDistance } from '../../../utils/geolocation';

const Producer = ({
  producer: {
    name, rate, cost, benefits, image, location: producerLocation,
  },
}) => {
  const [geolocation, setGeolocation] = useState(false);

  const generateProducerStats = (stats, activeElement, inativeElement) => {
    const array = [];
    for (let index = 0; index < Number(stats); index += 1) {
      array[index] = activeElement;
    }

    for (let index = Number(stats); index < 5; index += 1) {
      array[index] = inativeElement;
    }

    return array;
  };

  useEffect(() => {
    getGeolocation(setGeolocation);
  }, []);

  const generateProducerBenefits = () => (
    <>
      {benefits.free_delivery && (
      <Badge my={2} py={1} px={4} fontSize="0.8em" colorScheme="whatsapp" display="flex" alignItems="center" w="fit-content">
        Frete Grátis
      </Badge>
      )}
      {benefits.new && (
      <Badge my={2} py={1} px={4} fontSize="0.8em" colorScheme="linkedin" display="flex" alignItems="center" w="fit-content">
        Novo
      </Badge>
      )}
      {benefits.offer && (
      <Badge my={2} py={1} px={4} fontSize="0.8em" colorScheme="yellow" display="flex" alignItems="center" w="fit-content">
        OFERTAS
      </Badge>
      )}
      {benefits.discount && (
      <Badge my={2} py={1} px={4} fontSize="0.8em" colorScheme="red" display="flex" alignItems="center" w="fit-content">
        {`-${benefits.discount}% OFF`}
      </Badge>
      )}
    </>
  );

  return (
    <Box>
      <Image w="48" h="48" objectFit="cover" src={image} borderRadius="50%" mb={4} />
      <Text pt={1} fontWeight={600}>{name}</Text>
      <Flex fontSize="smaller" flexDirection="column">
        <Flex my={1} display="flex" alignItems="center" fontSize="large" color="var(--tertiary-color)">
          {generateProducerStats(rate, <MdGrade />, <MdOutlineGrade />)}
        </Flex>
        <Flex my={1} display="flex" alignItems="center" fontSize="larger" color="var(--primary-color)">
          {generateProducerStats(cost, <RiMoneyDollarCircleFill />, <RiMoneyDollarCircleLine />)}
        </Flex>
        {geolocation && (
          <Flex my={1} fontSize="larger" alignItems="center">
            <BsFillGeoAltFill />
            {` ${calculateGeolocationDistance(geolocation.lat, geolocation.lng, producerLocation.lat, producerLocation.lng)} Km`}
          </Flex>
        ) }
        {generateProducerBenefits()}
      </Flex>
    </Box>
  );
};

Producer.propTypes = {
  producer: PropTypes.string.isRequired,
};

export default Producer;
