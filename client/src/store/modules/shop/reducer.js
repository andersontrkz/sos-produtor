import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  customer: {},
  producers: [],
  selectedProducerMapMarker: null,
  mapCenter: { lat: -23.561684, lng: -46.625378 },
  producer: {},
  cart: [],
  totalCartQuantity: 0,
  totalCartPrice: 0,
};

const changeProductCartQuantity = (id, quantity, cart) => cart.map((product) => {
  // eslint-disable-next-line no-underscore-dangle
  if (product._id === id) return { ...product, quantity };
  return product;
});

const addProductToCart = (newProduct, quantity, cart) => (
  [...cart, { ...newProduct, quantity }]);

const deleteProductFromCart = (id, cart) => {
  // eslint-disable-next-line no-underscore-dangle
  const newCart = cart.filter((product) => product._id !== id);
  return newCart;
};

const handleProductCart = (newProduct, quantity, cart) => {
  const { _id: id } = newProduct;
  // eslint-disable-next-line no-underscore-dangle
  const productExistsOnCart = cart.find((product) => product._id === id);

  // eslint-disable-next-line default-case
  switch (quantity) {
    case 1:
      if (productExistsOnCart) {
        return changeProductCartQuantity(id, productExistsOnCart.quantity + 1, cart);
      }

      return addProductToCart(newProduct, 1, cart);

    case -1:
      if (productExistsOnCart) {
        if (productExistsOnCart.quantity > 1) {
          return changeProductCartQuantity(id, productExistsOnCart.quantity - 1, cart);
        }
        return deleteProductFromCart(id, cart);
      }
      break;

    default:
      if (productExistsOnCart) {
        if (quantity !== 0) {
          return changeProductCartQuantity(id, quantity, cart);
        }
        return deleteProductFromCart(id, cart);
      }
      return addProductToCart(newProduct, quantity, cart);
  }
  return cart;
};

// eslint-disable-next-line default-param-last
const shop = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.customer = action.customer;
      });
    }

    case types.SET_PRODUCERS: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.producers = action.producers;
      });
    }

    case types.SET_SELECTED_PRODUCER_MAP_MARKER: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.selectedProducerMapMarker = action.id;
      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.mapCenter = action.location;
      });
    }

    case types.SET_PRODUCER: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.producer = action.producer;
      });
    }

    case types.HANDLE_PRODUCT_CART: {
      const currentCart = state.cart;
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.cart = handleProductCart(action.product, action.quantity, currentCart);
        // eslint-disable-next-line no-param-reassign
        draft.totalCartQuantity = draft.cart.reduce((acc, item) => acc + item.quantity, 0);
        // eslint-disable-next-line no-param-reassign
        draft.totalCartPrice = (
          draft.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0));
      });
    }

    default:
      return state;
  }
};

export default shop;
