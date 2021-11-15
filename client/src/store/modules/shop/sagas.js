import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import types from './types';
import api from '../../../apis/sos-produtor';
import { setProducersAction } from './actions';

export function* requestProducers() {
  const request = yield call(api.get, '/producer');
  const response = request.data;

  yield put(setProducersAction(response));
}

export default all([takeLatest(types.REQUEST_PRODUCERS, requestProducers)]);
