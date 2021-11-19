import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { BsCart3 } from 'react-icons/bs';

import Logo from '../Logo/Logo';

const Header = ({ onOpen }) => {
  const { totalCartQuantity } = useSelector((state) => state.shop);

  const currentRoute = () => {
    const HREF = window.location.href.split('/');
    return HREF[HREF.length - 1];
  };

  return (
    <Flex bg="var(--primary-color)" justify="center" alignItems="center" h="8vh">
      <Logo color="white" />
      { totalCartQuantity && currentRoute() !== 'checkout' ? (
        <Button
          position="absolute"
          right="20"
          bg="var(--tertiary-color)"
          color="white"
          transition=".9s"
          leftIcon={<BsCart3 />}
          _hover={{ backgroundColor: 'var(--quaternary-color)' }}
          onClick={onOpen}
        >
          {`Meu Carrinho (${totalCartQuantity})`}
        </Button>
      ) : false }
    </Flex>
  );
};

Header.propTypes = {
  onOpen: PropTypes.oneOfType([]).isRequired,
};

export default Header;
