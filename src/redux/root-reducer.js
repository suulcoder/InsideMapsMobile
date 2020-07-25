import {combineReducers} from 'redux';
import auth, * as authSelectors from './auth/auth.reducer';

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;

export const getAuthenticatingError = (state) =>
    authSelectors.getAuthenticatingError(state.auth);
export const getAuthExpiration = (state) =>
    authSelectors.getAuthExpiration(state.auth);
export const getAuthToken = (state) => authSelectors.getAuthToken(state.auth);
export const getAuthUserID = (state) => authSelectors.getAuthUserID(state.auth);
export const getAuthUsername = (state) =>
    authSelectors.getAuthUsername(state.auth);
export const getIsAuthenticating = (state) =>
    authSelectors.getIsAuthenticating(state.auth);
export const getIsRefreshingToken = (state) =>
    authSelectors.getIsRefreshingToken(state.auth);
export const getIsRegistrating = (state) =>
    authSelectors.getIsRegistrating(state.auth);
export const getRefreshingError = (state) =>
    authSelectors.getRefreshingError(state.auth);
export const getSignUpError = (state) =>
    authSelectors.getSignUpError(state.auth);
export const isAuthenticated = (state) => getAuthToken(state) !== null;