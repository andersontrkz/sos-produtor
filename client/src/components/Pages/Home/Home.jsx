import React from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';

import Layout from '../../Layout/Layout';
import ProducersList from './ProducersList';
import Map from './Map';

const producers = [{
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}, {
  id: '1', name: 'Juca', price: '$$$$', rate: '4.7', range: '2,9 Km', image: 'https://www.pccmarkets.com/wp-content/uploads/2018/05/steve-suzi-and-workers-1600.jpg',
}];

const Home = () => (
  <Layout>
    <Flex justifyContent="center" h="2vh">
      <Text>Produtores próximos de você (5)</Text>
    </Flex>
    <Flex justifyContent="center" maxH="20vh">
      <ProducersList producers={producers} />
    </Flex>
    <Flex h="100%">
      <Map />
    </Flex>
  </Layout>
);

export default Home;
