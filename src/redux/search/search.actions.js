import * as types from './search.types';

export const startSearchingPlaces = (query) => ({
    type: types.SEARCH_PLACES_STARTED,
    payload: {query},
});

export const completeSearchingPlaces = (entities, order) => ({
    type: types.SEARCH_PLACES_COMPLETED,
    payload: {entities, order},
});

export const failSearchingPlaces = (error) => ({
    type: types.SEARCH_PLACES_FAILED,
    payload: {error},
});
