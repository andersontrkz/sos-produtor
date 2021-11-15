import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  customer: {},
  producers: [],
  selectedProducerMapMarker: null,
  mapCenter: { lat: -23.561684, lng: -46.625378 },
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

    case types.SET_MAP_MARKER_SELECTED: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.selectedProducerMapMarker = action.producer;
      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.mapCenter = action.location;
      });
    }

    default:
      return state;
  }
};

export default shop;
