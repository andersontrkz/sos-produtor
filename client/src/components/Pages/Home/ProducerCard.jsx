import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex, Image, Badge, Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { setMapCenterAction, setMapMarkerSelectedAction } from '../../../store/modules/shop/actions';

const ProducerCard = ({
  producer: {
    _id, name, price, rate, range, image, location,
  },
}) => {
  const dispatch = useDispatch();
  const { selectedProducerMapMarker } = useSelector((state) => state.shop);

  const setSelectedProducer = () => {
    dispatch(setMapCenterAction(location));
    // eslint-disable-next-line no-underscore-dangle
    dispatch(setMapMarkerSelectedAction(_id));
  };

  return (
    <Flex
      key={_id}
      mx={4}
      my={2}
      boxShadow="md"
      borderRadius="8px"
      // eslint-disable-next-line no-underscore-dangle
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
        <Flex colSpan={3} rowSpan={1} display="flex" justifyContent="space-between" mb={2}>
          <Text fontSize="sm">{rate}</Text>
          <Text fontSize="sm">{range}</Text>
          <Text fontSize="sm">{price}</Text>
        </Flex>
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
    price: PropTypes.string,
    rate: PropTypes.string,
    range: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.shape(),
  }).isRequired,
};

export default ProducerCard;
