import * as types from './logbook.types';

export const startFetchingLogbook = () => ({
    type: types.LOGBOOK_FETCHING_STARTED,
  });

export const completeFetchingLogbook = (entities, order) => ({
    type: types.LOGBOOK_FETCHING_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchingLogbook = error => ({
    type: types.LOGBOOK_FETCHING_FAILED,
    payload: {
        error,
    },
});