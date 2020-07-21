/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Image, Text} from 'react-native';
import {Button, Input} from '@ui-kitten/components';
import styles from './styles';

import * as actions from '../../redux/auth/auth.actions';
import * as selectors from '../../redux/root-reducer';

import * as Navigation from '../../navigation';

const Login = ({onSubmit, isLoading, error = null}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.logoImg}
                        source={require('../../../assets/images/logo.png')}
                    />
                    <Text style={styles.title}>Sign In</Text>
                    {/* <Text style={styles.subTitle}>Essentials</Text> */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <View style={styles.widthLimit}>
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                placeholder={'Email'}
                                onChangeText={setEmail}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder={'Password'}
                                onChangeText={setPassword}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <Text style={styles.error}>{error}</Text>}
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={styles.widthLimit}>
                        {isLoading ? (
                            <View>
                                <Text style={styles.error}>{'LOADING...'}</Text>
                            </View>
                        ) : (
                            <Button
                                innerStyle={styles.buttonInner}
                                style={styles.buttonContainer}
                                onPress={() => onSubmit(email, password)}>
                                Login
                            </Button>
                        )}
                    </View>
                </View>
                <Text style={styles.footText}>
                    Don't have account?{' '}
                    <Text
                        style={styles.extraBold}
                        onPress={() => Navigation.navigate('SignUp')}>
                        Sign Up
                    </Text>
                    .
                </Text>
            </View>
        </ScrollView>
    );
};

export default connect(
    (state) => ({
        isLoading: selectors.getIsAuthenticating(state),
        error: selectors.getAuthenticatingError(state),
        isAuthenticated: selectors.isAuthenticated(state),
    }),
    (dispatch) => ({
        onSubmit(email, password) {
            if (email && password) {
                dispatch(actions.startLogin(email, password));
            } else if (!email) {
                dispatch(actions.failLogin('WRITE A VALID EMAIL'));
            } else if (!password) {
                dispatch(actions.failLogin('WRITE A VALID PASSWORD'));
            }
        },
    }),
    (stateToProps, dispatchToProps) => {
        if (stateToProps.isAuthenticated) {
            console.log('U r authenticated');
            //Actions.replace('Home')
            Navigation.navigate('Home');
        }
        return {...dispatchToProps, ...stateToProps};
    },
)(Login);
