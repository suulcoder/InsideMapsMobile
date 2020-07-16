import { connect } from 'react-redux';
import { Text, View, TextInput, Image } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({
  onSubmit,
  isLoading,
  error = null,
}) => {

  const [email, changeemail] = useState('');
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
        keyboardType={'email-address'}
        type="text"
        placeholder="email"
        value={email}   
        onChangeText={changeemail}
        onChange={e => changeemail(e.target.value)}
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
                <TouchableOpacity onPress={
                      () => onSubmit(email,password)
                  }>
                    <Text style={styles.button} type="submit" >{'LOGIN'}</Text>
                </TouchableOpacity>
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
    onSubmit(email, password) {
      if(email && password){
        dispatch(actions.startLogin(email, password))
      }
      else if(!email){
        dispatch(actions.failLogin('WRITE A VALID EMAIL'))
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