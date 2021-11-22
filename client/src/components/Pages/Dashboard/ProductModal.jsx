import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, ModalOverlay, ModalContent, ModalHeader, RadioGroup, Stack,
  ModalBody, ModalFooter, Grid, GridItem, Input, ModalCloseButton, Radio, Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { postProductAction } from '../../../store/modules/shop/actions';

const ProductModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.shop);
  const [errorMessage, setErrorMessage] = useState(false);

  const [product, setProduct] = useState({
    producer_id: login._id,
    name: '',
    image: '',
    price: '',
    amount: '',
    unit: '',
    free_delivery: false,
  });

  useEffect(() => {
    setProduct({
      producer_id: login._id,
      name: '',
      image: '',
      price: '',
      amount: '',
      unit: '',
      free_delivery: false,
    });
  }, []);

  const handleInput = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  const validateForm = () => {
    const priceRegex = /^[\d,.?!]+$/;

    if (product.name === '' || product.price === '' || product.amount === '' || product.unit === '') {
      setErrorMessage('Preencha todos os campos obrigatórios*');
      return false;
    }

    if (!priceRegex.test(product.price)) {
      setErrorMessage('Preencha um preço válido*');
      return false;
    }

    return true;
  };

  const saveProduct = () => {
    if (validateForm()) {
      dispatch(postProductAction(product));
      window.location.reload();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar Produto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={12}>
              Nome
              <Input id="name" value={product.name} placeholder="Ex: Tomate, Cenoura, Banana..." onChange={({ target }) => handleInput('name', target.value)} />
            </GridItem>
            <GridItem colSpan={12}>
              Imagem (URL)
              <Input id="image" value={product.image} placeholder="Ex: https://imagem/minha-imagem.png" onChange={({ target }) => handleInput('image', target.value)} />
            </GridItem>
            <GridItem colSpan={4}>
              Preço
              <Input id="price" type="number" value={product.price} placeholder="Ex: 10.80" onChange={({ target }) => handleInput('price', target.value)} />
            </GridItem>
            <GridItem colSpan={4}>
              Quantidade
              <Input id="amount" type="number" value={product.amount} placeholder="Ex: 500, 1" onChange={({ target }) => handleInput('amount', target.value)} />
            </GridItem>
            <GridItem colSpan={4}>
              Unidade
              <Input id="unit" maxLength={2} value={product.unit} placeholder="Ex: g, KG, UN" onChange={({ target }) => handleInput('unit', target.value)} />
            </GridItem>
            <GridItem colSpan={3}>
              <RadioGroup id="free_delivery" value={product.free_delivery} onChange={(e) => handleInput('free_delivery', e)}>
                Frete Grátis
                <Stack direction="row">
                  <Radio value>Sim</Radio>
                  <Radio value={false}>Não</Radio>
                </Stack>
              </RadioGroup>
            </GridItem>
            <GridItem colSpan={9}>
              {errorMessage && <Text textAlign="center" fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>{errorMessage}</Text>}
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="whatsapp" onClick={() => saveProduct()}>Salvar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ProductModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}.isRequired;

export default ProductModal;
