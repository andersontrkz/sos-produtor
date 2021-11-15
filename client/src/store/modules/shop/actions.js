import types from './types';

// eslint-disable-next-line import/prefer-default-export
export const setCustomerAction = (customer) => ({ type: types.SET_CUSTOMER, customer });

export const requestProducersAction = () => ({ type: types.REQUEST_PRODUCERS });

export const setProducersAction = (producers) => ({ type: types.SET_PRODUCERS, producers });
