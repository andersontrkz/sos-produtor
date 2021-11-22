import React, { useState } from 'react';
import {
  Grid, GridItem, Text, Input, Image, Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { setCustomerAction } from '../../../store/modules/shop/actions';

import Layout from '../../Layout/Layout';

const Register = () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({
    name: '',
    surname: '',
    cpf: '',
    email: '',
    ddd: '',
    phone: '',
  });

  const handleInput = ({ id, value }) => {
    setCustomer({ ...customer, [id]: value });
  };

  const redirectToHome = () => {
    dispatch(setCustomerAction(customer));
  };

  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} bg="#FFF" h="92vh">
        <GridItem>
          <Image mt="8vh" src="https://cdn.dribbble.com/users/2441144/screenshots/6176533/2.rolnictwo_dribbble.gif" />
        </GridItem>
        <GridItem py={8} px={16} mt={4}>
          <Grid templateColumns="repeat(12, 1fr)" gap={4} py={8} px={16} borderRadius={8} boxShadow="dark-lg" bg="var(--white-color)">
            <GridItem colSpan={12}>
              <Text my={4} fontSize="2xl" textAlign="center" color="var(--primary-color)">
                Todos os benefícios de comprar diretamente do produtor, aqui!
              </Text>
            </GridItem>
            <GridItem colSpan={6}>
              <Input id="name" placeholder="Nome" color="var(--white-color)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              <Input id="surname" placeholder="Sobrenome" color="var(--white-color)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              <Input id="cpf" placeholder="CPF" color="var(--white-color)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              <Input id="email" placeholder="Email" color="var(--white-color)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={3}>
              <Input id="ddd" placeholder="DDD" color="var(--white-color)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              <Input id="phone" placeholder="Telefone" color="var(--white-color)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              <Text textAlign="center" fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>Não possui uma conta? Clique aqui!</Text>
            </GridItem>
            <GridItem colSpan={12}>
              <Button
                my={4}
                bg="var(--primary-color)"
                color="var(--white-color)"
                w="100%"
                _hover={{
                  backgroundColor: 'var(--tertiary-color)',
                  transition: '.9s',
                }}
                onClick={redirectToHome}
              >
                Cadastrar
              </Button>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Register;
