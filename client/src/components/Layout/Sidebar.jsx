import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Text,
  Drawer,
  DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Cart from '../Pages/Checkout/Cart';

const Sidebar = ({ isOpen, onClose }) => {
  const { totalCartQuantity, totalCartPrice } = useSelector((state) => state.shop);

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
          <Button w="100%" borderRadius="none" size="lg" colorScheme="whatsapp">Finalizar Compra</Button>
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
