import * as types from './location.types';

export const setInitialLocation = (initLocation) => ({
    type: types.SET_INITIAL_LOCATION,
    payload: {initLocation},
});
