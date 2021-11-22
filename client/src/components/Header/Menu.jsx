import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Menu as ChakraMenu, MenuButton, MenuList, MenuItem,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUserCircle, FaRegUser } from 'react-icons/fa';
import { BsCart3, BsClipboardData } from 'react-icons/bs';
// import { useHistory } from 'react-router-dom';

const Menu = ({ cartOpenModal }) => {
  const { customer, totalCartQuantity } = useSelector((state) => state.shop);
  // const history = useHistory();

  return (
    <ChakraMenu>
      <MenuButton
        as={Button}
        position="absolute"
        right="20"
        bg="var(--tertiary-color)"
        color="white"
        transition=".9s"
        fontSize="sm"
        rightIcon={customer.name && <MdKeyboardArrowDown />}
        leftIcon={<FaUserCircle />}
        _hover={{ backgroundColor: 'var(--quaternary-color)' }}
      >
        { customer.name ? customer.name.split(' ')[0] : 'Login' }
      </MenuButton>
      <MenuList>
        <MenuItem>
          <FaRegUser style={{ marginRight: '12px', marginBottom: '1px' }} />
          Meus Dados
        </MenuItem>
        <MenuItem onClick={cartOpenModal}>
          <BsCart3 style={{ marginRight: '12px', marginBottom: '1px' }} />
          {`Meu Carrinho (${totalCartQuantity})`}
        </MenuItem>
        <MenuItem>
          <BsClipboardData style={{ marginRight: '12px', marginBottom: '1px' }} />
          Minhas Compras
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  );
};

Menu.propTypes = {
  cartOpenModal: PropTypes.func.isRequired,
};

export default Menu;
