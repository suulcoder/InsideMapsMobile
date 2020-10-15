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

const ProfileAvatar = () => (
    <View style={styles.avatarContainer}>
        <Avatar
            source={require('../../../assets/images/user-circle.png')}
            style={styles.avatar}
        />
    </View>
);

const ProfileSetting = ({hint, value, changeValue}) => (
    <>
        <Layout level="1" style={styles.settingsContainer}>
            <Text appearance="hint" category="s1">
                {hint}
            </Text>
            {
                (hint!=='ID'?
                    <Input category="s1"
                        onChangeText={text => changeValue(text)}
                    >{value}</Input>
                    :
                    <Text category="s1">{value}</Text>
                )
            }
            
        </Layout>
        <Divider />
    </>
);

const EditProfile = ({
    navigation,
    username,
    firstName,
    lastName,
    gender,
    age,
    userId,
    update,
}) => {

    const [g, changeG] = useState(gender===0)
    const [user, changeUsername] = useState(username)
    const [firstname, changeFirstName] = useState(firstName)
    const [lastname, changeLastName] = useState(lastName)
    const [age_, changeAge] = useState(age)

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <ProfileAvatar/>
            <ProfileSetting
                style={[styles.profileSetting, styles.section]}
                hint="ID"
                value={userId}
            />
            <ProfileSetting
                changeValue={changeUsername}
                style={[styles.profileSetting, styles.section]}
                hint="Usuario"
                value={username}
            />
            <ProfileSetting
                changeValue={changeFirstName}
                style={[styles.profileSetting, styles.section]}
                hint="Nombre"
                value={firstName}
            />
            <ProfileSetting
                changeValue={changeLastName}
                style={styles.profileSetting}
                hint="Apellido"
                value={lastName}
            />
            <Layout level="1" style={styles.settingsContainer}>
                <Text appearance="hint" category="s1">
                    {"Género"}
                </Text>
                <Layout style={styles.row}>
                    <Text>{'F'}</Text><Switch onValueChange={(value) => changeG(value)} value={g}/><Text>{'M'}</Text>
                </Layout>
            </Layout>
            <Divider />
            <ProfileSetting
                changeValue={changeAge}
                style={styles.profileSetting}
                hint="Edad"
                value={age}
            />
            <Button
                style={styles.doneButton}
                onPress={() => {update(
                    userId, 
                    user, 
                    firstname, 
                    lastname,
                    g,
                    age_,
                    )
                    navigation.push('Profile')
                    }}>
                Guardar
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
    update(userId, username, firstname, lastname, g, age){
        dispatch(startUserUpdate({userId, username, firstname, lastname, gender:g?0:1, age}))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
