import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalOverlay, ModalContent, GridItem, Input,
  ModalCloseButton, ModalBody, Button, Grid, Text,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { requestLoginAction } from '../../store/modules/shop/actions';

const LoginModal = ({ isOpen, onClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleInput = ({ id, value }) => {
    setLogin({ ...login, [id]: value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(12, 1fr)" gap={4} py={8} px={16} borderRadius={8}>
            <GridItem colSpan={12}>
              <Text my={4} fontSize="2xl" textAlign="center">
                Bem vindo! Faça o login para continuar.
              </Text>
            </GridItem>
            <GridItem colSpan={12}>
              <Input id="email" placeholder="Email" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              <Input id="password" placeholder="Senha" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              <Text textAlign="center" fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }} onClick={() => history.push('/register')}>Não possui uma conta? Clique aqui!</Text>
            </GridItem>
            <GridItem colSpan={12}>
              <Button
                my={4}
                bg="var(--primary-color)"
                color="var(--white-color)"
                w="full"
                _hover={{
                  backgroundColor: 'var(--tertiary-color)',
                  transition: '.9s',
                }}
                onClick={() => dispatch(requestLoginAction(login))}
              >
                Entrar
              </Button>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default LoginModal;
