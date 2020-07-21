/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Image, Text, Switch} from 'react-native';
import {Button, Input} from '@ui-kitten/components';
import {validateEmail} from '../../utils/validate';
import * as Navigation from '../../navigation';
import styles from './styles';

import * as actions from '../../redux/auth/auth.actions';
import * as selectors from '../../redux/root-reducer';

const SignUp = ({onSubmit, isLoading, error = null}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState(true);

    const toggleSwitch = (previousState) => setSex(!previousState);

    return (
        <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.logoImg}
                        source={require('../../../assets/images/logo.png')}
                    />
                    <Text style={styles.title}>Sign Up</Text>
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
                                placeholder={'Username'}
                                onChangeText={setUsername}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                placeholder={'Email'}
                                onChangeText={setEmail}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                placeholder={'First Name'}
                                onChangeText={setFirstName}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                placeholder={'Last Name'}
                                onChangeText={setLastName}
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
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder={'Confirm password'}
                                onChangeText={setConfirmPassword}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                keyboardType={'numeric'}
                                style={styles.input}
                                placeholder={'Age'}
                                onChangeText={setAge}
                            />

                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    {'Gender:    M '}{' '}
                                </Text>
                                <Switch
                                    trackColor={{
                                        false: '#6ec6ff',
                                        true: '#ff7961',
                                    }}
                                    thumbColor={sex ? '#f44336' : '#2196f3'}
                                    onValueChange={() => toggleSwitch(sex)}
                                    value={sex}
                                />
                                <Text style={styles.text}>{'    F'} </Text>
                            </View>
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
                                onPress={() =>
                                    onSubmit(
                                        firstName,
                                        lastName,
                                        username,
                                        email,
                                        password,
                                        age,
                                        sex,
                                        confirmPassword,
                                    )
                                }>
                                Sign Up
                            </Button>
                        )}
                    </View>
                </View>
                <Text style={styles.footText}>
                    Already have account?{' '}
                    <Text
                        style={styles.extraBold}
                        onPress={() => Navigation.navigate('Login')}>
                        Sign In
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
};

export default connect(
    (state) => ({
        isLoading: selectors.getIsRegistrating(state),
        error: selectors.getSignUpError(state),
        isAuthenticated: selectors.isAuthenticated(state),
    }),
    (dispatch) => ({
        onSubmit(
            firstname,
            lastname,
            user,
            email,
            password,
            age,
            sex,
            passwordConfirm,
        ) {
            if (user && password && lastname && firstname && email && age) {
                if (password === passwordConfirm) {
                    if (age > 0 || !age) {
                        if (validateEmail(email)) {
                            dispatch(
                                actions.startRegistration(
                                    firstname,
                                    lastname,
                                    user,
                                    email,
                                    password,
                                    age,
                                    sex ? 0 : 1,
                                ),
                            );
                        } else {
                            dispatch(
                                actions.failRegistration('WRITE A VALID EMAIL'),
                            );
                        }
                    } else {
                        dispatch(actions.failRegistration('WRITE A VALID AGE'));
                    }
                } else {
                    dispatch(actions.failRegistration('PASSWORDS MUST MATCH'));
                }
            } else if (!user) {
                dispatch(
                    actions.failRegistration('USER FIELD MUST NOT BE EMPTY'),
                );
            } else if (!firstname) {
                dispatch(
                    actions.failRegistration('NAME FIELD MUST NOT BE EMPTY'),
                );
            } else if (!lastname) {
                dispatch(
                    actions.failRegistration(
                        'LASTNAME FIELD MUST NOT BE EMPTY',
                    ),
                );
            } else if (!password) {
                dispatch(
                    actions.failRegistration(
                        'PASSWORD FIELD MUST NOT BE EMPTY',
                    ),
                );
            } else if (!email) {
                dispatch(
                    actions.failRegistration('EMAIL FIELD MUST NOT BE EMPTY'),
                );
            } else if (!age) {
                dispatch(
                    actions.failRegistration('AGE FIELD MUST NOT BE EMPTY'),
                );
            }
        },
    }),
    (stateToProps, dispatchToProps) => {
        if (stateToProps.isAuthenticated) {
            //Actions.Home(true);
            console.log('U r authenticated');
            Navigation.navigate('Home');
        }
        return {...dispatchToProps, ...stateToProps};
    },
)(SignUp);
