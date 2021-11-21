import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, ModalOverlay, ModalContent, ModalHeader, Tr, Th, Tbody, Td,
  ModalBody, ModalFooter, ModalCloseButton, Table, TableCaption, Thead, Image,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { requestProducerAction, deleteProductAction } from '../../../store/modules/shop/actions';

const ProductsModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { producer, login } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestProducerAction(login._id));
  }, []);

  const deleteProduct = (id) => {
    dispatch(deleteProductAction(id));
    const row = document.getElementById(id);
    row.remove();
  };

  const closeModal = () => {
    window.location.reload();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Meus Produtos</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="auto" maxH="80vh">
          <Table variant="simple">
            <TableCaption>Lista de produtos cadastrados.</TableCaption>
            <Thead>
              <Tr>
                <Th />
                <Th>Nome</Th>
                <Th isNumeric>Preço</Th>
                <Th isNumeric>Quantidade/Unidade</Th>
                <Th isNumeric>Frete Grátis</Th>
                <Th>Remover</Th>
              </Tr>
            </Thead>
            <Tbody>
              {producer.products?.map((product) => (
                <Tr id={product._id}>
                  <Td><Image h={10} borderRadius="50%" src={product.image} /></Td>
                  <Td>{product.name}</Td>
                  <Td isNumeric>{product.price.toFixed(2)}</Td>
                  <Td isNumeric>
                    {product.measurement.amount}
                    {product.measurement.unit}
                  </Td>
                  <Td isNumeric>{product.free_delivery ? 'Sim' : 'Não'}</Td>
                  <Td><Button size="sm" colorScheme="red" onClick={() => deleteProduct(product._id)}><RiDeleteBin5Fill /></Button></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeModal}>
            Fechar
          </Button>
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
