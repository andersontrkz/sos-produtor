import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Grid, GridItem, Input, ModalCloseButton,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const AddressModal = ({ isOpen, onClose }) => {
  const { login } = useSelector((state) => state.shop);

  const [producer, setProducer] = useState({
    cep: '',
    city: '',
    uf: '',
    street: '',
    number: '',
    neighborhood: '',
    password: '',
  });

  const handleInput = ({ id, value }) => {
    setProducer({ ...producer, [id]: value });
  };

  useEffect(() => {
    setProducer({
      cep: login.location.cep,
      city: login.location.city,
      uf: login.location.uf,
      street: login.location.street,
      number: login.location.number,
      neighborhood: login.location.neighborhood,
      password: login.password,
    });
    console.log(login);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Meu Endereço</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={6}>
              CEP
              <Input id="cep" value={producer.cep} placeholder="CEP" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              Bairro
              <Input id="neighborhood" value={producer.cep} placeholder="Bairro" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              Cidade
              <Input id="city" value={producer.cep} placeholder="Cidade" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={3}>
              UF
              <Input id="uf" value={producer.cep} placeholder="UF" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              Logradouro
              <Input id="street" value={producer.cep} placeholder="Logradouro" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={3}>
              Número
              <Input id="number" value={producer.cep} placeholder="Número" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              Senha
              <Input id="password" placeholder="Senha" onChange={({ target }) => handleInput(target)} />
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

AddressModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}.isRequired;

export default AddressModal;
