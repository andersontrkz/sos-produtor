import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProductsList = ({ products }) => (
  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
    {products?.map((product) => <ProductCard product={product} />)}
  </Grid>
);

ProductsList.propTypes = {
  products: PropTypes.string.isRequired,
};

export default ProductsList;
