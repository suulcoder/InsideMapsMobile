'use strict';

import React, { useState } from 'react';
import styles from './styles'

import {
  Text,
  View,
  Button
} from 'react-native';

import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as actions from '../../redux/Location/actions'

const Scan = ({navigation, reset, setData}) => {

  const [error, changeError] = useState('')
  const onSuccess = e => {
    try {
        console.log(e.data)
        const location = JSON.parse(e.data)
        if(location.id && location.node && location.x && location.y && location.z){
            setData(location)
            navigation.push('Home')
        }
        else{
            changeError('The code is not valid')    
        }
    } catch (error) {
        changeError('The code is not valid')
    }
  };

    return (
      <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>
            To find your location search for a {' '}
            <Text style={styles.textBold}>QR code</Text> in 
            the building and then scan it
          </Text>
        }
        bottomContent={
            <View>
                <Text style={error?styles.error:styles.buttonText}>{error?error:'INSIDE MAPS'}</Text>
            </View>
        }
      />
    );
}


export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        setData(data){
            //Data in the QR code must have the following format:
            //It must be an string to Parse with JSON. like this example:
            //{id: 'vsdf-sdf3e92039-dv16s5',node: '235-8fdsdf-dsf4sdf6',x: 165.8,y: 9997.8,z: 3,inside_maps:true}
            dispatch(actions.change_location(data))
        }
    }),
)(Scan);

