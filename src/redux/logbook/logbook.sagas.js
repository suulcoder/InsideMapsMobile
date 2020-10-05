import {call, takeEvery, put, select} from 'redux-saga/effects';
import {normalize} from 'normalizr';

import * as actions from './logbook.actions';
import * as types from './logbook.types';
import * as schemas from './logbook.schemas';

import * as selectors from '../root-reducer';
import {API_URL} from '../../../configuration';

const API_BASE_URL = API_URL + 'api/v1/';

function* fetchLogbook(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
            const userId = yield select(selectors.getAuthUserID);
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/logbook/${userId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                },
            );

            if (response.status === 200) {
                const jsonResult = yield response.json();
                const {
                    entities: {logbookitems},
                    result,
                } = normalize(jsonResult.result, schemas.logbookitems);

                yield put(actions.completeFetchingLogbook(logbookitems, result));
            } else {
                yield put(
                    actions.failFetchingLogbook('Fail retrieving loogbook items'),
                );
            }
        }
    } catch (error) {
        console.log(error);
        yield put(actions.failFetchingLogbook(error));
    }
}

export function* watchLogbookFetch() {
    yield takeEvery(types.LOGBOOK_FETCHING_STARTED, fetchLogbook);
}
