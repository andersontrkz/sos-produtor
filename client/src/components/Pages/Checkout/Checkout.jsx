import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Layout from '../../Layout/Layout';
import Form from './Form';
import Cart from './Cart';

const Checkout = () => {
  const { cart, totalCartQuantity, totalCartPrice } = useSelector((state) => state.shop);

  const generateSevenDaysDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    return date;
  };

  const [transaction, setTransaction] = useState({
    amount: 0,
    card_number: '',
    card_cvv: '',
    card_expiration_date: '',
    card_holder_name: '',
    shipping: {
      name: 'SOS Produtor',
      fee: 1000,
      delivery_date: generateSevenDaysDate(),
      expedited: true,
      address: {
        country: 'br',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        street_number: '',
        zipcode: '',
      },
    },
    items: [],
    split_rules: [],
  });

  const setShippingProperties = (key, value) => {
    setTransaction({
      ...transaction,
      shipping: {
        ...transaction.shipping,
        address: {
          ...transaction.shipping.address,
          [key]: value,
        },
      },
    });
  };

  const finalizeTransaction = () => {
    console.log(transaction);
  };

  useEffect(() => {
    setTransaction({
      ...transaction,
      amount: totalCartPrice,
      items: cart,
    });
  }, [totalCartPrice, cart]);

  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
          <Form
            setShippingProperties={setShippingProperties}
            transaction={transaction}
            setTransaction={setTransaction}
            finalizeTransaction={finalizeTransaction}
          />
        </GridItem>
        <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
          <Text pb={1} w="max-content" borderBottom="2px solid var(--primary-color)">{`Meu Carrinho (${totalCartQuantity})`}</Text>
          <Cart />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Checkout;
