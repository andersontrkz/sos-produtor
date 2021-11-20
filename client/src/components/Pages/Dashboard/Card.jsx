import React from 'react';
import PropTypes from 'prop-types';
import {
  GridItem, Button, Image, Text,
} from '@chakra-ui/react';

const Card = ({
  actionText, event, image, title,
}) => (
  <GridItem p={4} w="240px" h="300px" bg="#FFF" display="flex" flexDirection="column" textAlign="center" boxShadow="dark-lg" borderRadius="8px">
    <Text fontWeight={600}>{title}</Text>
    <Image p={8} borderRadius="50%" h="200px" src={image} objectFit="cover" />
    <Button colorScheme="whatsapp" onClick={event}>{actionText}</Button>
  </GridItem>
);

Card.propTypes = {
  actionText: PropTypes.string,
  title: PropTypes.string,
  event: PropTypes.func,
  image: PropTypes.string,
}.isRequired;

export default Card;
