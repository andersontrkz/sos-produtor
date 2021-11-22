import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, ModalOverlay, ModalContent, ModalHeader, Spinner, Flex,
  ModalBody, ModalFooter, Grid, GridItem, Input, ModalCloseButton, Text,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import CepCoords from 'coordenadas-do-cep';

import { patchProducerAddressAction } from '../../../store/modules/shop/actions';

const AddressModal = ({ isOpen, onClose }) => {
  const { producer: storeProducer } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [producer, setProducer] = useState({
    cep: '',
    city: '',
    uf: '',
    street: '',
    number: '',
    neighborhood: '',
    lat: '',
    lng: '',
  });

  const handleInput = ({ id, value }) => {
    setProducer({ ...producer, [id]: value });
  };

  const getCoords = async () => {
    setIsLoading(true);
    CepCoords.setOpcoes({ precisao: 7 });
    const coord = await CepCoords.getByCep(producer.cep);

    setProducer({
      ...producer,
      city: coord.localidade,
      uf: coord.uf,
      street: coord.logradouro,
      neighborhood: coord.bairro,
      lat: coord.lat,
      lng: coord.lon,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (producer.cep?.length > 7) {
      getCoords();
    }
  }, [producer.cep?.length === 8]);

  useEffect(() => {
    setProducer({
      cep: storeProducer.location?.cep,
      city: storeProducer.location?.city,
      uf: storeProducer.location?.uf,
      street: storeProducer.location?.street,
      number: storeProducer.location?.number,
      neighborhood: storeProducer.location?.neighborhood,
      lat: storeProducer.location?.lat,
      lng: storeProducer.location?.lng,
    });
  }, [storeProducer]);

  const validateForm = () => {
    if (producer.cep === '' || producer.city === '' || producer.uf === '' || producer.street === '' || producer.neighborhood === '') {
      setErrorMessage('Preencha todos os campos obrigatórios*');
      return false;
    }

    if (producer.cep.length < 8) {
      setErrorMessage('Preencha um CEP válido*');
      return false;
    }

    return true;
  };

  const saveData = () => {
    if (validateForm()) {
      dispatch(patchProducerAddressAction(storeProducer._id, producer));
      window.location.reload();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Meu Endereço
          <Text fontWeight={400} fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>Seu endereço é necessário para utilizar todos os recursos do marketplace.</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          { isLoading && <Flex position="absolute" zIndex="9999" top="45%" left="45%"><Spinner /></Flex>}
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={6}>
              CEP*
              <Input id="cep" type="number" value={producer.cep} placeholder="CEP" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={6}>
              Bairro*
              <Input id="neighborhood" value={producer.neighborhood} placeholder="Bairro" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              Cidade*
              <Input id="city" value={producer.city} placeholder="Cidade" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={3}>
              UF*
              <Input id="uf" maxLength={2} value={producer.uf} placeholder="UF" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={9}>
              Logradouro*
              <Input id="street" value={producer.street} placeholder="Logradouro" onChange={({ target }) => handleInput(target)} />
            </GridItem>
            <GridItem colSpan={3}>
              Número
              <Input id="number" type="number" value={producer.number} placeholder="Número" onChange={({ target }) => handleInput(target)} />
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

AddressModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}.isRequired;

export default AddressModal;
