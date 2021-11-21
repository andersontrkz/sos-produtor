import React, { useState } from 'react';
import {
  Grid, GridItem, Text, Input, Image, Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setCustomerAction, postProducerAction } from '../../../store/modules/shop/actions';

import Layout from '../../Layout/Layout';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [producer, setProducer] = useState({
    name: '',
    email: '',
    ddd: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInput = ({ id, value }) => {
    setProducer({ ...producer, [id]: value });
  };

  const redirectToHome = () => {
    dispatch(postProducerAction(producer));
    dispatch(setCustomerAction(producer));
    history.push('/');
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
            <GridItem colSpan={12}>
              <Input id="name" value={producer.name} placeholder="Nome Completo" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              <Input id="email" value={producer.email} placeholder="Email" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={3}>
              <Input id="ddd" value={producer.ddd} placeholder="DDD" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              <Input id="phone" value={producer.phone} placeholder="Telefone" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              <Input id="password" value={producer.password} placeholder="Senha" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              <Input id="confirmPassword" value={producer.confirmPassword} placeholder="Confirme a Senha" onChange={({ target }) => handleInput(target)} />
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
