import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import underscore from 'underscore';
import { useMercadopago } from 'react-sdk-mercadopago';

import { createTransaction } from '../../../apis/mercadopago';
import Layout from '../../Layout/Layout';
import Form from './Form';
import Cart from './Cart';

const Checkout = () => {
  const {
    cart, totalCartQuantity, totalCartPrice, transactionFee, defaultSeller,
  } = useSelector((state) => state.shop);

  const generateSevenDaysDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    return date;
  };

  const totals = cart.reduce((total, product) => total + product.price, 0);

  const generateSplitRules = () => {
    const productsByProducer = underscore.groupBy(
      cart,
      // eslint-disable-next-line no-underscore-dangle
      (product) => product.producer_id.seller_id,
    );
    const result = [];

    Object.keys(productsByProducer).forEach((producer) => {
      const products = productsByProducer[producer];

      const totalValuePerProducer = products
        .reduce((total, product) => total + product.price, 0)
        .toFixed(2);

      const totalFee = (totalValuePerProducer * transactionFee).toFixed(2);

      result.push({
        // eslint-disable-next-line no-underscore-dangle
        seller_id: products[0].producer_id.seller_id,
        percentage: Math.floor(
          ((totalValuePerProducer - totalFee) / totals) * 100,
        ),
        liable: true,
        charge_processing_fee: true,
      });
    });

    const totalProducersPercentage = result
      .reduce((acc, recipient) => acc + parseFloat(recipient.percentage), 0);

    result.push({
      ...defaultSeller,
      percentage: 100 - totalProducersPercentage,
    });

    return result;
  };

  const mercadopago = useMercadopago.v2('TEST-0cea4c24-eee4-4f4d-a6cd-1bf68d25f9d0', {
    locale: 'pt-BR',
  });

  const generateTrasnaction = async () => {
    const token = await createTransaction();
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: token,
        },
        render: {
          container: '.mercadopago-action-button',
          type: 'wallet',
          label: 'Finalizar Compra',
          theme: {
            headerColor: 'red', // Dark color
          },
        },
      });
    }
  };

  useEffect(() => {
    generateTrasnaction();
  }, [mercadopago]);

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
    split_rules: generateSplitRules(),
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
    // createTransaction();
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
