import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Text,
  Drawer,
  DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter,
} from '@chakra-ui/react';

import Cart from '../Pages/Checkout/Cart';

const Sidebar = ({ isOpen, onClose }) => (
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
      <DrawerHeader>Meu Carrinho (9)</DrawerHeader>

      <DrawerBody p={6}>
        <Cart />
      </DrawerBody>

      <DrawerFooter display="flex" justifyContent="space-between">
        <Text variant="outline" mr={3} onClick={onClose}>
          Total R$ 90,87
        </Text>
        <Button bg="var(--primary-color)">Finalizar Compra</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

Sidebar.propTypes = {
  isOpen: PropTypes.oneOfType().isRequired,
  onClose: PropTypes.oneOfType().isRequired,
};

export default Sidebar;
