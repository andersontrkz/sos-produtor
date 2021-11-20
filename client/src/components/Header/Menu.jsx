import React from 'react';
import {
  Button, Menu as ChakraMenu, MenuButton, MenuList, MenuItem, useDisclosure,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUserCircle, FaRegUser } from 'react-icons/fa';
import { BsClipboardData } from 'react-icons/bs';

import LoginModal from './LoginModal';

const Menu = () => {
  const { customer } = useSelector((state) => state.shop);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraMenu>
      <MenuButton
        as={Button}
        position="absolute"
        left="20"
        bg="var(--tertiary-color)"
        color="white"
        transition=".9s"
        fontSize="sm"
        size="sm"
        rightIcon={customer.name && <MdKeyboardArrowDown />}
        leftIcon={<FaUserCircle />}
        _hover={{ backgroundColor: 'var(--quaternary-color)' }}
        onClick={onOpen}
      >
        { customer.name ? customer.name.split(' ')[0] : 'Sou Produtor' }
      </MenuButton>
      <MenuList>
        <MenuItem>
          <FaRegUser style={{ marginRight: '12px', marginBottom: '1px' }} />
          Login
        </MenuItem>
        <MenuItem>
          <FaRegUser style={{ marginRight: '12px', marginBottom: '1px' }} />
          Meus Dados
        </MenuItem>
        <MenuItem>
          <BsClipboardData style={{ marginRight: '12px', marginBottom: '1px' }} />
          Minhas Compras
        </MenuItem>
      </MenuList>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </ChakraMenu>
  );
};

export default Menu;
