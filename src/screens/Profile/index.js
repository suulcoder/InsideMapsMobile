import React from 'react';
import {View, ScrollView, ToastAndroid} from 'react-native';
import {Avatar, Button, Layout, Text, Divider, Icon} from '@ui-kitten/components';

import {connect} from 'react-redux';
import {logout} from '../../redux/auth/auth.actions';
import {
    getAuthUserGender,
    getAuthUserFirstName,
    getAuthUserUsername,
    getAuthUserLastName,
    getAuthUserAge,
    getAuthUserID,
    getIsAuthUserGuest,
} from '../../redux/root-reducer';

import styles from './styles';

const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
};
  

const LogoutIcon = (props) => (
    <Icon {...props} name='log-out-outline'/>
  );

const ProfileAvatar = ({onSignOut}) => (
    <View style={styles.avatarContainer}>
        <Button
            style={styles.editButton}
            appearance="ghost"
            accessoryLeft={LogoutIcon}
            onPress={() => {
                onSignOut()
                showToast('You signed out')
            }}
        >Salir</Button>
        <Avatar
            source={require('../../../assets/images/user-circle.png')}
            style={styles.avatar}
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
    isGuest,
    signOut,
}) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <ProfileAvatar onSignOut={signOut} />
            {!isGuest ? (
                <>
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
                        onPress={() => navigation.push('Logbook')}>
                        Mis viajes anteriores
                    </Button>
                </>
            ) : (
                <>
                    <Text
                        appearance="hint"
                        style={styles.settingsContainer}
                        category="s1">
                        {
                            'Actualmente estás logueado como Invitado, cierra sesión para poder crear una cuenta'
                        }
                    </Text>
                </>
            )}
            <Button
                style={styles.doneButton}
                onPress={() => navigation.push('Report')}>
                Reportar un problema
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
    isGuest: getIsAuthUserGuest(state),
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
