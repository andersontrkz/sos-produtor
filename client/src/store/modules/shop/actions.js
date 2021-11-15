import types from './types';

// eslint-disable-next-line import/prefer-default-export
export const setCustomerAction = (customer) => ({ type: types.SET_CUSTOMER, customer });

export const requestProducersAction = () => ({ type: types.REQUEST_PRODUCERS });

export const setProducersAction = (producers) => ({ type: types.SET_PRODUCERS, producers });

export const setMapMarkerSelectedAction = (producer) => (
  { type: types.SET_SELECTED_PRODUCER_MAP_MARKER, producer });

export const setMapCenterAction = (location) => ({ type: types.SET_MAP_CENTER, location });
