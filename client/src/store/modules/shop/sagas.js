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
  console.log(response);

  yield put(setLoginAction(response));
}

export function* postProductAction(payload) {
  const request = yield call(api.post, '/product', payload.product);
  const response = request.data;

  console.log(response);
}

export function* deleteProductAction(payload) {
  const request = yield call(api.delete, `/product/${payload.id}`);
  const response = request.data;

  console.log(response);
}

export function* patchProducerAddressAction(payload) {
  console.log(payload);
  const request = yield call(api.patch, `/producer/${payload.id}`, payload);
  const response = request.data;

  console.log(response);
}

export function* patchProducerDataAction(payload) {
  const producer = {
    name: payload.data.name,
    phone: {
      ddd: payload.data.ddd,
      number: payload.data.phone,
    },
    image: payload.data.image,
    seller_id: payload.data.seller_id,
  };
  const request = yield call(api.patch, `/producer/${payload.id}`, producer);
  const response = request.data;

  console.log(response);
}

export function* postProducerAction(payload) {
  const producer = {
    name: payload.producer.name,
    email: payload.producer.email,
    phone: {
      ddd: payload.producer.ddd,
      number: payload.producer.phone,
    },
    password: payload.producer.password,
    image: 'https://yorktonrentals.com/wp-content/uploads/2017/06/usericon.png',
    seller_id: '',
    start_date: new Date(),
  };

  console.log(payload);
  const request = yield call(api.post, '/producer', producer);
  const response = request.data;

  console.log(response);
}

export default all([
  takeLatest(types.REQUEST_PRODUCERS, requestProducers),
  takeLatest(types.REQUEST_PRODUCER, requestProducer),
  takeLatest(types.REQUEST_LOGIN, requestLoginAction),
  takeLatest(types.POST_PRODUCT, postProductAction),
  takeLatest(types.DELETE_PRODUCT, deleteProductAction),
  takeLatest(types.PATCH_PRODUCER_ADDRESS, patchProducerAddressAction),
  takeLatest(types.PATCH_PRODUCER_DATA, patchProducerDataAction),
  takeLatest(types.POST_PRODUCER, postProducerAction),
]);
