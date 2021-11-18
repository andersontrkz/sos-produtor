/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, GridItem, Text, Input, Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Form = ({
  setShippingProperties, transaction, setTransaction, finalizeTransaction,
}) => {
  const { totalCartPrice } = useSelector((state) => state.shop);

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={12}>
        <Text pb={1} w="max-content" borderBottom="2px solid var(--primary-color)">Dados de Entrega</Text>
      </GridItem>
      <GridItem colSpan={12}>
        <Input
          placeholder="Logradouro"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setShippingProperties('street', target.value)}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          placeholder="Número"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setShippingProperties('street_number', target.value)}
        />
      </GridItem>
      <GridItem colSpan={8}>
        <Input
          placeholder="Bairro"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setShippingProperties('neighborhood', target.value)}
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
          onChange={({ target }) => setShippingProperties('city', target.value)}
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
          onChange={({ target }) => setShippingProperties('state', target.value)}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          colSpan={11}
          placeholder="CEP"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={({ target }) => setShippingProperties('zipcode', target.value)}
        />
      </GridItem>
      <br />
      <GridItem colSpan={12}>
        <Text pb={1} w="max-content" borderBottom="2px solid var(--primary-color)">Dados de Pagamento</Text>
      </GridItem>
      <GridItem colSpan={12}>
        <Input
          placeholder="Títular do Cartão"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={(e) => setTransaction({ ...transaction, card_holder_name: e.target.value })}
        />
      </GridItem>
      <GridItem colSpan={6}>
        <Input
          placeholder="Número do Cartão"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={(e) => setTransaction({ ...transaction, card_number: e.target.value })}
        />
      </GridItem>
      <GridItem colSpan={4}>
        <Input
          placeholder="Validade"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={(e) => setTransaction({ ...transaction, card_expiration_date: e.target.value })}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Input
          placeholder="CVV"
          bg="gray.100"
          border={0}
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={(e) => setTransaction({ ...transaction, card_cvv: e.target.value })}
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
          className="mercadopago-action-button"
        />
      </GridItem>
    </Grid>
  );
};

Form.propTypes = {
  setShippingProperties: PropTypes.shape().isRequired,
  transaction: PropTypes.shape().isRequired,
  setTransaction: PropTypes.shape().isRequired,
  finalizeTransaction: PropTypes.shape().isRequired,
};

export default Form;
