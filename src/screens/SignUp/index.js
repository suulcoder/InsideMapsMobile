/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Image, Switch} from 'react-native';
import {Button, Input, Text, Spinner} from '@ui-kitten/components';
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
                    <Text style={styles.title}>Regístrate</Text>
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
                                placeholder={'Nombre de usuario'}
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
                                placeholder={'Primer nombre'}
                                onChangeText={setFirstName}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                placeholder={'Segundo nombre'}
                                onChangeText={setLastName}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder={'Contraseña'}
                                onChangeText={setPassword}
                            />
                            <Input
                                labelStyle={[
                                    styles.inputIcon,
                                    styles.inputIconLock,
                                ]}
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder={'Confirma tu contraseña'}
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
                                    {'Género:    M '}{' '}
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
                            <Spinner size="medium" />
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
                                Registrarse
                            </Button>
                        )}
                    </View>
                </View>
                <Text style={styles.footText}>
                    Ya tienes una cuenta?{' '}
                    <Text
                        style={styles.extraBold}
                        category="s1"
                        onPress={() => Navigation.navigate('Login')}>
                        Ingresar
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
                                actions.failRegistration('Porfavor ingresa un email válido'),
                            );
                        }
                    } else {
                        dispatch(actions.failRegistration('Porfavor ingresa una edad válida'));
                    }
                } else {
                    dispatch(actions.failRegistration('Las contraseñas no coinciden, intenta de nuevo'));
                }
            } else if (!user) {
                dispatch(
                    actions.failRegistration('Porfavor ingresa  un usuario válido'),
                );
            } else if (!firstname) {
                dispatch(
                    actions.failRegistration('Porfavor ingresa  un nombre válido'),
                );
            } else if (!lastname) {
                dispatch(
                    actions.failRegistration(
                        'Porfavor ingresa  un apellido válido',
                    ),
                );
            } else if (!password) {
                dispatch(
                    actions.failRegistration(
                        'Porfavor ingresa  una contraseña válida',
                    ),
                );
            } else if (!email) {
                dispatch(
                    actions.failRegistration('Porfavor ingresa  un email válido'),
                );
            } else if (!age) {
                dispatch(
                    actions.failRegistration('Porfavor ingresa  una edad válida'),
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
