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

  useEffect(() => {
    console.log(process.env);
  }, []);

  return (
    <Layout>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        { cart.length ? (
          <GridItem rowSpan={11} colSpan={1} py={8} px={16}>
            <Form
              setShippingProperties={setShippingProperties}
              transaction={transaction}
              setTransaction={setTransaction}
              mercadopago={mercadopago}
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
          <Text
            fontSize="xs"
            fontWeight={400}
          >
            Confira as texas de entrega com o vendedor antes de finalizar a compra*
          </Text>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Checkout;
