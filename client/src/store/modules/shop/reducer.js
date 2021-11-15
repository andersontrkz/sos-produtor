import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  customer: {},
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

    default:
      return state;
  }
};

export default shop;
