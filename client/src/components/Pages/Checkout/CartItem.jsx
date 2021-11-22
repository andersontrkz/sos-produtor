import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, GridItem, Image, Button, Badge, Text, Input,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { handleProductCartAction } from '../../../store/modules/shop/actions';

const CartItem = ({ product, product: { _id } }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const [inputQuantity, setInputQuantity] = useState(0);

  const updateProductQuantity = () => {
    const productInCart = cart.find((cartProduct) => cartProduct._id === _id);

    if (productInCart) {
      setInputQuantity(productInCart.quantity);
    } else {
      setInputQuantity(0);
    }
  };

  const handleProductCart = (quantity) => {
    dispatch(handleProductCartAction(product, quantity));
  };

  const handleQuantityInput = ({ value }) => {
    // BASED ON https://www.ti-enxame.com/pt/javascript/regex-para-verificar-se-uma-string-contem-apenas-numeros/942732264/
    const regex = new RegExp(/^-?\d*\.?\d*$/);
    if (regex.test(value)) {
      if (value !== '') {
        if (parseInt(value[0], 10) === 0 && parseInt(value[1], 10) === 0) {
          handleProductCart(parseInt(value, 10));
        } else {
          handleProductCart(parseInt(value, 10));
        }
      } else {
        setInputQuantity('');
      }
    }
  };

  const onFocusOutQuantityInput = ({ value }) => {
    if (value === '') {
      handleProductCart(0);
    }
  };

  useEffect(() => {
    updateProductQuantity();
  }, [cart]);

  return (
    <Grid templateColumns="repeat(12, 1fr)" overflowY="auto" p={2} boxShadow="inner" borderRadius="8px" h="100px">
      <GridItem colSpan={2} rowSpan={3} border="1px solid rgba(40, 200, 100, 0.3)" borderRadius="8px" h="100%">
        <Image src={product.image} borderRadius="8px" w="100%" h="100%" objectFit="contain" />
      </GridItem>
      <GridItem colSpan={9} pt={1} fontSize="sm" ml={2}>
        {product.name}
      </GridItem>
      <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
        <Button w="100%" h="100%" size="xs" fontWeight={900} borderRadius="8px 8px 0 0" colorScheme="whatsapp" onClick={() => handleProductCart(1)}>+</Button>
      </GridItem>
      <GridItem colSpan={9} display="flex" justifyContent="space-between" ml={2}>
        <Text fontSize="xs" colorScheme="whatsapp" display="flex" alignItems="center">
          {`${product.measurement.amount}${product.measurement.unit}`}
        </Text>
      </GridItem>
      <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
        <Input
          w="100%"
          h="100%"
          size="xs"
          borderRadius={0}
          textAlign="center"
          value={inputQuantity}
          onChange={({ target }) => handleQuantityInput(target)}
          onBlur={({ target }) => onFocusOutQuantityInput(target)}
        />
      </GridItem>
      <GridItem colSpan={9} pb={1} display="flex" justifyContent="space-between" ml={2}>
        <Badge fontSize="xs" colorScheme="whatsapp" display="flex" alignItems="center">
          {`Preço ${product.price.toFixed(2)}`}
        </Badge>
      </GridItem>
      <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
        <Button w="100%" h="100%" size="xs" fontWeight={900} borderRadius="0 0 8px 8px" colorScheme="whatsapp" onClick={() => handleProductCart(-1)}>-</Button>
      </GridItem>
    </Grid>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    measurement: PropTypes.shape(),
    image: PropTypes.string,
  }).isRequired,
};

export default CartItem;
