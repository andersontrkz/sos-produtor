import React, { useState, useEffect } from 'react';
// import underscore from 'underscore';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { BsCart3 } from 'react-icons/bs';
import { useMercadopago } from 'react-sdk-mercadopago';

import Layout from '../../Layout/Layout';
import Form from './Form';
import Cart from './Cart';

const Checkout = () => {
  const {
    cart, totalCartQuantity, totalCartPrice,
  } = useSelector((state) => state.shop);
  const [errorMessage, setErrorMessage] = useState(false);

  const [transaction, setTransaction] = useState({
    marketplace_fee: 0.1,
    items: [],
    payer: {
      name: '',
      surname: '',
      email: '',
      phone: {
        area_code: '',
        number: '',
      },
      identification: {
        type: 'CPF',
        number: '',
      },
      address: {
        street_name: '',
        street_number: 0,
        neighborhood: '',
        city: '',
        uf: '',
        zip_code: '',
      },
    },
    back_urls: {
      success: process.env.REACT_APP_PUBLIC_URL_SUCCESS,
      failure: process.env.REACT_APP_PUBLIC_URL_SUCCESS,
      pending: process.env.REACT_APP_PUBLIC_URL_SUCCESS,
    },
    auto_return: 'approved',
  });

  const mercadopago = useMercadopago.v2(process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY, {
    locale: 'pt-BR',
  });

  const setShippingProperties = (key, value) => {
    setTransaction({
      ...transaction,
      payer: {
        ...transaction.payer,
        [key]: value,
      },
    });
  };

  const setTransactionItems = () => {
    const items = cart.map((el) => ({
      id: el._id,
      title: el.name,
      currency_id: 'BRL',
      picture_url: el.image,
      quantity: el.quantity,
      unit_price: el.price,
    }));

    setTransaction({ ...transaction, items });
  };

  useEffect(() => {
    setTransactionItems();
  }, [totalCartPrice, cart]);

  const validateForm = () => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const nameRegex = /^[a-z ,.'-]+$/i;

    if (transaction.payer.name === '' || transaction.payer.surname === '' || transaction.payer.email === '' || transaction.payer.phone.area_code === '' || transaction.payer.phone.number === '' || transaction.payer.identification.number === '' || transaction.payer.address.uf === '' || transaction.payer.address.city === '' || transaction.payer.address.street_number === '' || transaction.payer.address.neighborhood === '' || transaction.payer.address.street_name === '') {
      setErrorMessage('Preencha todos os campos*');
      return false;
    }

    if (!nameRegex.test(transaction.payer.name)) {
      setErrorMessage('Preencha um nome válido*');
      return false;
    }

    if (!emailRegex.test(transaction.payer.email)) {
      setErrorMessage('Preencha um email válido*');
      return false;
    }

    if (transaction.payer.phone.number.length < 8) {
      setErrorMessage('Preencha um telefone válido*');
      return false;
    }

    return true;
  };

  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        { cart.length ? (
          <GridItem rowSpan={11} py={8} px={16}>
            <Form
              setShippingProperties={setShippingProperties}
              transaction={transaction}
              setTransaction={setTransaction}
              mercadopago={mercadopago}
              validateForm={validateForm}
            />
            {errorMessage && <Text mt={2} textAlign="center" fontSize="xs" cursor="pointer" transition=".9s" _hover={{ color: 'var(--quaternary-color)' }}>{errorMessage}</Text>}
          </GridItem>
        ) : false}
        <GridItem rowSpan={11} py={8} px={16}>
          <Text
            pb={1}
            fontWeight={600}
            display="flex"
            alignItems="center"
            w="max-content"
            borderBottom="2px solid var(--primary-color)"
          >
            <BsCart3 style={{ marginRight: '8px' }} />
            {`Meu Carrinho (${totalCartQuantity})`}
          </Text>
          <Cart />
          <Text
            fontSize="xs"
            fontWeight={400}
          >
            Confira as taxas de entrega com o vendedor antes de finalizar a compra*
          </Text>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Checkout;
