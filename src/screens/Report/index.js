import React, {useState} from 'react';
import {View, ScrollView, Switch} from 'react-native';
import {Button, Input} from '@ui-kitten/components';

import {connect} from 'react-redux';

import styles from './styles';

const Report = ({report}) => {
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
            <Button style={styles.doneButton} onPress={() => report(value)}>
                Enviar
            </Button>
        </ScrollView>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    report(message) {
        console.log('Report is: ', message);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
