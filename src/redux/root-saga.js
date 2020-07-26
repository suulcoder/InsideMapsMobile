import {fork, all} from 'redux-saga/effects';

import {
    watchLoginStarted,
    watchRefreshTokenStarted,
    watchSignUpStarted,
} from './auth/auth.sagas';

import {watchFilteredPlaces} from './search/search.sagas';

function* rootSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchSignUpStarted),
        fork(watchFilteredPlaces),
    ]);
}

export default rootSaga;
