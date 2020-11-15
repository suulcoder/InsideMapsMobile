import {StyleSheet} from 'react-native';
import {colors} from '../../../configuration';

const styles = StyleSheet.create({
    isFetching: {
        paddingTop: 20,
        textAlign: "center"
    },  
    avatarContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        padding: 20,
    },
    report_input:{
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 0,
        maxHeight: 280
    },
    avatar: {
        alignSelf: 'center',
        height: 236,
        width: 210,
    },
    editButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 2,
    },
    profileAvatar: {
        aspectRatio: 1.0,
        height: 124,
        alignSelf: 'center',
    },
    editAvatarButton: {
        aspectRatio: 1.0,
        height: 48,
        borderRadius: 24,
    },
    profileSetting: {
        padding: 16,
    },
    section: {
        marginTop: 24,
    },
    doneButton: {
        marginHorizontal: 24,
        marginTop: 24,
        backgroundColor: colors.primary,
    },
    settingsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: 70,
    }
});

export default styles;
