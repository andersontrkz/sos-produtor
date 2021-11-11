import React from 'react';
import {
  Grid, GridItem, Text, Input, Image, Box, Button,
} from '@chakra-ui/react';
import Logo from '../../Logo/Logo';

const Login = () => (
  <Grid
    h="100vh"
    templateColumns="repeat(2, 1fr)"
    templateRows="repeat(12, 1fr)"
    gap={4}
  >
    <GridItem display="flex" rowSpan={1} colSpan={2} justifyContent="center">
      <Logo />
    </GridItem>
    <GridItem rowSpan={11} colSpan={1}>
      <Image src="https://cdn.dribbble.com/users/2441144/screenshots/6176533/2.rolnictwo_dribbble.gif" />
    </GridItem>
    <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
      <Box py={8} px={16} bg="var(--secondary-color)" borderRadius={8} boxShadow="dark-lg">
        <Text my={4} fontSize="2xl" textAlign="center" color="var(--white-color)">
          Todos os benefícios de comprar diretamente do produtor, aqui!
        </Text>
        <Input my={4} id="name" placeholder="Nome Completo" color="var(--white-color)" />
        <Input my={4} id="cpf" placeholder="CPF" color="var(--white-color)" />
        <Input my={4} id="email" placeholder="Email" color="var(--white-color)" />
        <Input my={4} id="phone" placeholder="Telefone" color="var(--white-color)" />
        <Button
          my={4}
          bg="var(--primary-color)"
          color="var(--white-color)"
          w="100%"
          _hover={{
            backgroundColor: 'var(--tertiary-color)',
            transition: '.9s',
          }}
        >
          Finalizar Pedido

        </Button>
      </Box>
    </GridItem>
  </Grid>
);

export default Login;
