import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import types from './types';
import api from '../../../apis/sos-produtor';
import { setProducersAction, setProducerAction, setLoginAction } from './actions';

export function* requestProducers() {
  const request = yield call(api.get, '/producer');
  const response = request.data;

  yield put(setProducersAction(response));
}

export function* requestProducer(payload) {
  const request = yield call(api.get, `/producer/${payload.id}`);
  const response = request.data;

  yield put(setProducerAction(response));
}

export function* requestLoginAction(payload) {
  const request = yield call(api.post, '/login', payload.login);
  const response = request.data;

  yield put(setLoginAction(response));
}

export default all([
  takeLatest(types.REQUEST_PRODUCERS, requestProducers),
  takeLatest(types.REQUEST_PRODUCER, requestProducer),
  takeLatest(types.REQUEST_LOGIN, requestLoginAction),
]);
