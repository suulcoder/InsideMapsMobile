import jwtDecode from 'jwt-decode';
import {combineReducers} from 'redux';

import * as types from './auth.types';

const GUEST_ROLE = 3;

const token = (state = null, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }
        case types.GUEST_AUTHENTICATION_STARTED: {
            return null;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return action.payload.token;
        }
        case types.TOKEN_REFRESH_COMPLETED: {
            return action.payload.newToken;
        }
        case types.AUTHENTICATION_FAILED: {
            return null;
        }
        case types.AUTHENTICATION_IDENTITY_CLEARED: {
            return null;
        }
        default:
            return state;
    }
};

const decoded = (state = null, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }
        case types.GUEST_AUTHENTICATION_STARTED: {
            return null;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return jwtDecode(action.payload.token);
        }
        case types.TOKEN_REFRESH_COMPLETED: {
            return jwtDecode(action.payload.newToken);
        }
        case types.AUTHENTICATION_FAILED: {
            return null;
        }
        case types.AUTHENTICATION_IDENTITY_CLEARED: {
            return null;
        }
        case types.UPDATE_STARTED: {
            return {...state, ...action.payload};
        }
    }

    return state;
};

const isAuthenticating = (state = false, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_STARTED: {
            return true;
        }
        case types.GUEST_AUTHENTICATION_STARTED: {
            return true;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return false;
        }
        case types.AUTHENTICATION_FAILED: {
            return false;
        }
    }

    return state;
};

const isRegistrating = (state = false, action) => {
    switch (action.type) {
        case types.REGISTRATION_STARTED: {
            return true;
        }
        case types.REGISTRATION_COMPLETED: {
            return false;
        }
        case types.REGISTRATION_FAILED: {
            return false;
        }
    }

    return state;
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }
        case types.GUEST_AUTHENTICATION_STARTED: {
            return null;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return null;
        }
        case types.AUTHENTICATION_FAILED: {
            return action.payload.error;
        }
    }

    return state;
};

const errorSignup = (state = null, action) => {
    switch (action.type) {
        case types.REGISTRATION_STARTED: {
            return null;
        }
        case types.REGISTRATION_COMPLETED: {
            return null;
        }
        case types.REGISTRATION_FAILED: {
            return action.payload.error;
        }
    }

    return state;
};

const isRefreshing = (state = false, action) => {
    switch (action.type) {
        case types.TOKEN_REFRESH_STARTED: {
            return true;
        }
        case types.TOKEN_REFRESH_COMPLETED: {
            return false;
        }
        case types.TOKEN_REFRESH_FAILED: {
            return false;
        }
    }

    return state;
};

const refreshingError = (state = null, action) => {
    switch (action.type) {
        case types.TOKEN_REFRESH_STARTED: {
            return null;
        }
        case types.TOKEN_REFRESH_COMPLETED: {
            return null;
        }
        case types.TOKEN_REFRESH_FAILED: {
            return action.payload.error;
        }
    }

    return state;
};

const auth = combineReducers({
    token,
    decoded,
    isAuthenticating,
    isRefreshing,
    isRegistrating,
    errorSignup,
    error,
    refreshingError,
});

export default auth;

export const getAuthToken = (state) => state.token;
export const getIsAuthenticating = (state) => state.isAuthenticating;
export const getIsRegistrating = (state) => state.isRegistrating;
export const getAuthenticatingError = (state) => state.error;
export const getAuthUserID = (state) =>
    state.decoded ? state.decoded.userId : null;
export const getAuthExpiration = (state) =>
    state.decoded ? state.decoded.exp : null;
export const getAuthUserUsername = (state) =>
    state.decoded ? state.decoded.username : null;
export const getAuthUserFirstName = (state) =>
    state.decoded ? state.decoded.firstname : null;
export const getAuthUserLastName = (state) =>
    state.decoded ? state.decoded.lastname : null;
export const getAuthUserGender = (state) =>
    state.decoded ? state.decoded.gender : null;
export const getAuthUserAge = (state) =>
    state.decoded ? state.decoded.age : null;

export const getIsAuthUserGuest = (state) =>
    state.decoded ? state.decoded.role === GUEST_ROLE : null;

export const getIsRefreshingToken = (state) => state.isRefreshing;
export const getRefreshingError = (state) => state.refreshingError;
export const getSignUpError = (state) => state.errorSignup;
