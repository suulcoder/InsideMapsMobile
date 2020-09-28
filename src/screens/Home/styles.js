import {StyleSheet} from 'react-native';
import {colors} from '../../../configuration';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primary,
    },
    scanButton: {
        position: 'absolute',
        backgroundColor: colors.secondary,
        bottom: 20,
        right: 20,
        margin: 2,
        padding: 20,
        borderRadius: 46,
    },
    text: {
        textAlign: 'justify',
        fontSize: 15,
    },
    scanText: {
        fontSize: 10,
        marginRight: 10,
    },
    message: {
        backgroundColor: colors.white,
        padding: 35,
        margin: 20,
        alignItems: 'center',
        borderRadius: 20,
    },
    scanMessage: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
    },
    layout: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    mainImage: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
});

export default styles;
