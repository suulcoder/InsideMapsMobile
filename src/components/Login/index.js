import { connect } from 'react-redux';
import { Text, View, TextInput, Image } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import { reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({
  onSubmit,
  isLoading,
  error = null,
}) => {

  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={[colors.suplementary, colors.primary]}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
      <View style={styles.centered}>
      <Image style={styles.logo} source={require('../../public/static/img/logo.png')} ></Image>
      <TextInput
        style={styles.input}
        className="user"
        placeholderTextColor="#999999" 
        type="text"
        placeholder="username"
        value={username}   
        onChangeText={changeUsername}
        onChange={e => changeUsername(e.target.value)}
      />
      <TextInput
          style={styles.input}
          className="password"
          type="password"
          placeholderTextColor="#999999"
          secureTextEntry={true}
          placeholder="password"
          value={password}
          onChangeText={changePassword}
          onChange={e=>changePassword(e.target.value)}
      />
      <View style={styles.option}>
      </View>
      <View style={styles.errors}>
        {
        error && (
            <Text style={styles.error}>{ error }</Text>
        )
      }
        {
          isLoading ? (
            <View>
              <Text style={styles.error}>{'LOADING...'}</Text>
            </View>
          ) : (
            <View> 
              <View style={styles.button}>
                  <Text style={styles.button} type="submit" onPress={
                      () => onSubmit(username,password)
                  }>{'LOGIN'}</Text>
              </View>
              <View style={styles.option}>
                <Text style={styles.text} >{"I don't have an account  "}</Text>
                    <Text style={styles.link} title={' register now '} type="submit" 
                    onPress={() =>
                      Actions.SignUp(true)
                    }>{' register now '}</Text>
              </View>
            </View>
          )
        }
      </View>
      </View>
      </LinearGradient>
    </View>
  );
} 

export default connect(
  state => ({
    isLoading: selectors.getIsAuthenticating(state),
    error: selectors.getAuthenticatingError(state),
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch => ({
    onSubmit(username, password) {
      if(username && password){
        dispatch(actions.startLogin(username, password))
      }
      else if(!username){
        dispatch(actions.failLogin('WRITE A VALID USERNAME'))
      }
      else if(!password){
        dispatch(actions.failLogin('WRITE A VALID PASSWORD'))
      }
    },
  }),
  (stateToProps,disptachToProps) => {
    if(stateToProps.isAuthenticated){
        Actions.replace('Home')
    }
    return ({...disptachToProps,...stateToProps})
  }
)(Login);