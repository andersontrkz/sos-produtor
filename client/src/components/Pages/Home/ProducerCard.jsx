import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Flex, Image, Badge, Text, Grid, GridItem,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineGrade, MdGrade } from 'react-icons/md';
import { RiMoneyDollarCircleLine, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { BsFillGeoAltFill } from 'react-icons/bs';

import { setMapCenterAction, setMapMarkerSelectedAction } from '../../../store/modules/shop/actions';
import { getGeolocation, calculateGeolocationDistance } from '../../../utils/geolocation';

const ProducerCard = ({
  producer: {
    _id, name, rate, image, location: producerLocation, cost,
  },
}) => {
  const dispatch = useDispatch();
  const { selectedProducerMapMarker } = useSelector((state) => state.shop);
  const [geolocation, setGeolocation] = useState(false);

  const setSelectedProducer = () => {
    dispatch(setMapCenterAction(producerLocation));
    dispatch(setMapMarkerSelectedAction(_id));
  };

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
          <GridItem>
            <Text p={1} fontSize="xs" display="flex" alignItems="center" color="var(--tertiary-color)">{generateProducerStats(rate, <MdGrade />, <MdOutlineGrade />)}</Text>
          </GridItem>
          { geolocation && (
          <GridItem rowSpan={2} display="flex" fontSize="xs" alignItems="center">
            <BsFillGeoAltFill style={{ marginRight: '4px' }} />
            {` ${calculateGeolocationDistance(geolocation.lat, geolocation.lng, producerLocation.lat, producerLocation.lng)} Km`}
          </GridItem>
          )}
          <GridItem>
            <Text p={1} fontSize="xs" display="flex" alignItems="center" color="var(--secondary-color)">{generateProducerStats(cost, <RiMoneyDollarCircleFill />, <RiMoneyDollarCircleLine />)}</Text>
          </GridItem>
        </Grid>
        <Badge fontSize="xs" colorScheme="whatsapp" maxW="max-content" px={2}>
          Frete Grátis
        </Badge>
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
    location: PropTypes.shape(),
  }).isRequired,
};

export default ProducerCard;
