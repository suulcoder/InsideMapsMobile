import { connect } from 'react-redux';
import { Text, View, TextInput, Image } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';

const Home = ({}) => {

  return (
    <View >
      
    </View>
  );
} 

export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch => ({
    
  }),
  (stateToProps,disptachToProps) => {
    if(!stateToProps.isAuthenticated){
        Actions.replace('Login')
    }
    return ({...disptachToProps,...stateToProps})
  }
)(Home);