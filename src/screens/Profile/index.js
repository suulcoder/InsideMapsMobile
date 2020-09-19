import React from 'react';
import {View, ScrollView} from 'react-native';
import {Avatar, Button, Layout, Text, Divider} from '@ui-kitten/components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {connect} from 'react-redux';
import {logout} from '../../redux/auth/auth.actions';

import styles from './styles';

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

const Profile = ({signOut}) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <ProfileAvatar onSignOut={signOut} />
            <ProfileSetting
                style={[styles.profileSetting, styles.section]}
                hint="Nombre"
                value={'Gus'}
            />
            <ProfileSetting
                style={styles.profileSetting}
                hint="Apellido"
                value={'Mendez'}
            />
            <ProfileSetting
                style={styles.profileSetting}
                hint="Género"
                value={'Hombre'}
            />
            <ProfileSetting
                style={styles.profileSetting}
                hint="Edad"
                value={`18`}
            />
            <Button
                style={styles.doneButton}
                onPress={() => console.log('Edited')}>
                Editar
            </Button>
        </ScrollView>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(logout()),
});

export default connect(undefined, mapDispatchToProps)(Profile);
