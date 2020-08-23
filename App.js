import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navigationRef, isMountedRef} from './src/navigation';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//screens
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import Scan from './src/screens/Scan';
import Information from './src/screens/Information';

// Redux
import * as selectors from './src/redux/root-reducer';
import {colors} from './configuration';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
function AuthStackNavigator() {
    return (
        <>
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
                <AuthStack.Screen name="Welcome" component={Welcome} />
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="SignUp" component={SignUp} />
                <AuthStack.Screen name="Scan" component={Scan} />
            </AuthStack.Navigator>
        </>
    );
}

const HomeStack = createStackNavigator();
function HomeStackNavigator() {
    return (
        <>
            <HomeStack.Navigator screenOptions={{headerShown: false}}>
                <HomeStack.Screen name="Home" component={Home} />
                <HomeStack.Screen name="Scan" component={Scan} />
                <HomeStack.Screen name="Information" component={Information} />
            </HomeStack.Navigator>
        </>
    );
}

const SeachStack = createStackNavigator();
function SeachStackNavigator() {
    return (
        <>
            <SeachStack.Navigator>
                <SeachStack.Screen name="Search" component={Search} />
            </SeachStack.Navigator>
        </>
    );
}

const ProfileStack = createStackNavigator();
function ProfileStackNavigator() {
    return (
        <>
            <ProfileStack.Navigator>
                <ProfileStack.Screen name="Profile" component={Profile} />
            </ProfileStack.Navigator>
        </>
    );
}

const App = ({isAuthenticated = false}) => {
    useEffect(() => {
        isMountedRef.current = true;
        SplashScreen.hide();

        return () => (isMountedRef.current = false);
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            {isAuthenticated ? (
                <>
                    <Tab.Navigator
                        screenOptions={({route}) => ({
                            tabBarIcon: ({focused, color, size}) => {
                                let iconName;
                                if (route.name === 'Search') {
                                    iconName = 'search';
                                } else if (route.name === 'Navigate') {
                                    iconName = 'map-marked-alt';
                                } else if (route.name === 'Profile') {
                                    iconName = 'user-circle';
                                }

                                return (
                                    <FontAwesome5
                                        name={iconName}
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: colors.secondary,
                            inactiveTintColor: 'gray',
                        }}>
                        <Tab.Screen
                            name="Search"
                            component={SeachStackNavigator}
                        />
                        <Tab.Screen
                            name="Navigate"
                            component={HomeStackNavigator}
                        />
                        <Tab.Screen
                            name="Profile"
                            component={ProfileStackNavigator}
                        />
                    </Tab.Navigator>
                </>
            ) : (
                <>
                    <AuthStackNavigator />
                </>
            )}
        </NavigationContainer>
    );
};

/* const headerOptions = {
    title: 'Title',
    headerStyle: {
        backgroundColor: '#438FCB',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'Tahu!',
        fontSize: 25,
    },
}; */

export default connect(
    (state) => ({
        isAuthenticated: selectors.isAuthenticated(state),
    }),
    undefined,
)(App);
