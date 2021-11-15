import React, { useEffect } from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { requestProducersAction } from '../../../store/modules/shop/actions';
import Layout from '../../Layout/Layout';
// import ProducersList from './ProducersList';
import Map from './Map';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestProducersAction());
  }, []);

  return (
    <Layout>
      <Flex justifyContent="center" h="2vh">
        <Text>Produtores próximos de você (5)</Text>
      </Flex>
      <Flex justifyContent="center" maxH="20vh">
        {/* <ProducersList producers={producers} /> */}
      </Flex>
      <Flex h="100%">
        <Map />
      </Flex>
    </Layout>
  );
};

export default Home;
