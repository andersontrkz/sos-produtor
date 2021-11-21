import types from './types';

// eslint-disable-next-line import/prefer-default-export
export const setCustomerAction = (customer) => ({ type: types.SET_CUSTOMER, customer });

export const requestProducersAction = () => ({ type: types.REQUEST_PRODUCERS });

export const setProducersAction = (producers) => ({ type: types.SET_PRODUCERS, producers });

export const setMapMarkerSelectedAction = (id) => (
  { type: types.SET_SELECTED_PRODUCER_MAP_MARKER, id });

export const setMapCenterAction = (location) => ({ type: types.SET_MAP_CENTER, location });

export const requestProducerAction = (id) => ({ type: types.REQUEST_PRODUCER, id });

export const setProducerAction = (producer) => ({ type: types.SET_PRODUCER, producer });

export const handleProductCartAction = (product, quantity) => (
  { type: types.HANDLE_PRODUCT_CART, product, quantity });

export const requestLoginAction = (login) => (
  { type: types.REQUEST_LOGIN, login });

export const setLoginAction = (login) => (
  { type: types.SET_LOGIN, login });

export const postProductAction = (product) => (
  { type: types.POST_PRODUCT, product });

export const deleteProductAction = (id) => (
  { type: types.DELETE_PRODUCT, id });

export const patchProducerAddressAction = (id, location) => (
  { type: types.PATCH_PRODUCER_ADDRESS, id, location });

export const patchProducerDataAction = (id, data) => (
  { type: types.PATCH_PRODUCER_DATA, id, data });

export const postProducerAction = (producer) => (
  { type: types.POST_PRODUCER, producer });
