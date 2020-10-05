import {fork, all} from 'redux-saga/effects';

import {
    watchLoginStarted,
    watchRefreshTokenStarted,
    watchSignUpStarted,
    watchUserUpdate,
} from './auth/auth.sagas';

import {watchFilteredPlaces} from './search/search.sagas';

import {watchFetchDestinationPath} from './location/location.sagas';

import {watchLogbookFetch} from './logbook/logbook.sagas';

function* rootSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchSignUpStarted),
        fork(watchFilteredPlaces),
        fork(watchFetchDestinationPath),
        fork(watchUserUpdate),
        fork(watchLogbookFetch)
    ]);
}

export default rootSaga;
