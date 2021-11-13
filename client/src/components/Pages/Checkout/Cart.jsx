import React from 'react';
import { Grid } from '@chakra-ui/react';
import CartItem from './CartItem';

const products = [{
  id: '1',
  title: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria',
  price: '12.90',
  quantity: '3 u',
  image: 'https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765',
}, {
  id: '2',
  title: 'The tomato is the edible berry of the plant Solanum lycopersicum',
  price: '9.90',
  quantity: '1kg',
  image: 'https://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-File.png',
}, {
  id: '1',
  title: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria',
  price: '12.90',
  quantity: '3 u',
  image: 'https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765',
}, {
  id: '2',
  title: 'The tomato is the edible berry of the plant Solanum lycopersicum',
  price: '9.90',
  quantity: '1kg',
  image: 'https://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-File.png',
}, {
  id: '1',
  title: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria',
  price: '12.90',
  quantity: '3 u',
  image: 'https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765',
}, {
  id: '2',
  title: 'The tomato is the edible berry of the plant Solanum lycopersicum',
  price: '9.90',
  quantity: '1kg',
  image: 'https://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-File.png',
}, {
  id: '1',
  title: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria',
  price: '12.90',
  quantity: '3 u',
  image: 'https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765',
}, {
  id: '2',
  title: 'The tomato is the edible berry of the plant Solanum lycopersicum',
  price: '9.90',
  quantity: '1kg',
  image: 'https://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-File.png',
}, {
  id: '1',
  title: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria',
  price: '12.90',
  quantity: '3 u',
  image: 'https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765',
}, {
  id: '2',
  title: 'The tomato is the edible berry of the plant Solanum lycopersicum',
  price: '9.90',
  quantity: '1kg',
  image: 'https://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-File.png',
}];

const Cart = () => (
  <Grid templateColumns="repeat(12, 1fr)" gap={1} boxShadow="xl" p={8} overflowY="auto" maxH="md">
    {products.map((product) => <CartItem product={product} />)}
  </Grid>
);

export default Cart;
