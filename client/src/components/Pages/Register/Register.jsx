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
  const [errorMessage, setErrorMessage] = useState(false);
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

  const validateForm = () => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const nameRegex = /^[a-z ,.'-]+$/i;

    if (producer.name === '' || producer.email === '' || producer.ddd === '' || producer.phone === '' || producer.password === '' || producer.confirmPassword === '') {
      setErrorMessage('Preencha todos os campos*');
      return false;
    }

    if (!nameRegex.test(producer.name)) {
      setErrorMessage('Preencha um nome válido*');
      return false;
    }

    if (!emailRegex.test(producer.email)) {
      setErrorMessage('Preencha um email válido*');
      return false;
    }

    if (producer.phone.length < 8) {
      setErrorMessage('Preencha um telefone válido*');
      return false;
    }

    if (producer.password !== producer.confirmPassword) {
      setErrorMessage('As senhas precisam ser iguais*');
      return false;
    }

    if (producer.password.length < 8) {
      setErrorMessage('Sua senha precisa ter pelo menos 8 caracteres*');
      return false;
    }
    return true;
  };

  const redirectToHome = () => {
    if (validateForm()) {
      dispatch(postProducerAction(producer));
      dispatch(setCustomerAction(producer));
      history.push('/');
    }
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
              <Input id="name" maxLength={30} value={producer.name} placeholder="Nome Completo*" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              <Input id="email" maxLength={50} value={producer.email} placeholder="Email*" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={3}>
              <Input id="ddd" type="number" value={producer.ddd} placeholder="DDD*" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              <Input id="phone" type="number" value={producer.phone} placeholder="Telefone*" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              <Input id="password" type="password" maxLength={50} value={producer.password} placeholder="Senha*" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              <Input id="confirmPassword" type="password" maxLength={50} value={producer.confirmPassword} placeholder="Confirme a Senha*" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              {errorMessage && <Text textAlign="center" fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>{errorMessage}</Text>}
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
