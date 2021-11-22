import React from 'react';
import {
  Box, Flex, Text, Button,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { BsEmojiFrown, BsSearch } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);
  const history = useHistory();

  return (
    <main>
      {cart.length ? (
        <Box px={2} p={2} mt={3} borderRadius="8px" border="1px solid rgba(50, 200, 100, 0.2)" overflowY="auto" maxH="70vh">
          {cart.map((product) => <CartItem key={product._id} product={product} />)}
        </Box>
      ) : (
        <Flex direction="column" justifyContent="center">
          <Text px={2} p={2} mt={4} display="flex" alignItems="center" justifyContent="center">
            Nenhum item adicionado ao carrinho
            <BsEmojiFrown style={{ marginLeft: '8px' }} />
          </Text>
          <Button
            mt={4}
            fontWeight={400}
            bg="var(--primary-color)"
            color="var(--white-color)"
            leftIcon={<BsSearch />}
            rightIcon={<IoIosArrowForward />}
            justifyContent="space-between"
            onClick={() => history.push('/')}
          >
            Ver Lista de Produtos
          </Button>
        </Flex>
      )}
    </main>
  );
};

export default Cart;
