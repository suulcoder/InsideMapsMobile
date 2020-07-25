import {StyleSheet} from 'react-native';
import { colors } from '../../../configuration';

const styles = StyleSheet.create({
    
    layout: {
        height: '100%',
        padding: 30,
        justifyContent: 'center',
    },
    header: {
        fontFamily: 'Tahu!',
        fontSize: 55,
        color: '#fff',
        marginTop: 60,
        textAlign: 'center',
    },
    ImageBackground:{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
    },
    subHeader: {
        fontFamily: 'Tahu!',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    image: {
        paddingTop: 20,
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        marginTop: 10,
        width: '100%',
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
        borderRadius: 30,
    },
    registerButton: {
        marginTop: 10,
        width: '100%',
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderRadius: 30,
    },
    mainImage: {
        width: 130,
        height: 130,
    },
});

export default styles;
