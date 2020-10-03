import React, {useState} from 'react';
import {View, ScrollView,  Switch} from 'react-native';
import {Avatar, Button, Layout, Text, Divider, Input} from '@ui-kitten/components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {connect} from 'react-redux';
import {logout, startUserUpdate} from '../../redux/auth/auth.actions';
import {
    getAuthUserGender,
    getAuthUserFirstName,
    getAuthUserUsername,
    getAuthUserLastName,
    getAuthUserAge,
    getAuthUserID,
} from '../../redux/root-reducer';

import styles from './styles';

const Report = ({

}) => {

    const [value, onChangeText] = useState('')

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Input
                style={styles.report_input}
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeText(text)}
                value={value}
            >
            </Input>
            <Button
                style={styles.doneButton}
                onPress={() => report(value)}>
                Enviar
            </Button>
        </ScrollView>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    update(message){
        //report()
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
