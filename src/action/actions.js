import { createAction } from 'redux-actions'

export const requestDogLoading= createAction('REQUESTED_DOG_LOADING');
export const requestDogSuccess = createAction('REQUESTED_DOG_SUCCEEDED');
export const requestDogError = createAction(' requestDogError');
export const fetchDog = createAction('fetchDog')





