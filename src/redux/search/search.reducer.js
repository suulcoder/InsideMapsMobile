import * as types from './search.types';
import {combineReducers} from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.SEARCH_PLACES_COMPLETED: {
            const {entities, order} = action.payload;
            const newState = {};
            order.forEach((id) => {
                newState[id] = {
                    ...entities[id],
                };
            });

            return newState;
        }
        default: {
            return state;
        }
    }
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.SEARCH_PLACES_COMPLETED: {
            return [...action.payload.order];
        }
        default: {
            return state;
        }
    }
};

const isSearching = (state = false, action) => {
    switch (action.type) {
        case types.SEARCH_PLACES_STARTED: {
            return true;
        }
        case types.SEARCH_PLACES_COMPLETED:
        case types.SEARCH_PLACES_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.SEARCH_PLACES_FAILED: {
            return action.payload.error;
        }
        case types.SEARCH_PLACES_STARTED:
        case types.SEARCH_PLACES_COMPLETED: {
            return null;
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    byId,
    order,
    isSearching,
    error,
});

export const getFilteredPlace = (state, id) => state.byId[id];
export const getFilteredPlaces = (state) =>
    state.order.map((id) => getFilteredPlace(state, id));
export const getIsSearching = (state) => state.isSearching;
export const getSearchingError = (state) => state.error;
