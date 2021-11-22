/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, GridItem, Text, Input, Flex, Button,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { BsCashCoin, BsTruck } from 'react-icons/bs';
import MercadoPagoCheckout from 'react-mercadopago-checkout';
import { createTransaction } from '../../../apis/mercadopago';

const Form = ({
  transaction, setTransaction, validateForm,
}) => {
  const [preferenceId, setPreferenceId] = useState();
  const { totalCartPrice } = useSelector((state) => state.shop);

  const setTransactionPayerAddress = ({ id, value }) => {
    if (id === 'street_number') value = Number(value);
    setTransaction(
      {
        ...transaction,
        payer: { ...transaction.payer, address: { ...transaction.payer.address, [id]: value } },
      },
    );
  };

  const setTransactionPayerData = ({ id, value }) => {
    setTransaction({ ...transaction, payer: { ...transaction.payer, [id]: value } });
  };

  const setTransactionPayerCPF = ({ id, value }) => {
    setTransaction(
      {
        ...transaction,
        payer: {
          ...transaction.payer,
          identification: { ...transaction.payer.identification, [id]: value },
        },
      },
    );
  };

  const setTransactionPayerPhone = ({ id, value }) => {
    if (id === 'number') value = Number(value);

    setTransaction(
      {
        ...transaction,
        payer: {
          ...transaction.payer,
          phone: { ...transaction.payer.phone, [id]: value },
        },
      },
    );
  };

  const generateTransactionToken = async () => {
    if (validateForm()) {
      const token = await createTransaction(transaction);
      setPreferenceId(token);
    }
  };

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={12}>
        <Text
          pb={1}
          w="max-content"
          borderBottom="2px solid var(--primary-color)"
          fontWeight={600}
          display="flex"
          alignItems="center"
        >
          <BsCashCoin style={{ marginRight: '8px' }} />
          Dados do Comprador
        </Text>
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          id="name"
          placeholder="Nome"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerData(target)}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          id="surname"
          placeholder="Sobrenome"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerData(target)}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          type="number"
          id="number"
          placeholder="CPF"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerCPF(target)}
        />
      </GridItem>
      <GridItem colSpan={6}>
        <Input
          id="email"
          placeholder="Email"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerData(target)}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Input
          type="number"
          id="area_code"
          placeholder="DDD"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerPhone(target)}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          type="number"
          id="number"
          placeholder="Telefone"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerPhone(target)}
        />
      </GridItem>
      <br />
      <GridItem colSpan={12}>
        <Text
          pb={1}
          w="max-content"
          borderBottom="2px solid var(--primary-color)"
          fontWeight={600}
          display="flex"
          alignItems="center"
        >
          <BsTruck style={{ marginRight: '8px' }} />
          Dados de Entrega
        </Text>
      </GridItem>
      <GridItem colSpan={12}>
        <Input
          id="street_name"
          placeholder="Logradouro"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerAddress(target)}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          type="number"
          id="street_number"
          placeholder="Número"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerAddress(target)}
        />
      </GridItem>
      <GridItem colSpan={8}>
        <Input
          id="neighborhood"
          placeholder="Bairro"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerAddress(target)}
        />
      </GridItem>
      <GridItem colSpan={6}>
        <Input
          id="city"
          placeholder="Cidade"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerAddress(target)}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Input
          maxLength={2}
          id="uf"
          placeholder="UF"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerAddress(target)}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          type="number"
          id="zip_code"
          colSpan={11}
          placeholder="CEP"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setTransactionPayerAddress(target)}
        />
      </GridItem>
      <br />
      <GridItem colSpan={12}>
        <Flex justify="space-between">
          <Text fontWeight="bold">Total</Text>
          <Text fontWeight="bold">{`R$ ${totalCartPrice}`}</Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={12}>
        <Button
          w="full"
          bg="var(--primary-color)"
          color="var(--white-color)"
          transition=".9s"
          _hover={{
            backgroundColor: 'var(--quaternary-color)',
          }}
          onClick={generateTransactionToken}
        >
          Finalizar Compra
        </Button>
        { preferenceId && (
        <MercadoPagoCheckout
          publicKey={process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY}
          preferenceId={preferenceId}
        />
        )}
      </GridItem>
    </Grid>
  );
};

Form.propTypes = ({
  transaction: PropTypes.shape(),
  setTransaction: PropTypes.shape({}),
  finalizeTransaction: PropTypes.shape(),
}).isRequired;

export default Form;
