import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Button} from '@ui-kitten/components';
import styles from './styles';

export default ({navigation, reset}) => {
    return (
        <SafeAreaView>
            <View style={styles.layout}>
                <Text style={styles.header}>Inside Maps</Text>
                <Text style={styles.subHeader}>a new way to navigate</Text>
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
                            //reset();
                            navigation.navigate('Login');
                        }}>
                        Login
                    </Button>
                    <Button
                        style={styles.registerButton}
                        appearance="filled"
                        //status="warning"
                        onPress={() => navigation.navigate('SignUp')}>
                        Register
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
};
