import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

import Layout from '../../Layout/Layout';
import ProducerColumn from './ProducerColumn';
import ProductsList from './ProductsList';

const Producer = () => (
  <Layout>
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={3} py={8} px={16}>
        <ProducerColumn />
      </GridItem>
      <GridItem colSpan={9} py={8}>
        <Text pb={1} mb={2} w="max-content" borderBottom="2px solid var(--primary-color)">Produtos (9)</Text>
        <ProductsList />
      </GridItem>
    </Grid>
  </Layout>
);

export default Producer;
