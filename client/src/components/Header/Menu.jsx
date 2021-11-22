import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

import LoginModal from './LoginModal';

const Menu = () => {
  const { login } = useSelector((state) => state.shop);
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    if (login._id) {
      history.push('/dashboard');
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Button
        as={Button}
        position="absolute"
        left="20"
        bg="var(--tertiary-color)"
        color="white"
        transition=".9s"
        fontSize="sm"
        size="sm"
        rightIcon={login.name && <MdKeyboardArrowRight />}
        leftIcon={<FaUserCircle />}
        _hover={{ backgroundColor: 'var(--quaternary-color)' }}
        onClick={handleButtonClick}
      >
        { login._id ? 'Dashboard' : 'Sou Produtor' }
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Menu;
