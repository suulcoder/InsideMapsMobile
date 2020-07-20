import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import {Button} from '@ui-kitten/components';
import SvgUri from 'react-native-svg-uri';

export default ({ navigation, reset }) => {
  return (
    <SafeAreaView>
      <View style={styles.layout}>
        <Text style={styles.header}>Inside Maps</Text>
        <Text style={styles.subHeader}>a new way to navigate</Text>
        <View style={styles.image}>
          <Image source={require('../../assets/images/logo.png')} style={styles.mainImage} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.loginButton}
            appearance="filled"
            //status="success"
            onPress={() => {
              //reset();
              //navigation.navigate('Dashboard');
            }}>
            Login
          </Button>
          <Button
            style={styles.registerButton}
            appearance="filled"
            //status="warning"
            //onPress={() => navigation.navigate('StartHunt')}
            >
            Register
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    padding: 30,
    backgroundColor: '#438FCB',
  },
  header: {
    fontFamily: 'Tahu!',
    fontSize: 55,
    color: '#fff',
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Tahu!',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 30,
  },
  registerButton: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#455a64',
    borderRadius: 30,
  },
  mainImage: {
    width: 240,
    height: 240,
  },
});
