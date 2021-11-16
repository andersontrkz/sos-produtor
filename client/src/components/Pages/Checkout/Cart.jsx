import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);

  return (
    <Box px={2} borderRadius="8px" border="1px solid rgba(50, 200, 100, 0.2)" p={2} mt={3} overflowY="auto" maxH="70vh">
      {cart.map((product, index) => <CartItem product={product} index={index} />)}
    </Box>
  );
};

export default Cart;
