import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
} from 'redux-saga/effects';

import { API_URL, URL } from '../../configuration'
import { bodyParser } from '../modules/parser';
import {Actions} from 'react-native-router-flux'
import * as actions from '../actions/auth';
import * as selectors from '../reducers';
import * as types from '../types/auth';


const API_BASE_URL =  API_URL + 'api/v1/auth';

function* login(action) {

  try {
    const response = yield call(
      fetch,  
      `${API_BASE_URL}/signin/`,
      {
        method: 'POST',
        body: bodyParser(action.payload),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    if (response.status === 200) {
      const { token } = yield response.json();
      yield put(actions.completeLogin(token));
    } else {
      const { message } = yield response.json();
      yield put(actions.failLogin(message));
    }

  } catch (error) {
    yield console.log(message)
    yield put(actions.failLogin('CONNECTION FAILED'));
  }
}


export function* watchLoginStarted() {
  yield takeEvery(
    types.AUTHENTICATION_STARTED,
    login,
  );
}

function* refreshToken(action) {
  const expiration = yield select(selectors.getAuthExpiration);
  const now =  parseInt(new Date().getTime() / 1000);

  if (expiration - now < 3600) {
    try {
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/token-refresh/`,
        {
          method: 'POST',
          body: JSON.stringify({ token }),
          headers:{
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        const jResponse = yield response.json();
        yield put(actions.completeTokenRefresh(jResponse.token));
      } else {
        // TODO: poner un redirect al home (login)
        const { non_field_errors } = yield response.json();
        yield put(actions.logout());
        if(typeof document !== 'undefined'){
          window.location.href = URL+'login/'
        }
        else{
          Actions.replace('Login')
        }
      }
    } catch (error) {
      // TODO: poner un redirect al home (login)
      yield put(actions.failTokenRefresh('CONNECTION FAILED'));
    }
  }
}

export function* watchRefreshTokenStarted() {
  yield takeEvery(
    types.TOKEN_REFRESH_STARTED,
    refreshToken,
  );
}

function* signup(action) {
  try {
    const response = yield call(
      fetch,  
      `${API_BASE_URL}/signup/`,
      {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (response.status >= 200 && response.status <= 300) {
        const { email, password } = action.payload;
        yield put(actions.startLogin(email, password));
    } else if (response.status >= 500 && response.status <= 600){
        yield put(actions.failRegistration('Email is already registered',1));
    } else {
      const data = yield response.json(); 
      yield put(actions.failRegistration(data[0].msg)); 
    }

  } catch (error) {
    yield put(actions.failRegistration('CONNECTION FAILED'));
  }
  
}

export function* watchSignUpStarted() {
  yield takeEvery(
    types.REGISTRATION_STARTED,
    signup,
  );
}