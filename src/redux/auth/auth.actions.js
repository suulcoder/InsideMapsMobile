import * as types from './auth.types';

export const startLogin = (email, password) => ({
    type: types.AUTHENTICATION_STARTED,
    payload: {email, password},
});

export const startGuestLogin = () => ({
    type: types.GUEST_AUTHENTICATION_STARTED,
});

export const completeLogin = (token) => ({
    type: types.AUTHENTICATION_COMPLETED,
    payload: {token},
});

export const failLogin = (error) => ({
    type: types.AUTHENTICATION_FAILED,
    payload: {error},
});

export const startUserUpdate = (payload) => ({
    type: types.UPDATE_STARTED,
    payload,
});

export const completeUserUpdate = () => ({
    type: types.UPDATE_COMPLETED
});

export const failUserUpdate = (error) => ({
    type: types.UPDATE_FAILED,
    payload: {error},
});

export const startRegistration = (
    name,
    lastname,
    username,
    email,
    password,
    age,
    gender,
) => ({
    type: types.REGISTRATION_STARTED,
    payload: {
        firstname: name,
        lastname,
        username,
        email,
        password,
        age,
        gender,
        role: 1,
    },
});

export const completeRegistration = () => ({
    type: types.REGISTRATION_COMPLETED,
});

export const failRegistration = (error) => ({
    type: types.REGISTRATION_FAILED,
    payload: {error},
});

export const logout = () => ({
    type: types.AUTHENTICATION_IDENTITY_CLEARED,
});

export const startTokenRefresh = () => ({
    type: types.TOKEN_REFRESH_STARTED,
});

export const completeTokenRefresh = (newToken) => ({
    type: types.TOKEN_REFRESH_COMPLETED,
    payload: {newToken},
});

export const failTokenRefresh = (error) => ({
    type: types.TOKEN_REFRESH_FAILED,
    payload: {error},
});
