import {StyleSheet} from 'react-native';
import {colors} from '../../../configuration';

const styles = StyleSheet.create({
    avatarContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        padding: 20,
    },
    avatar: {
        alignSelf: 'center',
        height: 236,
        width: 210,
    },
    editButton: {
        color: '#f44336',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
    },
});

export default styles;
