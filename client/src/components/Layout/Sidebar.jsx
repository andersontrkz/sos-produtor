import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Text, Drawer, Badge, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader,
  DrawerBody, DrawerFooter,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Cart from '../Pages/Checkout/Cart';

const Sidebar = ({ isOpen, onClose }) => {
  const { totalCartQuantity, totalCartPrice } = useSelector((state) => state.shop);

  const clearCartItens = () => {
    localStorage.removeItem('SOS_PRODUTOR_CART');
    window.location.reload();
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="sm"
      px={0}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{`Meu Carrinho (${totalCartQuantity})`}</DrawerHeader>

        <DrawerBody p={6}>
          <Cart />
          <Badge mt={1} px={2} colorScheme="red" mr={3} cursor="pointer" onClick={clearCartItens} fontSize="xs">Limpar Carrinho ☓</Badge>
        </DrawerBody>

        <DrawerFooter fontWeight={600} display="flex" justifyContent="space-between">
          <Text variant="outline" mr={3} onClick={onClose}>
            TOTAL
          </Text>
          <Text variant="outline" mr={3} onClick={onClose}>
            {`R$ ${totalCartPrice}`}
          </Text>
        </DrawerFooter>
        <Link to="/checkout">
          <Button w="100%" borderRadius="none" size="lg" colorScheme="whatsapp">Fazer Checkout</Button>
        </Link>
      </DrawerContent>
    </Drawer>
  );
};

Sidebar.propTypes = ({
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
}).isRequired;

export default Sidebar;
