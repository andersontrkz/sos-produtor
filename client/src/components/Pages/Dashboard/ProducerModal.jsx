import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Grid, GridItem, Input, ModalCloseButton,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ProductsModal = ({ isOpen, onClose }) => {
  const { login } = useSelector((state) => state.shop);

  const [producer, setProducer] = useState({
    name: '',
    surname: '',
    cpf: '',
    email: '',
    ddd: '',
    phone: '',
    seller_id: '',
  });

  const handleInput = ({ id, value }) => {
    setProducer({ ...producer, [id]: value });
  };

  useEffect(() => {
    setProducer({
      name: login.name,
      surname: login.surname,
      cpf: login.cpf,
      image: login.image,
      email: login.email,
      ddd: login.ddd,
      phone: login.phone,
      seller_id: login.seller_id,
    });
    console.log(login);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Meus Dados</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={6}>
              Nome
              <Input id="name" value={producer.name} placeholder="Nome" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              Sobrenome
              <Input id="surname" value={producer.surname} placeholder="Sobrenome" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              Imagem de Perfil (URL)
              <Input id="image" value={producer.image} placeholder="Imagem de Perfil (URL)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              Email
              <Input id="email" value={producer.email} placeholder="Email" onChange={({ target }) => handleInput(target)} disabled />
            </GridItem>
            <GridItem colSpan={3}>
              DDD
              <Input id="ddd" value={producer.ddd} placeholder="DDD" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              Telefone
              <Input id="phone" value={producer.phone} placeholder="Telefone" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              Senha
              <Input id="password" placeholder="Senha" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              MercadoPago Token
              <Input id="seller_id" value={producer.seller_id} placeholder="MercadoPago Token" onChange={({ target }) => handleInput(target)} disabled />
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="whatsapp">Salvar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ProductsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}.isRequired;

export default ProductsModal;
