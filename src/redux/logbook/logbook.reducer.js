import * as types from './logbook.types';
import {combineReducers} from 'redux';

export const byId = (state = {}, action) => {
    switch (action.type) {
        case types.LOGBOOK_FETCHING_COMPLETED: {
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

export const order = (state = [], action) => {
    switch (action.type) {
        case types.LOGBOOK_FETCHING_COMPLETED: {
            return [...action.payload.order];
        }
        default: {
            return state;
        }
    }
};

export const IsFetching = (state = false, action) => {
    switch (action.type) {
        case types.LOGBOOK_FETCHING_STARTED: {
            return true;
        }
        case types.LOGBOOK_FETCHING_COMPLETED:
        case types.LOGBOOK_FETCHING_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

export const error = (state = null, action) => {
    switch (action.type) {
        case types.LOGBOOK_FETCHING_FAILED: {
            return action.payload.error;
        }
        case types.LOGBOOK_FETCHING_STARTED:
        case types.LOGBOOK_FETCHING_COMPLETED: {
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
  IsFetching,
  error,
});

export const getLogbookItem = (state, id) => state.byId[id];
export const getLogbookItems = (state) =>
  state.order.map((id) => getLogbookItem(state, id));
export const getIsFetching = (state) => state.IsFetching;
export const getLogbookError = (state) => state.error;
