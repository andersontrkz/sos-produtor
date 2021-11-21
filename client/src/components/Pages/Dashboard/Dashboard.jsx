import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, useDisclosure } from '@chakra-ui/react';

import Card from './Card';
import Layout from '../../Layout/Layout';
import ProductsModal from './ProductsModal';
import ProductModal from './ProductModal';
import ProducerModal from './ProducerModal';
import AddressModal from './AddressModal';

const Dashboard = () => {
  const { producer } = useSelector((state) => state.shop);

  const {
    isOpen: isOpenProducer, onOpen: onOpenProducer, onClose: onCloseProducer,
  } = useDisclosure();
  const {
    isOpen: isOpenAddress, onOpen: onOpenAddress, onClose: onCloseAddress,
  } = useDisclosure();
  const {
    isOpen: isOpenProducts, onOpen: onOpenProducts, onClose: onCloseProducts,
  } = useDisclosure();
  const {
    isOpen: isOpenProduct, onOpen: onOpenProduct, onClose: onCloseProduct,
  } = useDisclosure();

  return (
    <Layout>
      <Grid py={12} px={28} templateColumns="repeat(4, 1fr)" gap={12} h="92vh">
        <Card title="Meus Dados" actionText="Editar" event={onOpenProducer} image={producer.image} />
        <Card title="Meu Endereço" actionText="Editar" event={onOpenAddress} image="https://www.freeiconspng.com/thumbs/address-icon/address-icon-15.png" />
        <Card title="Adicionar Produto" actionText="Adicionar" event={onOpenProduct} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1klWth1t0pg0n9d06ZSwx5Q2YiT5Cho4zjAgUX2avCqjti1RqWN320ak-PCQ-JkkQk0&usqp=CAU" />
        <Card title="Meus Produtos" actionText="Acessar" event={onOpenProducts} image="https://www.pngitem.com/pimgs/m/325-3256236_products-icon-vector-product-icon-png-transparent-png.png" />
        <Card title="Meu Marketplace" actionText="Vincular Conta" event={() => window.location.replace(`https://auth.mercadopago.com.br/authorization?client_id=${process.env.REACT_APP_MERCADOPAGO_APP_ID}&response_type=code&platform_id=mp&state=${process.env.REACT_APP_MERCADOPAGO_RANDOM_ID}&redirect_uri=${process.env.REACT_APP_MERCADOPAGO_SUCCESS_URI}`)} image="https://s2.glbimg.com/9PzmLTQysCdOCwwzKpUoOxAy3sA=/i.glbimg.com/og/ig/infoglobo1/f/original/2019/11/08/mercado-pago.jpg" />
      </Grid>
      <ProducerModal isOpen={isOpenProducer} onClose={onCloseProducer} />
      <AddressModal isOpen={isOpenAddress} onClose={onCloseAddress} />
      <ProductsModal isOpen={isOpenProducts} onClose={onCloseProducts} />
      <ProductModal isOpen={isOpenProduct} onClose={onCloseProduct} />
    </Layout>
  );
};

export default Dashboard;
