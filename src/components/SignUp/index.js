import { connect } from 'react-redux';
import { Text, View, TextInput, Image, Switch } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import { Link } from "react-router-dom";
import { Actions } from 'react-native-router-flux';
import { validateEmail } from '../../utils/validate';
import { LinearGradient } from 'expo-linear-gradient';

const SignUp = ({
  onSubmit,
  isLoading,
  error = null,
}) => {

  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  const [email, changeEmail] = useState('');
  const [confirmPassword, changeConfirmation] = useState('');
  const [name, changeName] = useState("");
  const [lastname, changeLastname] = useState("");
  const [age, changeAge] = useState("0");
  const [sex, changesex] = useState(true);
  const toggleSwitch = (previousState) => changesex(!previousState);
  
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
      <Image style={styles.logo} source={require('../../public/static/img/logo.png')} ></Image>
      <TextInput
        style={styles.input_}
        type="text"
        placeholder="username"
        value={username}
        placeholderTextColor="#999999"   
        onChangeText={changeUsername}
      />
      <TextInput
        style={styles.input_}
        keyboardType={'email-address'}
        type="email"
        placeholderTextColor="#999999"
        placeholder="email"
        value={email}   
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          type="text"
          placeholder="name"
          value={name}
          placeholderTextColor="#999999"   
          onChangeText={changeName}
        />
        <TextInput
          style={styles.input}
          type="text"
          placeholder="lastname"
          value={lastname}
          placeholderTextColor="#999999"   
          onChangeText={changeLastname}
        />
      </View>
      <View style={styles.row}>    
        <TextInput
            style={styles.input}
            type="password"
            secureTextEntry={true}
            placeholder="password"
            value={password}
            placeholderTextColor="#999999"
            onChangeText={changePassword}
        />
        <TextInput
            style={styles.input}
            type="password"
            secureTextEntry={true}
            placeholderTextColor="#999999"
            placeholder="confirm password"
            value={confirmPassword}
            onChangeText={changeConfirmation}
        />
      </View>
      <View style={styles.row_}>
        <View style={styles.row__}>
          <Text style={styles.text}>{'Age: '} </Text> 
          <TextInput
              style={styles.input__}
              keyboardType={'numeric'}
              placeholder="Age"
              value={age}
              placeholderTextColor="#999999"
              onChangeText={changeAge}
          />
        </View>
        <View style={styles.row__}>
          <Text style={styles.text}>{'Gender:    M '} </Text> 
          <Switch
            trackColor={{ false: colors.suplementary, true: colors.secondary }}
            thumbColor={sex ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={()=>toggleSwitch(sex)}
            value={sex}
          />  
          <Text style={styles.text}>{'    F'} </Text>
        </View> 
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
                      () => onSubmit(name, lastname, user, email, password, age, sex, passwordConfirmusername,password, email, confirmPassword)
                  }>{'SIGN UP'}</Text>
              </View>
              <View style={styles.option}>
                <Text style={styles.text} >{"I have an account  "}</Text>
                {
                  (typeof document === 'undefined')?(
                    <Text style={styles.link} title={' login '} type="submit" 
                    onPress={() =>
                      Actions.replace('Login')
                    }>{' login '}</Text>
                  ):(
                    <Link to="/login" style={styles.navItem}>
                      <Text style={styles.text}>{' login '}</Text>
                    </Link>
                  )
                }
                
              </View>
            </View>
          )
        }
      </View>
      </LinearGradient>
    </View>
  );
} 

export default mySignUp = connect(
  state => ({
    isLoading: selectors.getIsRegistrating(state),
    error: selectors.getSignUpError(state),
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch => ({
    onSubmit(name, lastname, user, email, password, age, sex, passwordConfirm) {
      if (user && password && lastname && name && email && age) {
        if (password === passwordConfirm) {
          if (age > 0 || !age) {
            if (validateEmail(email)) {
              dispatch(
                actions.startSignUp(
                  name,
                  lastname,
                  user,
                  email,
                  password,
                  age,
                  sex ? 0 : 1
                )
              );
            } else {
              dispatch(actions.failLogin("WRITE A VALID EMAIL", 1));
            }
          } else {
            dispatch(actions.failLogin("WRITE A VALID AGE", 1));
          }
        } else {
          dispatch(actions.failLogin("PASSWORDS MUST MATCH", 1));
        }
      } else if (!user) {
        dispatch(actions.failLogin("USER FIELD MUST NOT BE EMPTY", 1));
      } else if (!password) {
        dispatch(actions.failLogin("PASSWORD FIELD MUST NOT BE EMPTY", 1));
      } else if (!name) {
        dispatch(actions.failLogin("NAME FIELD MUST NOT BE EMPTY", 1));
      } else if (!lastname) {
        dispatch(actions.failLogin("LASTNAME FIELD MUST NOT BE EMPTY", 1));
      } else if (!email) {
        dispatch(actions.failLogin("EMAIL FIELD MUST NOT BE EMPTY", 1));
      } else if (!age) {
        dispatch(actions.failLogin("AGE FIELD MUST NOT BE EMPTY", 1));
      }
    },
  }),
  (stateToProps,disptachToProps) => {
    if(stateToProps.isAuthenticated){
        Actions.Home(true)
    }
    return ({...disptachToProps,...stateToProps})
  }
)(SignUp);

