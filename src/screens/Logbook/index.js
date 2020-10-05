import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Avatar, Button, Layout, Text, Divider} from '@ui-kitten/components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {connect} from 'react-redux';
import {logout} from '../../redux/auth/auth.actions';
import {startFetchingLogbook} from '../../redux/logbook/logbook.actions';
import {getLogbookItems} from '../../redux/root-reducer';

import styles from './styles';
import { navigationRef } from '../../navigation';

const LogbookItem = ({value}) => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(value.date);

  return (
  <>
    <Layout level="1" style={styles.settingsContainer}>
      <Text category="s1">Fecha: {date.toLocaleDateString("en-US", options)}</Text>
      <Text category="s1">Distancia recorrida: {value.distance_traveled}</Text>
    </Layout>
    <Divider />
  </>
  )
};

const Logbook = ({
    navigation,
    fetchLogbook,
    logbookItems
}) => {
  useEffect(() => {
    fetchLogbook()
  }, []);
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            {logbookItems && 
              logbookItems.map((item, i) => {
                return (
                <LogbookItem 
                  key={i}
                  value={item}
                />);
              })
            }
            <Button
                style={styles.doneButton}
                onPress={() => navigation.push('Profile')}>
                Regresar a mi perfil
            </Button>
        </ScrollView>
    );
};

const mapStateToProps = (state) => ({
    logbookItems: getLogbookItems(state)
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(logout()),
    fetchLogbook: () => dispatch(startFetchingLogbook())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logbook);
