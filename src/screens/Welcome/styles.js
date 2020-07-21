import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    layout: {
        height: '100%',
        padding: 30,
        backgroundColor: '#438FCB',
    },
    header: {
        fontFamily: 'Tahu!',
        fontSize: 55,
        color: '#fff',
        textAlign: 'center',
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
        backgroundColor: '#4caf50',
        borderRadius: 30,
    },
    registerButton: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#455a64',
        borderRadius: 30,
    },
    mainImage: {
        width: 240,
        height: 240,
    },
});

export default styles;
