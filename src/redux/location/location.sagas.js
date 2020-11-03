import {call, takeEvery, put, select} from 'redux-saga/effects';
import {bodyParser} from '../../utils/parser';

import * as actions from './location.actions';
import * as types from './location.types';
import * as selectors from '../root-reducer';
import {API_URL} from '../../../configuration';

const API_BASE_URL = API_URL + 'api/v1/';

function* fetchDestinationPath(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const token = yield select(selectors.getAuthToken);
        const location = yield select(selectors.getLocation);
        const {mapId, startNode} = location;
        const {endNode, name} = action.payload;

        console.log(endNode, mapId, startNode);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/navigation/find-shortest-path/${mapId}`,
                {
                    method: 'POST',
                    body: JSON.stringify({startNode, endNode}),
                    /* bodyParser({
                        startNode,
                        endNode,
                    }), */
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `JWT ${token}`,
                    },
                },
            );

            if (response.status === 200) {
                const result = yield response.json();
                yield put(
                    actions.completeSettingDestinationPath({...result.result, destination: name }),
                );
            } else {
                console.log('Result error code:', response.status);

                yield put(
                    actions.failSettingDestinationPath(
                        'Fail retrieving destination path',
                    ),
                );
            }
        }
    } catch (error) {
        console.log(error);
        yield put(actions.failSettingDestinationPath(error));
    }
}

export function* watchFetchDestinationPath() {
    yield takeEvery(types.SET_DESTINATION_PATH_STARTED, fetchDestinationPath);
}
