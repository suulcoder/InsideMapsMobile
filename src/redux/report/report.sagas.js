import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    select,
} from 'redux-saga/effects';

import {API_URL} from '../../../configuration';
import {bodyParser} from '../../utils/parser';

import * as actions from './report.actions';
import * as selectors from '../root-reducer';
import * as types from './report.types';

const API_BASE_URL = API_URL + 'api/v1/error-report';

function* report(action) {
    try {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(fetch, `${API_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify({
                ...action.payload,
                user_id: selectors.getAuthUserID,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${token}`,
            },
        });

        if (response.status === 201) {
            const result = yield response.json();
            yield put(actions.completeReport(result.result.path));
        } else {
            yield put(actions.failReport('Fail User Update'));
        }
    } catch (error) {
        yield put(actions.failReport(error));
    }
}

export function* watchReport() {
    yield takeEvery(types.REPORT_STARTED, report);
}
