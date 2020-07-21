import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 70,
        paddingBottom: 20,
        flex: 1,
        justifyContent: 'center',
    },
    widthLimit: {
        flex: 1,
        maxWidth: 275,
        minHeight: 120,
    },
    logoImg: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    title: {
        marginVertical: 20,
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 30,
    },
    inputContainer: {
        marginTop: 40,
    },
    inputIcon: {
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
    },
    inputIconLock: {
        fontSize: 24,
    },
    input: {
        fontWeight: '300',
        fontSize: 20,
        textAlign: 'left',
        height: 40,
        marginVertical: 4
    },
    footText: {
        marginVertical: 30,
        alignSelf: 'center',
        backgroundColor: 'transparent',
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
    extraBold: {
        fontWeight: '700',
    },
});

export default styles;
