import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, GridItem, Image, Button, Badge, Text, Input,
} from '@chakra-ui/react';

const CartItem = ({ product }) => (
  <Grid templateColumns="repeat(12, 1fr)" overflowY="auto" maxH="l" p={2} boxShadow="inner" borderRadius="8px">
    <GridItem colSpan={2} rowSpan={3} border="1px solid rgba(40, 200, 100, 0.3)" borderRadius="8px">
      <Image src={product.image} borderRadius="8px" w="100%" h="100%" />
    </GridItem>
    <GridItem colSpan={9} pt={1} fontSize="xs" ml={2}>
      {product.name}
    </GridItem>
    <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
      <Button w="100%" h="100%" size="xs" fontWeight={900} borderRadius="8px 8px 0 0" colorScheme="whatsapp" onClick={() => console.log(product.id)}>-</Button>
    </GridItem>
    <GridItem colSpan={9} display="flex" justifyContent="space-between" ml={2}>
      <Text fontSize="xs" colorScheme="whatsapp" display="flex" alignItems="center">
        {`${product.measurement.amount}${product.measurement.unit}`}
      </Text>
    </GridItem>
    <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
      <Input
        w="100%"
        h="100%"
        size="xs"
        borderRadius={0}
        textAlign="center"
        value={0}
        // onChange={({ target }) => handleQuantityInput(target)}
        // onBlur={({ target }) => onFocusOutQuantityInput(target)}
      />
    </GridItem>
    <GridItem colSpan={9} pb={1} display="flex" justifyContent="space-between" ml={2}>
      <Badge fontSize="xs" colorScheme="whatsapp" display="flex" alignItems="center">
        {`Preço ${product.price}`}
      </Badge>
    </GridItem>
    <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
      <Button w="100%" h="100%" size="xs" fontWeight={900} borderRadius="0 0 8px 8px" colorScheme="whatsapp" onClick={() => console.log(product.id)}>+</Button>
    </GridItem>
  </Grid>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
    measurement: PropTypes.shape(),
    image: PropTypes.string,
  }).isRequired,
};

export default CartItem;
