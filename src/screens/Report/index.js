import React, {useState} from 'react';
import {View, ScrollView, Switch, ToastAndroid} from 'react-native';
import {Button, Input} from '@ui-kitten/components';

import {connect} from 'react-redux';
import {startReport} from '../../redux/report/report.actions';

import styles from './styles';

const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
};

const Report = ({navigation, report}) => {
    const [value, onChangeText] = useState('');

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Input
                style={styles.report_input}
                multiline
                numberOfLines={4}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
            <Button
                style={styles.doneButton}
                onPress={() => {
                    report(value);
                    onChangeText('');
                    showToast('Your report was submitted successfully')
                    navigation.push('Profile');
                }}>
                Enviar
            </Button>
        </ScrollView>
    );
};

const mapDispatchToProps = (dispatch) => ({
    report(message) {
        console.log('Report is: ', message);
        dispatch(startReport(message));
    },
});

export default connect(undefined, mapDispatchToProps)(Report);
