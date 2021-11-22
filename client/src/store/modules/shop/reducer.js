import produce from 'immer';

import types from './types';
import { localStorageCart, localStorageCartPrice, localStorageCartQuantity } from '../../../localStorage/cart';
import localStorageLogin from '../../../localStorage/login';

const INITIAL_STATE = {
  customer: {},
  producers: [],
  selectedProducerMapMarker: null,
  mapCenter: { lat: -25.390721, lng: -51.462810 },
  producer: {},
  cart: localStorageCart(),
  totalCartQuantity: localStorageCartQuantity(),
  totalCartPrice: localStorageCartPrice(),
  transactionFee: 0.1,
  defaultSeller: {
    seller_id: 'sos-produtor-seller-id',
    percentage: 10,
    liable: true,
  },
  login: localStorageLogin(),
};

const changeProductCartQuantity = (id, quantity, cart) => cart.map((product) => {
  if (product._id === id) return { ...product, quantity };
  return product;
});

const addProductToCart = (newProduct, quantity, cart) => (
  [...cart, { ...newProduct, quantity }]);

const deleteProductFromCart = (id, cart) => {
  const newCart = cart.filter((product) => {
    const { _id: productId } = product;
    return productId !== id;
  });
  return newCart;
};

const handleProductCart = (newProduct, quantity, cart) => {
  const productExistsOnCart = cart.find((product) => product._id === newProduct._id);

  // eslint-disable-next-line default-case
  switch (quantity) {
    case 1:
      if (productExistsOnCart) {
        return changeProductCartQuantity(newProduct._id, productExistsOnCart.quantity + 1, cart);
      }

      return addProductToCart(newProduct, 1, cart);

    case -1:
      if (productExistsOnCart) {
        if (productExistsOnCart.quantity > 1) {
          return changeProductCartQuantity(newProduct._id, productExistsOnCart.quantity - 1, cart);
        }
        return deleteProductFromCart(newProduct._id, cart);
      }
      break;

    default:
      if (productExistsOnCart) {
        if (quantity !== 0) {
          return changeProductCartQuantity(newProduct._id, quantity, cart);
        }
        return deleteProductFromCart(newProduct._id, cart);
      }
      return addProductToCart(newProduct, quantity, cart);
  }
  return cart;
};

const shop = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.customer = action.customer;
      });
    }

    case types.SET_PRODUCERS: {
      return produce(state, (draft) => {
        draft.producers = action.producers;
      });
    }

    case types.SET_SELECTED_PRODUCER_MAP_MARKER: {
      return produce(state, (draft) => {
        draft.selectedProducerMapMarker = action.id;
      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }

    case types.SET_PRODUCER: {
      return produce(state, (draft) => {
        draft.producer = action.producer;
      });
    }

    case types.HANDLE_PRODUCT_CART: {
      const currentCart = state.cart;
      return produce(state, (draft) => {
        draft.cart = handleProductCart(action.product, action.quantity, currentCart);
        localStorage.setItem('SOS_PRODUTOR_CART', JSON.stringify(draft.cart));
        draft.totalCartQuantity = draft.cart.reduce((acc, item) => acc + item.quantity, 0);
        draft.totalCartPrice = (
          draft.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2);
      });
    }

    case types.SET_LOGIN: {
      return produce(state, (draft) => {
        if (action.login._id) {
          draft.login = action.login;
          localStorage.setItem('SOS_PRODUTOR_LOGIN', JSON.stringify(draft.login));
        }
      });
    }

    default:
      return state;
  }
};

export default shop;
