import React from 'react';
import { Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Card from './Card';
import Layout from '../../Layout/Layout';

const Dashboard = () => {
  const { login } = useSelector((state) => state.shop);

  return (
    <Layout>
      <Grid py={12} px={28} templateColumns="repeat(12, 1fr)" gap={12} h="92vh">
        <Card title="Meus Dados" actionText="Editar" image={login.image} />
        <Card title="Meus Produtos" actionText="Acessar" image="https://www.pngitem.com/pimgs/m/325-3256236_products-icon-vector-product-icon-png-transparent-png.png" />
        <Card title="Meu Marketplace" actionText="Vincular Conta" image="https://s2.glbimg.com/9PzmLTQysCdOCwwzKpUoOxAy3sA=/i.glbimg.com/og/ig/infoglobo1/f/original/2019/11/08/mercado-pago.jpg" />
      </Grid>
    </Layout>
  );
};

export default Dashboard;
