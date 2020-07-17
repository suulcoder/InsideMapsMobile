import { connect } from 'react-redux';
import { Text, View, TextInput, Image } from 'react-native';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import React, { useState } from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({}) => {

  return (
    <View style={styles.container} >
        <Text> {'PUT THE FUCKING MAP OVER HER.'} </Text>
        <Text> {'Just kidding bro.'} </Text>
        <Text> {'Please put the map here.'} </Text>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.button}>
            <Image style={styles.icon__} source={require('../../public/static/icon/search.png')} ></Image>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../../public/static/img/logo.png')} ></Image>
        <TouchableOpacity style={styles.button}>
            <Image style={styles.icon__} source={require('../../public/static/icon/report.png')} ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.scanButton}>
          <TouchableOpacity onPress={()=>Actions.QRScanner(true)}>
            <Image style={styles.icon_} source={require('../../public/static/icon/qr.png')} ></Image>
          </TouchableOpacity>
      </View>
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