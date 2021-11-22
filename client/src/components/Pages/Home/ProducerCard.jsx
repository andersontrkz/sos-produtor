import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Flex, Image, Badge, Text, Grid, GridItem,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillGeoAltFill } from 'react-icons/bs';

import { setMapCenterAction, setMapMarkerSelectedAction } from '../../../store/modules/shop/actions';
import { getGeolocation, calculateGeolocationDistance } from '../../../utils/geolocation';

const ProducerCard = ({
  producer: {
    _id, name, image, location: producerLocation, start_date: startDate,
  },
}) => {
  const dispatch = useDispatch();
  const { selectedProducerMapMarker } = useSelector((state) => state.shop);
  const [geolocation, setGeolocation] = useState(false);

  const setSelectedProducer = () => {
    dispatch(setMapCenterAction(producerLocation));
    dispatch(setMapMarkerSelectedAction(_id));
  };

  const isSevenDaysDifference = () => {
    const now = new Date();
    const past = new Date(startDate);
    const diff = Math.abs(now.getTime() - past.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days < 8) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    getGeolocation(setGeolocation);
  }, []);

  return (
    <Flex
      key={_id}
      mx={4}
      my={2}
      boxShadow="md"
      borderRadius="8px"
      borderBottom={selectedProducerMapMarker === _id ? '3px solid var(--secondary-color)' : '3px solid #BEBEBE'}
      bg={selectedProducerMapMarker === _id ? '#F0F0F0' : '#FFF'}
      transition=".9s"
      _hover={{
        cursor: 'pointer', borderBottom: '3px solid var(--primary-color)', backgroundColor: '#f6f5f5',
      }}
      onClick={setSelectedProducer}
    >
      <Flex minW="100px" maxW="100px" minH="100px" maxH="100px" p={1}>
        <Image p={2} src={image} borderRadius="50%" objectFit="cover" />
      </Flex>
      <Flex minW="160px" maxW="160px" p={2} flexDir="column" justifyContent="space-between">
        <Text fontSize="sm" fontWeight="900">{name}</Text>
        <Grid templateColumns="repeat(2, 1fr)">
          { geolocation && (
          <GridItem rowSpan={2} display="flex" fontSize="xs" alignItems="center">
            <BsFillGeoAltFill style={{ marginRight: '4px' }} />
            {` ${calculateGeolocationDistance(geolocation.lat, geolocation.lng, producerLocation.lat, producerLocation.lng)} Km`}
          </GridItem>
          )}
        </Grid>
        {isSevenDaysDifference() ? (
          <Badge fontSize="xs" colorScheme="linkedin" maxW="max-content" px={2}>
            Novo
          </Badge>
        ) : (
          <>
            <Badge fontSize="xs" colorScheme="linkedin" maxW="max-content" px={2} />
            <Badge fontSize="xs" colorScheme="linkedin" maxW="max-content" px={2} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

ProducerCard.propTypes = {
  producer: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    cost: PropTypes.number,
    rate: PropTypes.string,
    range: PropTypes.string,
    image: PropTypes.string,
    start_date: PropTypes.string,
    location: PropTypes.shape(),
  }).isRequired,
};

export default ProducerCard;
