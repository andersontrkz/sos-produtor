import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Layout from '../../Layout/Layout';
import Form from './Form';

const Checkout = () => (
  <Layout>
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
        <Form />
      </GridItem>
      <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
        <h1>Teste</h1>
      </GridItem>
    </Grid>
  </Layout>
);

export default Checkout;
