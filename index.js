/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {ApplicationProvider} from '@ui-kitten/components';
import App from './App';

import * as eva from '@eva-design/eva';
import {name as appName} from './app.json';
import {default as theme} from './theme.json';

//store
import {store, persistor} from './src/redux/store';

const Root = () => (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </ApplicationProvider>
);

AppRegistry.registerComponent(appName, () => Root);
