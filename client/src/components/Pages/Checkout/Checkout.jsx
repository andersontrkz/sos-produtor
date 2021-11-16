import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Layout from '../../Layout/Layout';
import Form from './Form';
import Cart from './Cart';

const Checkout = () => {
  const { totalCartQuantity } = useSelector((state) => state.shop);

  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
          <Form />
        </GridItem>
        <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
          <Text pb={1} w="max-content" borderBottom="2px solid var(--primary-color)">{`Meu Carrinho (${totalCartQuantity})`}</Text>
          <Cart />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Checkout;
