import * as types from './location.types';
import {combineReducers} from 'redux';

const location = (state = null, action) => {
    switch (action.type) {
        case types.SET_INITIAL_LOCATION: {
            const {initLocation} = action.payload;
            return initLocation;
        }
        default: {
            return state;
        }
    }
};

const destinationPath = (state = null, action) => {
    switch (action.type) {
        case types.SET_DESTINATION_PATH_COMPLETED: {
            const {path, distance, destination} = action.payload.path;
            return {path, distance, destination};
        }
        case types.SET_DESTINATION_PATH_STARTED:
        case types.SET_DESTINATION_PATH_FAILED: {
            return null;
        }
        case types.CURRENT_NODE_DELETED: {
            if (state && state.path) {
                if (state.path.length === 1) {
                    return null;
                }
                return {...state, path: state.path.slice(1)};
            }
            return state;
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    location,
    destinationPath,
});

export const getLocation = (state) => state.location;
export const getDestinationPath = (state) => state.destinationPath;
