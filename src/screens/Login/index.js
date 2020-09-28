/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Image} from 'react-native';
import {Button, Input, Text, Spinner} from '@ui-kitten/components';
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
                    <Text style={styles.title}>Ingresar</Text>
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
                                placeholder={'Contraseña'}
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
                            <Spinner size="medium" />
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
                    ¿No tienes una cuenta?{' '}
                    <Text
                        style={styles.extraBold}
                        category="s1"
                        onPress={() => Navigation.navigate('SignUp')}>
                        Registrate
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
                dispatch(actions.failLogin('Porfavor ingresa un email válido'));
            } else if (!password) {
                dispatch(
                    actions.failLogin('Porfavor ingresa una contraseña válida'),
                );
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
