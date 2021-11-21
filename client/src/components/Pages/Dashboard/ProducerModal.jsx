import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, ModalOverlay, ModalContent, ModalHeader, Text,
  ModalBody, ModalFooter, Grid, GridItem, Input, ModalCloseButton,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { patchProducerDataAction } from '../../../store/modules/shop/actions';

const ProductsModal = ({ isOpen, onClose }) => {
  const { producer: storedProducer } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(false);

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
      image: storedProducer?.image,
      email: storedProducer?.email,
      ddd: storedProducer?.phone?.ddd,
      phone: storedProducer?.phone?.number,
      seller_id: storedProducer?.seller_id,
    });
  }, [storedProducer]);

  const validateForm = () => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const nameRegex = /^[a-z ,.'-]+$/i;
    const { seller_id: sellerId } = producer;

    if (producer.name === '' || producer.email === '' || producer.ddd === '' || producer.phone === '' || producer.image === '') {
      setErrorMessage('Preencha todos os campos obrigatórios*');
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

    if (sellerId !== '') {
      if (sellerId.split('-').length !== 3 || sellerId[0] !== 'T') {
        setErrorMessage('Preencha um token válido*');
        return false;
      }
    }

    return true;
  };

  const saveData = () => {
    if (validateForm()) {
      dispatch(patchProducerDataAction(storedProducer._id, producer));
      window.location.reload();
      onClose();
    }
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
              Nome Completo*
              <Input id="name" maxLength={30} value={producer.name} placeholder="Nome Completo" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              Imagem de Perfil (URL)*
              <Input id="image" value={producer.image} placeholder="Imagem de Perfil (URL)" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              Email*
              <Input id="email" type="email" maxLength={50} value={producer.email} placeholder="Email" onChange={({ target }) => handleInput(target)} disabled />
            </GridItem>
            <GridItem colSpan={3}>
              DDD*
              <Input id="ddd" type="number" value={producer.ddd} placeholder="DDD" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              Telefone*
              <Input id="phone" type="number" value={producer.phone} placeholder="Telefone" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={12}>
              MercadoPago Token
              <Input id="seller_id" value={producer.seller_id} placeholder="MercadoPago Token" onChange={({ target }) => handleInput(target)} />
              <Text fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>Um token válido é necessário para utilizar todos os recursos do marketplace.</Text>
            </GridItem>
            <GridItem colSpan={12}>
              {errorMessage && <Text textAlign="center" fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>{errorMessage}</Text>}
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
