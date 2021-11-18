import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, GridItem, Button, Input, Flex, Text, Image, Badge,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { handleProductCartAction } from '../../../store/modules/shop/actions';

const ProductCard = ({
  product,
  product: {
    _id, name, price, image, measurement, benefits,
  },
}) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const [inputQuantity, setInputQuantity] = useState(0);

  const updateProductQuantity = () => {
    console.log('cart');
    console.log(cart);
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
    <GridItem w="60" h="80" maxW="60" maxH="80" boxShadow="xl" borderRadius="8px" bg="#FFF" _hover={{ transform: 'scale(1.05)', transition: '.9s' }}>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={12} minH="19px" maxH="19px">
          {benefits?.free_delivery && (
          <Badge my={2} px={2} borderRadius="0 8px 8px 0" position="relative" zIndex="999" w="fit-content" fontSize="xs" colorScheme="whatsapp" display="flex" alignItems="center">
            Frete Grátis
          </Badge>
          ) }
          {benefits?.discount && (
          <Badge my={2} px={2} borderRadius="0 8px 8px 0" position="relative" zIndex="999" w="fit-content" fontSize="xs" colorScheme="red" display="flex" alignItems="center">
            {`${benefits?.discount} OFF`}
          </Badge>
          )}
          {benefits?.new && (
          <Badge my={2} px={2} borderRadius="0 8px 8px 0" position="relative" zIndex="999" w="fit-content" fontSize="xs" colorScheme="linkedin" display="flex" alignItems="center">
            Novo
          </Badge>
          )}
        </GridItem>
        <GridItem colSpan={12} h="40" display="flex">
          <Image src={image} m="0 auto" objectFit="cover" />
        </GridItem>
        <GridItem mt={1} colSpan={12} display="flex" flexDirection="column" justify="center" textAlign="center">
          <Text minH="44px" maxH="44px" overflowY="auto" fontSize="sm">
            {`${name} - ${measurement.amount + measurement.unit}`}
          </Text>
          <Text>
            {`R$ ${price.toFixed(2)}`}
          </Text>
        </GridItem>
        <GridItem mt={1} colSpan={12} display="flex" flexDirection="column" justify="center" textAlign="center">
          <Flex p={3}>
            <Button colorScheme="whatsapp" borderRadius="8px 0 0 8px" onClick={() => handleProductCart(-1)}>-</Button>
            <Input
              borderRadius={0}
              textAlign="center"
              value={inputQuantity}
              onChange={({ target }) => handleQuantityInput(target)}
              onBlur={({ target }) => onFocusOutQuantityInput(target)}
            />
            <Button colorScheme="whatsapp" borderRadius="0 8px 8px 0" onClick={() => handleProductCart(1)}>+</Button>
          </Flex>
        </GridItem>
      </Grid>
    </GridItem>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    benefits: PropTypes.shape({
      discount: PropTypes.number,
      free_delivery: PropTypes.bool,
      new: PropTypes.bool,
    }),
    image: PropTypes.string,
    measurement: PropTypes.shape({
      amount: PropTypes.number,
      unit: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductCard;
