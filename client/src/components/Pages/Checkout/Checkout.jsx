import React, { useState, useEffect } from 'react';
// import underscore from 'underscore';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useMercadopago } from 'react-sdk-mercadopago';
import { BsCart3 } from 'react-icons/bs';

import { createTransaction } from '../../../apis/mercadopago';
import Layout from '../../Layout/Layout';
import Form from './Form';
import Cart from './Cart';

const Checkout = () => {
  const {
    cart, totalCartQuantity, totalCartPrice,
  } = useSelector((state) => state.shop);

  // const generateSevenDaysDate = () => {
  //   const date = new Date();
  //   date.setDate(date.getDate() + 7);

  //   return date;
  // };

  // const totals = cart.reduce((total, product) => total + product.price, 0);

  // const generateSplitRules = () => {
  //   const productsByProducer = underscore.groupBy(
  //     cart,
  //     // eslint-disable-next-line no-underscore-dangle
  //     (product) => product.producer_id.seller_id,
  //   );
  //   const result = [];

  //   Object.keys(productsByProducer).forEach((producer) => {
  //     const products = productsByProducer[producer];

  //     const totalValuePerProducer = products
  //       .reduce((total, product) => total + product.price, 0)
  //       .toFixed(2);

  //     const totalFee = (totalValuePerProducer * transactionFee).toFixed(2);

  //     result.push({
  //       // eslint-disable-next-line no-underscore-dangle
  //       seller_id: products[0].producer_id.seller_id,
  //       percentage: Math.floor(
  //         ((totalValuePerProducer - totalFee) / totals) * 100,
  //       ),
  //       liable: true,
  //       charge_processing_fee: true,
  //     });
  //   });

  //   const totalProducersPercentage = result
  //     .reduce((acc, recipient) => acc + parseFloat(recipient.percentage), 0);

  //   result.push({
  //     ...defaultSeller,
  //     percentage: 100 - totalProducersPercentage,
  //   });

  //   return result;
  // };

  const mercadopago = useMercadopago.v2('TEST-0cea4c24-eee4-4f4d-a6cd-1bf68d25f9d0', {
    locale: 'pt-BR',
  });

  const [transaction, setTransaction] = useState({
    items: [
      {
        title: 'Meu produto',
        quantity: 1,
        unit_price: 75.76,
      },
    ],
    marketplace_fee: 2.56,
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
      success: 'https://www.success.com',
      failure: 'http://www.failure.com',
      pending: 'http://www.pending.com',
    },
    auto_return: 'approved',
  });

  const generateTrasnaction = async () => {
    const token = await createTransaction(transaction);
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

  const setShippingProperties = (key, value) => {
    setTransaction({
      ...transaction,
      payer: {
        ...transaction.payer,
        [key]: value,
      },
    });
  };

  const finalizeTransaction = () => {
    console.log('oi');
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

  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        { cart.length ? (
          <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
            <Form
              setShippingProperties={setShippingProperties}
              transaction={transaction}
              setTransaction={setTransaction}
              finalizeTransaction={finalizeTransaction}
            />
          </GridItem>
        ) : false}
        <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
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
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Checkout;
