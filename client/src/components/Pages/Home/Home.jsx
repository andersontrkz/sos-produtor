import React, { useEffect } from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { requestProducersAction } from '../../../store/modules/shop/actions';
import Layout from '../../Layout/Layout';
import ProducersList from './ProducersList';
import Map from './Map';

const Home = () => {
  const dispatch = useDispatch();
  const { producers } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestProducersAction());
  }, []);

  return (
    <Layout>
      <Flex justifyContent="center">
        <Text fontSize={18} mt={2}>
          { `Produtores próximos de você (${producers.length})` }
        </Text>
      </Flex>
      <Flex justifyContent="center" maxH="20vh">
        <ProducersList producers={producers} />
      </Flex>
      <Flex h="100%">
        <Map producers={producers} />
      </Flex>
    </Layout>
  );
};

export default Home;
