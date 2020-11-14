import React from 'react';
import {connect} from 'react-redux';

import {SafeAreaView, View, Text, Image, ImageBackground} from 'react-native';
import {Button} from '@ui-kitten/components';
import styles from './styles';

import {navigate} from '../../navigation';
import {startGuestLogin} from '../../redux/auth/auth.actions';

const image = {
    uri:
        'https://i.pinimg.com/originals/62/c4/aa/62c4aad6e71c57988b47a7e2c7c4f66a.jpg',
};

const Welcome = ({navigation, signInAsGuest}) => {
    return (
        <SafeAreaView>
            <ImageBackground source={image} style={styles.ImageBackground}>
                <View style={styles.layout}>
                    <Text style={styles.header}>Inside Maps</Text>
                    <Text style={styles.subHeader}>
                        Una nueva forma de navegar
                    </Text>
                    <View style={styles.image}>
                        <Image
                            source={require('../../../assets/images/logo.png')}
                            style={styles.mainImage}
                        />
                    </View>
                    <View style={styles.buttonContainer}>

                        <Button
                            style={styles.loginButton}
                            appearance="filled"
                            //status="success"
                            onPress={() => {
                                signInAsGuest();
                            }}>
                            Entrar como invitado
                        </Button>
                        <Button
                            style={styles.loginButton}
                            appearance="filled"
                            //status="success"
                            onPress={() => {
                                //reset();
                                navigation.navigate('Login');
                            }}>
                            Iniciar Sesión
                        </Button>
                        <Button
                            style={styles.registerButton}
                            appearance="filled"
                            //status="warning"
                            onPress={() => navigation.navigate('SignUp')}>
                            Registrarse
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default connect(undefined, (dispatch) => ({
    signInAsGuest() {
        dispatch(startGuestLogin());
    },
}))(Welcome);
