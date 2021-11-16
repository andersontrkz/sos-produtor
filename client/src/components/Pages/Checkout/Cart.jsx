import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);

  return (
    <Box>
      {cart.map((product) => <CartItem product={product} />)}
    </Box>
  );
};

export default Cart;
