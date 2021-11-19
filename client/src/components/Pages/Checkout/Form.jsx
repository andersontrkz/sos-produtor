/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, GridItem, Text, Input, Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { BsTruck } from 'react-icons/bs';

const Form = ({
  transaction, setTransaction, finalizeTransaction,
}) => {
  const { totalCartPrice } = useSelector((state) => state.shop);

  const setTransactionPayerAddress = ({ id, value }) => {
    setTransaction(
      {
        ...transaction,
        payer: { ...transaction.payer, address: { ...transaction.payer.address, [id]: value } },
      },
    );
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
        <section
          tabIndex={0}
          role="button"
          onKeyPress={() => finalizeTransaction()}
          onClick={() => finalizeTransaction()}
          className="mercadopago-action-button"
        />
      </GridItem>
    </Grid>
  );
};

Form.propTypes = {
  transaction: PropTypes.shape().isRequired,
  setTransaction: PropTypes.shape().isRequired,
  finalizeTransaction: PropTypes.shape().isRequired,
};

export default Form;
