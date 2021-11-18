import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { requestProducerAction } from '../../../store/modules/shop/actions';
import Layout from '../../Layout/Layout';
import ProducerColumn from './ProducerColumn';
import ProductsList from './ProductsList';

const Producer = ({ match }) => {
  const dispatch = useDispatch();
  const { producer } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestProducerAction(match.params.id));
  }, []);

  return (
    <main>
      {producer.products
      && (
      <Layout>
        <Grid templateColumns="repeat(21, 1fr)" gap={4}>
          <GridItem colSpan={4} p={8}>
            <ProducerColumn producer={producer} />
          </GridItem>
          <GridItem colSpan={15} py={8}>
            <Text pb={1} mb={3} w="max-content" borderBottom="2px solid var(--tertiary-color)">{`Produtos (${producer.products?.length})`}</Text>
            <ProductsList products={producer.products} />
          </GridItem>
        </Grid>
      </Layout>
      )}
    </main>
  );
};

Producer.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Producer;
