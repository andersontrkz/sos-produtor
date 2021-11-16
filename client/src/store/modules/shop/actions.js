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
