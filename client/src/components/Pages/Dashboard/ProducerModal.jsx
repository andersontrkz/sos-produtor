import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalFooter, Grid, GridItem, Input, ModalCloseButton,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { patchProducerDataAction } from '../../../store/modules/shop/actions';

const ProductsModal = ({ isOpen, onClose }) => {
  const { producer: storedProducer } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const [producer, setProducer] = useState({
    name: '',
    image: '',
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
      name: storedProducer?.name,
      cpf: storedProducer?.cpf,
      image: storedProducer?.image,
      email: storedProducer?.email,
      ddd: storedProducer?.phone?.ddd,
      phone: storedProducer?.phone?.number,
      seller_id: storedProducer?.seller_id,
    });
  }, []);

  const saveData = () => {
    dispatch(patchProducerDataAction(storedProducer._id, producer));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Meus Dados</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={12}>
              Nome Completo
              <Input id="name" value={producer.name} placeholder="Nome Completo" onChange={({ target }) => handleInput(target)} />
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
          <Button colorScheme="whatsapp" onClick={saveData}>Salvar</Button>
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
