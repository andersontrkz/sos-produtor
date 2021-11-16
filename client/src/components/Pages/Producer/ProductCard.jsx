import React from 'react';
import PropTypes from 'prop-types';
import {
  GridItem, Button, Input, Flex, Text, Image, Badge,
} from '@chakra-ui/react';

const ProductCard = ({
  product: {
    name, price, image, measurement,
  },
}) => (
  <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl" bg="#FFF">
    <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
      {`${-50.00}%`}
    </Badge>
    <Image src={image} maxH="150px" maxW="150px" m="0 auto" />
    <Flex flexDirection="column" justify="center" textAlign="center">
      <Text maxH="50px" overflowY="auto">
        {`${name} - ${measurement.amount + measurement.unit}`}
      </Text>
      <Text>
        {`R$ ${price.toFixed(2)}`}
      </Text>
      <Flex p={4}>
        <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px">-</Button>
        <Input borderRadius={0} value={0} textAlign="center" />
        <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0">+</Button>
      </Flex>
    </Flex>
  </GridItem>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    measurement: PropTypes.shape({
      amount: PropTypes.number,
      unit: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductCard;
