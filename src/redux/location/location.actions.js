import * as types from './location.types';

export const setInitialLocation = (initLocation) => ({
    type: types.SET_INITIAL_LOCATION,
    payload: {initLocation},
});

export const startSettingDestinationPath = (endNode) => ({
    type: types.SET_DESTINATION_PATH_STARTED,
    payload: {endNode},
});

export const completeSettingDestinationPath = (path) => ({
    type: types.SET_DESTINATION_PATH_COMPLETED,
    payload: {path},
});

export const failSettingDestinationPath = (error) => ({
    type: types.SET_DESTINATION_PATH_FAILED,
    payload: {error},
});

export const deleteCurrentNode = () => ({
   type: types.CURRENT_NODE_DELETED, 
});
