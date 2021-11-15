import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex, Image, Badge, Text,
} from '@chakra-ui/react';

const ProducerCard = ({
  producer: {
    id, name, price, rate, range, image,
  },
}) => (
  <Flex key={id} mx={4} my={2} boxShadow="md" borderRadius="8px" bg="#FFF">
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

ProducerCard.propTypes = {
  producer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    rate: PropTypes.string,
    range: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProducerCard;
