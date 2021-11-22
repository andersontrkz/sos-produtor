import React, { useEffect } from 'react';
import {
  Flex, GridItem, Text, Button, Grid,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Layout from '../../Layout/Layout';

const Success = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('SOS_PRODUTOR_CART');
  }, []);

  return (
    <Layout>
      <Flex bg="#FFF" justify="center" direction="column">
        <GridItem py={8} px={16}>
          <Grid templateColumns="repeat(12, 1fr)" gap={4} py={8} px={16} borderRadius={8} boxShadow="dark-lg" bg="var(--white-color)">
            <GridItem colSpan={12}>
              <Text textAlign="center" fontSize="x-large" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>Operação concluida com sucesso!</Text>
              <Button
                my={4}
                bg="var(--primary-color)"
                color="var(--white-color)"
                w="100%"
                _hover={{
                  backgroundColor: 'var(--tertiary-color)',
                  transition: '.9s',
                }}
                onClick={() => history.push('/')}
              >
                Ir Para Home
              </Button>
            </GridItem>
          </Grid>
        </GridItem>
      </Flex>
    </Layout>
  );
};

export default Success;
