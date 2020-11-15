import * as types from '../src/redux/auth/auth.types';
import auth, * as reducers from '../src/redux/auth/auth.reducer';
import {expect} from 'chai'

describe('auth reducers', ()=>{
    //token
    it('should return initial state', ()=>{
        expect(reducers.token(undefined, {})).equal(null)
    })

    it('should start authentication', ()=>{
        expect(reducers.token(null, {type: types.AUTHENTICATION_STARTED,
            payload: { token:undefined}})).equal(null)
    })
    it('should start authentication as guest', ()=>{
      expect(reducers.token(null, {type: types.GUEST_AUTHENTICATION_STARTED,
          payload: { token:undefined}})).equal(null)
    })
    it('should complete authentication', ()=>{
        expect(reducers.token(null, {type: types.AUTHENTICATION_COMPLETED,
            payload: { token:123}})).equal(123)
    })
    it('should complete token refresh', ()=>{
      expect(reducers.token(null, {type: types.TOKEN_REFRESH_COMPLETED,
          payload: { newToken:123}})).equal(123)
    })
    it('should handle logout', ()=>{
        expect(reducers.token(null, {type: types.AUTHENTICATION_IDENTITY_CLEARED,
            payload: { token:undefined}})).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.token(null, {type: types.AUTHENTICATION_FAILED,
            payload: { token:undefined}})).equal(null)
    })


    //decoded
    it('should start authentication', ()=>{
      expect(reducers.decoded(null, {type: types.AUTHENTICATION_STARTED,
          payload: { token:undefined}})).equal(null)
    })
    it('should start authentication as guest', ()=>{
      expect(reducers.decoded(null, {type: types.GUEST_AUTHENTICATION_STARTED,
          payload: { token:undefined}})).equal(null)
    })
    it('should handle logout', ()=>{
        expect(reducers.decoded(null, {type: types.AUTHENTICATION_IDENTITY_CLEARED,
            payload: { token:undefined}})).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.decoded(null, {type: types.AUTHENTICATION_FAILED,
            payload: { token:undefined}})).equal(null)
    })

    // isAuthenticating
    it('should start authentication', ()=>{
        expect(reducers.isAuthenticating(false, {type: types.AUTHENTICATION_STARTED,
            payload: { username:'lol', password: 'xxx'}})).equal(true)
    })
    it('should start authentication as guest', ()=>{
    expect(reducers.isAuthenticating(false, {type: types.GUEST_AUTHENTICATION_STARTED})).equal(true)
    })
    it('should complete authentication', ()=>{
    expect(reducers.isAuthenticating(false, {type: types.AUTHENTICATION_COMPLETED,
        payload: { token:123}})).equal(false)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.isAuthenticating(false, {type: types.AUTHENTICATION_FAILED,
            payload: { error:'server error'}})).equal(false)
    })

    // isRegistrating
    it('should start registration', ()=>{
        expect(reducers.isRegistrating(false, {type: types.REGISTRATION_STARTED,
            payload: { username:'lol', password: 'xxx'}})).equal(true)
    })
    it('should complete registration', ()=>{
    expect(reducers.isRegistrating(false, {type: types.REGISTRATION_COMPLETED,
        payload: { token:123}})).equal(false)
    })
    it('should handle registration failed', ()=>{
        expect(reducers.isRegistrating(false, {type: types.REGISTRATION_FAILED,
            payload: { error:'server error'}})).equal(false)
    })

    // error
    it('should start authentication', ()=>{
        expect(reducers.error(null, {type: types.AUTHENTICATION_STARTED,
            payload: null })).equal(null)
    })
    it('should start authentication', ()=>{
        expect(reducers.error(null, {type: types.GUEST_AUTHENTICATION_STARTED,
            payload: null })).equal(null)
    })
    it('should complete authentication', ()=>{
    expect(reducers.error(null, {type: types.AUTHENTICATION_COMPLETED,
        payload: null })).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.error(null, {type: types.AUTHENTICATION_FAILED,
            payload: { error:'server error'}})).equal('server error')
    })

    // errorSignup
    it('should start registration', ()=>{
        expect(reducers.errorSignup(null, {type: types.REGISTRATION_STARTED,
            payload: null })).equal(null)
    })
    it('should complete registration', ()=>{
    expect(reducers.errorSignup(null, {type: types.REGISTRATION_COMPLETED,
        payload: null })).equal(null)
    })
    it('should handle registration failed', ()=>{
        expect(reducers.errorSignup(null, {type: types.REGISTRATION_FAILED,
            payload: { error:'server error'}})).equal('server error')
    })

    // isRefreshing
    it('should start refreshing', ()=>{
        expect(reducers.isRefreshing(false, {type: types.TOKEN_REFRESH_STARTED,
            payload: null })).equal(true)
    })
    it('should complete refreshing', ()=>{
    expect(reducers.isRefreshing(false, {type: types.TOKEN_REFRESH_COMPLETED,
        payload: { token:123}})).equal(false)
    })
    it('should handle refreshing failed', ()=>{
        expect(reducers.isRefreshing(false, {type: types.TOKEN_REFRESH_FAILED,
            payload: { error:'server error'}})).equal(false)
    })

    // refreshingError 
    it('should start token refresh', ()=>{
        expect(reducers.refreshingError(null, {type: types.TOKEN_REFRESH_STARTED,
            payload: null })).equal(null)
    })
    it('should complete token refresh', ()=>{
    expect(reducers.refreshingError(null, {type: types.TOKEN_REFRESH_COMPLETED,
        payload: null })).equal(null)
    })
    it('should handle token refresh failed', ()=>{
        expect(reducers.refreshingError(null, {type: types.TOKEN_REFRESH_FAILED,
            payload: { error:'server error'}})).equal('server error')
    })
})