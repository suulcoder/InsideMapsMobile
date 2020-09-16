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
            const path = action.payload;
            return path;
        }
        case types.SET_DESTINATION_PATH_STARTED:
        case types.SET_DESTINATION_PATH_FAILED: {
            return null;
        }
        case types.DELETE_CURRENT_NODE: {
            //Dont know yet
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    location,
    destinationPath,
    // combine reducers for now, 'cause more reducers will be added later
});

export const getLocation = (state) => state.location;
export const getDestinationPath = (state) => state.destinationPath;
