import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';

//store
import { store, persistor } from './js/redux/store';
//screens
import Home from './js/screens/Home';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
                />

              </Stack.Navigator>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    );
  }
}

const headerOptions = {
  title: 'Title',
  headerStyle: {
    backgroundColor: '#438FCB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Tahu!',
    fontSize: 25,
  },
};
