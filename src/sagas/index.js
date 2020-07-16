import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  watchRefreshTokenStarted,
  watchSignUpStarted,
} from './auth';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchSignUpStarted),
  ]);
}


export default mainSaga;
