import * as types from './report.types';

export const startReport = (message) => ({
    type: types.REPORT_STARTED,
    payload: {description: message},
});

export const completeReport = () => ({
    type: types.REPORT_COMPLETED
});

export const failReport = (error) => ({
    type: types.REPORT_FAILED,
    payload: {error},
});
