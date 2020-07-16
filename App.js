import { createStore, applyMiddleware } from 'redux';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from "react-native-router-flux";
import { StyleSheet } from 'react-native';
import {loadState,saveState} from './store'
import createSagaMiddleware from 'redux-saga';
import Login from './src/components/Login';
import mainSaga from './src/sagas';
import React from 'react';
import reducer from './src/reducers';
import SignUp from './src/components/SignUp';
import throttle from 'lodash/throttle'

//localStorage.clear();
let persistedState = undefined
if(loadState()!==undefined){
  persistedState = {
    auth: loadState().auth,
    user: {
      user: loadState().user.user
    }
  }
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,persistedState,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);
store.subscribe(throttle(()=>{
  saveState(store.getState());
}),5000)

export default function App() {
  return (
    <Provider store={store}>
        <Router>
          <Stack key="root" style={styles.container}>
            <Scene key="Login"  component={Login} hideNavBar={true} />
            <Scene key="SignUp" component={SignUp}  hideNavBar={true} />
          </Stack>
        </Router>        
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
