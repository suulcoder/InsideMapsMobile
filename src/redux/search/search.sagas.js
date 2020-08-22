import {call, takeEvery, put, select} from 'redux-saga/effects';
import {normalize} from 'normalizr';

import * as actions from './search.actions';
import * as types from './search.types';
import * as schemas from './search.schemas';

import * as selectors from '../root-reducer';
import {API_URL} from '../../../configuration';

const API_BASE_URL = API_URL + 'api/v1/';

function* fetchFilteredPlaces(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const {mapId} = yield select(selectors.getLocation);

        if (isAuth) {
            //const token = yield select(selectors.getAuthToken);
            const {query} = action.payload;

            const response = yield call(
                fetch,
                `${API_BASE_URL}/marker/?name=${query}&map=${mapId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        //Authorization: `JWT ${token}`,
                    },
                },
            );

            if (response.status === 200) {
                const jsonResult = yield response.json();
                const {
                    entities: {places},
                    result,
                } = normalize(jsonResult.result, schemas.places);

                yield put(actions.completeSearchingPlaces(places, result));
            } else {
                yield put(
                    actions.failSearchingPlaces('Fail retrieving places'),
                );
            }
        }
    } catch (error) {
        console.log(error);
        yield put(actions.failSearchingPlaces(error));
    }
}

export function* watchFilteredPlaces() {
    yield takeEvery(types.SEARCH_PLACES_STARTED, fetchFilteredPlaces);
}
