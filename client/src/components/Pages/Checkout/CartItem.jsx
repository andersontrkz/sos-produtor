import React from 'react';
import {
  GridItem, Image, Button, Text, Badge,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CartItem = ({ product }) => (
  <>
    <GridItem colSpan={2} rowSpan={3} border="1px solid gray" my={2}>
      <Image src={product.image} />
    </GridItem>
    <GridItem colSpan={9} rowSpan={2} mt={2}>
      {product.title}
    </GridItem>
    <GridItem colSpan={1} rowSpan={3} display="flex" justifyContent="center" alignItems="center" my={2}>
      <Button fontWeight={900} borderRadius="50%" colorScheme="red" onClick={() => console.log(product.id)}>-</Button>
    </GridItem>
    <GridItem colSpan={9} rowSpan={1} display="flex" justifyContent="space-between" mb={2}>
      <Badge fontSize="0.8em" colorScheme="whatsapp" display="flex" alignItems="center">
        {`Preço ${product.price}`}
      </Badge>
      <Text>{`Quantidade ${product.quantity}`}</Text>
    </GridItem>
  </>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default CartItem;
