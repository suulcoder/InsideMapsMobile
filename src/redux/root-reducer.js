import {combineReducers} from 'redux';
import auth, * as authSelectors from './auth/auth.reducer';
import search, * as searchSelectors from './search/search.reducer';
import location, * as locationSelectors from './location/location.reducer';
import report, * as reportSelectors from './report/report.reducer';
import logbook, * as logbookSelectors from './logbook/logbook.reducer';

const rootReducer = combineReducers({
    auth,
    search,
    location,
    report,
    logbook
});

export default rootReducer;

export const getAuthenticatingError = (state) =>
    authSelectors.getAuthenticatingError(state.auth);
export const getAuthExpiration = (state) =>
    authSelectors.getAuthExpiration(state.auth);
export const getAuthToken = (state) => authSelectors.getAuthToken(state.auth);
export const getAuthUserID = (state) => authSelectors.getAuthUserID(state.auth);
export const getAuthUserUsername = (state) =>
    authSelectors.getAuthUserUsername(state.auth);
export const getAuthUserFirstName = (state) =>
    authSelectors.getAuthUserFirstName(state.auth);
export const getAuthUserLastName = (state) =>
    authSelectors.getAuthUserLastName(state.auth);
export const getAuthUserAge = (state) =>
    authSelectors.getAuthUserAge(state.auth);
export const getAuthUserGender = (state) =>
    authSelectors.getAuthUserGender(state.auth);
export const getIsAuthUserGuest = (state) =>
    authSelectors.getIsAuthUserGuest(state.auth);

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

export const getFilteredPlace = (state, id) =>
    searchSelectors.getFilteredPlace(state.search, id);
export const getFilteredPlaces = (state) =>
    searchSelectors.getFilteredPlaces(state.search);
export const getIsSearching = (state) =>
    searchSelectors.getIsSearching(state.search);
export const getSearchingError = (state) => searchSelectors(state.search);

export const getLocation = (state) =>
    locationSelectors.getLocation(state.location);
export const getDestinationPath = (state) =>
    locationSelectors.getDestinationPath(state.location);

export const getIsReporting = (state) => 
    reportSelectors.getIsReporting(state.report);
export const getErrorOnReport = state =>
    reportSelectors.getErrorOnReport(state.report);

export const getLogbookItem = (state, id) =>
    logbookSelectors.getLogbookItem(state.logbook, id);
export const getLogbookItems = (state) =>
    logbookSelectors.getLogbookItems(state.logbook);
export const getIsFetchingLogbook = (state) =>
    logbookSelectors.getIsFetching(state.logbook);
export const getFetchingLogbookError = (state) =>
    logbookSelectors.getLogbookError(state.logbook);
