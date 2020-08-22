import {fork, all} from 'redux-saga/effects';

import {
    watchLoginStarted,
    watchRefreshTokenStarted,
    watchSignUpStarted,
} from './auth/auth.sagas';

import {watchFilteredPlaces} from './search/search.sagas';

import {watchFetchDestinationPath} from './location/location.sagas';

function* rootSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchSignUpStarted),
        fork(watchFilteredPlaces),
        fork(watchFetchDestinationPath),
    ]);
}

export default rootSaga;
