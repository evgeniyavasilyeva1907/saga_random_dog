import {put, takeEvery} from 'redux-saga/effects';
import {requestDogLoading, requestDogSuccess, requestDogError } from '../action/actions'
import axios  from 'axios'

 export function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
  }
  
  function* fetchDogAsync() {

    try {
      yield put(requestDogLoading());
      const {data} = yield axios.get('https://dog.ceo/api/breeds/image/random')
      debugger
      yield put(requestDogSuccess(data));
    } catch (error) {
      yield put(requestDogError());
    }
  }