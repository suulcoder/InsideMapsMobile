import React from 'react';
import {View, ScrollView} from 'react-native';
import {Avatar, Button, Layout, Text, Divider} from '@ui-kitten/components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {connect} from 'react-redux';
import {logout} from '../../redux/auth/auth.actions';
import {
    getAuthUserGender,
    getAuthUserFirstName,
    getAuthUserUsername,
    getAuthUserLastName,
    getAuthUserAge,
    getAuthUserID,
} from '../../redux/root-reducer';

import styles from './styles';
import { navigationRef } from '../../navigation';

const EditIcon = () => <FontAwesome5 name="sign-out-alt" />;

const ProfileAvatar = ({onSignOut}) => (
    <View style={styles.avatarContainer}>
        <Avatar
            source={require('../../../assets/images/user-circle.png')}
            style={styles.avatar}
        />
        <Button
            style={styles.editButton}
            appearance="ghost"
            icon={EditIcon}
            onPress={() => onSignOut()}
        />
    </View>
);

const ProfileSetting = ({hint, value}) => (
    <>
        <Layout level="1" style={styles.settingsContainer}>
            <Text appearance="hint" category="s1">
                {hint}
            </Text>
            <Text category="s1">{value}</Text>
        </Layout>
        <Divider />
    </>
);

const Profile = ({
    navigation,
    username,
    firstName,
    lastName,
    gender,
    age,
    userId,
    signOut,
}) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <ProfileAvatar onSignOut={signOut} />
            <ProfileSetting
                style={[styles.profileSetting, styles.section]}
                hint="ID"
                value={userId}
            />
            <ProfileSetting
                style={[styles.profileSetting, styles.section]}
                hint="Usuario"
                value={username}
            />
            <ProfileSetting
                style={[styles.profileSetting, styles.section]}
                hint="Nombre"
                value={firstName}
            />
            <ProfileSetting
                style={styles.profileSetting}
                hint="Apellido"
                value={lastName}
            />
            <ProfileSetting
                style={styles.profileSetting}
                hint="Género"
                value={gender == 0 ? 'M' : 'F'}
            />
            <ProfileSetting
                style={styles.profileSetting}
                hint="Edad"
                value={age}
            />
            <Button
                style={styles.doneButton}
                onPress={() => navigation.push('EditProfile')}>
                Editar
            </Button>
            <Button
                style={styles.doneButton}
                onPress={() => navigation.push('Report')}>
                Reportar un problema
            </Button>
            <Button
                style={styles.doneButton}
                onPress={() => navigation.push('Logbook')}>
                Mis viajes anteriores
            </Button>
        </ScrollView>
    );
};

const mapStateToProps = (state) => ({
    username: getAuthUserUsername(state),
    firstName: getAuthUserFirstName(state),
    lastName: getAuthUserLastName(state),
    age: getAuthUserAge(state),
    gender: getAuthUserGender(state),
    userId: getAuthUserID(state),
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
