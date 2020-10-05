import {combineReducers} from 'redux';

import * as types from './report.types';

const isReporting = (state = false, action) => {
    switch (action.type) {
        case types.REPORT_STARTED: {
            return true;
        }
        case types.REPORT_COMPLETED: {
            return false;
        }
        case types.REPORT_FAILED: {
            return false;
        }
    }

    return state;
};

const errorOnReport = (state = null, action) => {
    switch (action.type) {
        case types.REPORT_STARTED: {
            return null;
        }
        case types.REPORT_COMPLETED: {
            return null;
        }
        case types.REPORT_FAILED: {
            return action.payload.error;
        }
    }

    return state;
};

const report = combineReducers({
    isReporting,
    errorOnReport
});

export default report;

export const getIsReporting = (state) => state.isReporting;
export const getErrorOnReport = (state) => state.errorOnReport;