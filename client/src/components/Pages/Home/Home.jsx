import React, { useEffect } from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { requestProducersAction, setMapCenterAction } from '../../../store/modules/shop/actions';
import Layout from '../../Layout/Layout';
import ProducersList from './ProducersList';
import Map from './Map';
import { getGeolocation } from '../../../utils/geolocation';

const Home = () => {
  const dispatch = useDispatch();
  const { producers } = useSelector((state) => state.shop);

  const setCurrentGeolocationMapCenter = (callback) => {
    dispatch(setMapCenterAction(callback));
  };

  useEffect(() => {
    dispatch(requestProducersAction());
    getGeolocation(setCurrentGeolocationMapCenter);
  }, []);

  return (
    <Layout>
      <Flex justifyContent="center" pos="absolute" left={8} bottom={10} zIndex="999" bg="var(--quaternary-color)" py={1} px={4} borderRadius="8px">
        <Text fontSize={18} color="#FFF">
          { `Produtores Disponíveis (${producers.length})` }
        </Text>
      </Flex>
      <Flex justifyContent="center" maxH="20vh" borderBottom="1px solid rgba(0, 0, 0, 0.3)">
        <ProducersList producers={producers} />
      </Flex>
      <Flex h="100%">
        <Map producers={producers} />
      </Flex>
    </Layout>
  );
};

export default Home;
