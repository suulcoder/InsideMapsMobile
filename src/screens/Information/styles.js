import {StyleSheet} from 'react-native';
import {colors} from '../../../configuration';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    alertButton: {
        position: 'absolute',
        backgroundColor: colors.danger,
        top: 20,
        right: 20,
        margin: 2,
        padding: 20,
        borderRadius: 46,
    },
    card: {
        flex: 1,
        margin: 10,
        alignSelf: 'flex-end',
    },
    footerContainer: {
        flexDirection: 'row',
    },
    footerControl: {
        margin: 4,
    },
    topMenu: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primary,
    },
    buttonContainer: {
        paddingVertical: 12,
        shadowRadius: 12,
        shadowOpacity: 0.4,
        marginTop: 40,
    },
    buttonInner: {
        fontSize: 22,
        color: 'white',
    },
    button: {
        position: 'absolute',
        backgroundColor: colors.secondary,
        top: 20,
        right: 10,
        padding: 15,
        borderRadius: 25,
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
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scanInfo: {
        position: 'absolute',
        top: 20,
        right: 80,
    },
    ImageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
    },
    layout: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    mainImage: {
        width: 60,
        height: 60,
        marginBottom: 20,
    },
});

export default styles;
