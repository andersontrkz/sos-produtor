import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  GridItem, Button, Input, Flex, Text, Image, Badge,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { handleProductCartAction } from '../../../store/modules/shop/actions';

const ProductCard = ({
  product,
  product: {
    _id, name, price, image, measurement,
  },
}) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const [inputQuantity, setInputQuantity] = useState(0);

  const updateProductQuantity = () => {
    // eslint-disable-next-line no-underscore-dangle
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
    // eslint-disable-next-line prefer-regex-literals
    const regex = new RegExp(/^-?\d*\.?\d*$/);
    if (regex.test(value)) {
      if (value !== '') {
        if (parseInt(value[0], 10) === 0 && parseInt(value[1], 10) === 0) {
          handleProductCart(parseInt(value, 10));
        } else {
          // Aceita zero no input
          handleProductCart(value);
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
    <GridItem w="60" h="72" maxW="60" maxH="72" boxShadow="xl" bg="#FFF">
      <Badge w="fit-content" fontSize="0.8em" colorScheme="red" display="flex" alignItems="center">
        {`${-50.00}%`}
      </Badge>
      <Image src={image} maxH="150px" maxW="150px" m="0 auto" />
      <Flex flexDirection="column" justify="center" textAlign="center">
        <Text maxH="50px" overflowY="auto">
          {`${name} - ${measurement.amount + measurement.unit}`}
        </Text>
        <Text>
          {`R$ ${price.toFixed(2)}`}
        </Text>
        <Flex p={4}>
          <Button bg="var(--secondary-color)" color="var(--white-color)" borderRadius="8px 0 0 8px" onClick={() => handleProductCart(-1)}>-</Button>
          <Input
            borderRadius={0}
            textAlign="center"
            value={inputQuantity}
            onChange={({ target }) => handleQuantityInput(target)}
            onBlur={({ target }) => onFocusOutQuantityInput(target)}
          />
          <Button bg="var(--secondary-color)" color="var(--white-color)" borderRadius="0 8px 8px 0" onClick={() => handleProductCart(1)}>+</Button>
        </Flex>
      </Flex>
    </GridItem>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    measurement: PropTypes.shape({
      amount: PropTypes.number,
      unit: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductCard;
