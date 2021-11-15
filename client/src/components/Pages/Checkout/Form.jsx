import React from 'react';
import {
  Grid, GridItem, Text, Input, Button, Flex,
} from '@chakra-ui/react';

const Form = () => (
  <Grid templateColumns="repeat(12, 1fr)" gap={4}>
    <GridItem colSpan={12}>
      <Text pb={1} w="max-content" borderBottom="2px solid var(--primary-color)">Dados de Entrega</Text>
    </GridItem>
    <GridItem colSpan={12}>
      <Input
        colSpan={11}
        placeholder="CEP"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={6}>
      <Input
        placeholder="Cidade"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={6}>
      <Input
        placeholder="Logradouro"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={5}>
      <Input
        placeholder="Número"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={5}>
      <Input
        placeholder="Bairo"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={2}>
      <Input
        placeholder="UF"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={12}>
      <Text pb={1} w="max-content" borderBottom="2px solid var(--primary-color)">Dados de Pagamento</Text>
    </GridItem>
    <GridItem colSpan={12}>
      <Input
        colSpan={11}
        placeholder="Número do Cartão"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={6}>
      <Input
        placeholder="Validade"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={6}>
      <Input
        placeholder="CVV"
        bg="gray.100"
        border={0}
        color="gray.500"
        _placeholder={{
          color: 'gray.500',
        }}
      />
    </GridItem>
    <GridItem colSpan={12}>
      <Flex justify="space-between">
        <Text fontWeight="bold">Total</Text>
        <Text fontWeight="bold">R$ 93,12</Text>
      </Flex>
    </GridItem>
    <GridItem colSpan={12}>
      <Button
        fontFamily="heading"
        w="full"
        bgGradient="linear(to-r, red.400,pink.400)"
        color="white"
        _hover={{
          bgGradient: 'linear(to-r, red.400,pink.400)',
          boxShadow: 'xl',
        }}
      >
        Finalizar Compra
      </Button>
    </GridItem>
  </Grid>
);

export default Form;
