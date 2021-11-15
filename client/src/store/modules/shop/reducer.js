const INITIAL_STATE = {
  customer: {},
};

// eslint-disable-next-line default-param-last
const shop = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CUSTOMER': {
      // SET
      return action;
    }

    default:
      return state;
  }
};

export default shop;
