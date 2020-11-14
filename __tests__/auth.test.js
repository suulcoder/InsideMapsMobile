import * as types from '../src/redux/auth/auth.types';
import * as actions from '../src/redux/auth/auth.actions';

describe('authAction', () => {
  it('should start login', () => {
    const expectedAction = {
      type: types.AUTHENTICATION_STARTED,
      payload: { email:'saul@gmail.com',  password:'suulpeelos'},
    }
    expect(actions.startLogin('saul@gmail.com','suulpeelos')).toEqual(expectedAction)
  });

  it('should complete login', () => {
    const token = '1kjlkj31'
    const expectedAction = {
      type: types.AUTHENTICATION_COMPLETED,
      payload: { token }
    }
    expect(actions.completeLogin(token)).toEqual(expectedAction)
  });

  it('should fail login', () => {
    const expectedAction = {
      type: types.AUTHENTICATION_FAILED,
      payload: { error:"WRITE A VALID EMAIL"},
    }
    expect(actions.failLogin("WRITE A VALID EMAIL")).toEqual(expectedAction)
  });

  it('should login guest', () => {
    const expectedAction = {
      type: types.GUEST_AUTHENTICATION_STARTED
    }
    expect(actions.startGuestLogin()).toEqual(expectedAction)
  });

  it('should start update', () => {
    const expectedAction = {
      type: types.UPDATE_STARTED,
      payload: { email:'saul@gmail.com',  name:'suulpeelos'},
    }
    expect(actions.startUserUpdate({ email:'saul@gmail.com',  name:'suulpeelos'})).toEqual(expectedAction)
  });

  it('should complete update', () => {
    const expectedAction = {
      type: types.UPDATE_COMPLETED,
    }
    expect(actions.completeUserUpdate()).toEqual(expectedAction)
  });

  it('should fail update', () => {
    const expectedAction = {
      type: types.UPDATE_FAILED,
      payload: { error:"WRITE A VALID EMAIL"},
    }
    expect(actions.failUserUpdate("WRITE A VALID EMAIL")).toEqual(expectedAction)
  });

  it('should start signup', () => {
    const expectedAction = {
      type: types.REGISTRATION_STARTED,
      payload: { 
          firstname: 'saul', 
          lastname:'contreras', 
          username:'saul@gmail.com', 
          email:'saul@gmail.com', 
          password:'suulpeelos', 
          age:'19', 
          gender:'Male',
          role:1
        },
      }
    expect(actions.startRegistration('saul','contreras','saul@gmail.com','saul@gmail.com','suulpeelos',
    '19','Male',1)).toEqual(expectedAction)
  });

  it('should complete registration', () => {
    const expectedAction = {
      type: types.REGISTRATION_COMPLETED
    }
    expect(actions.completeRegistration()).toEqual(expectedAction)
  });

  it('should fail registration', () => {
    const expectedAction = {
      type: types.REGISTRATION_FAILED,
      payload: {error: "REGISTRATION FAILED"}
    }
    expect(actions.failRegistration("REGISTRATION FAILED")).toEqual(expectedAction)
  });

  it('should start token refresh', () => {
    const expectedAction = {
      type: types.TOKEN_REFRESH_STARTED,
    }
    expect(actions.startTokenRefresh()).toEqual(expectedAction)
  });

  it('should complete token refresh', () => {
    const newToken = '1kjlkj31'
    const expectedAction = {
      type: types.TOKEN_REFRESH_COMPLETED,
      payload: { newToken }
    }
    expect(actions.completeTokenRefresh(newToken)).toEqual(expectedAction)
  });

  it('should fail token refresh', () => {
    const expectedAction = {
      type: types.TOKEN_REFRESH_FAILED,
      payload: { error: "Token expired"},
    }
    expect(actions.failTokenRefresh("Token expired")).toEqual(expectedAction)
  });

  it('should logout', () => {
    const expectedAction = {
      type: types.AUTHENTICATION_IDENTITY_CLEARED
    }
    expect(actions.logout()).toEqual(expectedAction)
  });
})