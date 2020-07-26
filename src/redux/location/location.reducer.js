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

export default combineReducers({
    location,
    // combine reducers for now, 'cause more reducers will be added later
});

export const getLocation = (state) => state.location;
