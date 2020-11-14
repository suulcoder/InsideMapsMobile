import {StyleSheet} from 'react-native';
import {colors} from '../../../configuration';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: colors.primary,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        marginTop: 0,
        backgroundColor: colors.white,
    },
    voiceButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 8,
        top: 8
    },
    isSearchingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    inputs: {
        height: 50,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
    },
    mainImage: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
});

export default styles;
