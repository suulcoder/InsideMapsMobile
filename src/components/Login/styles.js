import { StyleSheet } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.primary,
    },
    centered:{
      alignSelf: 'center'
    },
    error: {
        color : colors.white,
        fontSize: normalize(0.9),
        margin: normalize(5)
    },
    text: {
        marginTop: normalize(5),
        color : colors.white,
        fontSize: normalize(0.9),
      },
    link: {
        marginTop: normalize(5),
        color: colors.white,
        fontSize: normalize(0.9),
        textDecorationLine: 'underline',
    },
    input: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.white,
        borderRadius: 7,
        borderWidth: 1,
        fontSize: normalize(1.5),
        height: normalize(30),
        margin: normalize(0.5),
        maxHeight: 50,
        maxWidth: 700,
        padding: 10,
        width: normalize(1600),
    },
    button:{
        alignItems: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 10,
        color: colors.white,
        justifyContent: 'center',
        paddingBottom: normalize(0.5), 
        paddingLeft: normalize(2),
        paddingRight:normalize(2),
        paddingTop: normalize(0.5),
    },
    logo: {
        alignSelf: 'center',
        height: normalize(200),
        width: normalize(200),
        margin: normalize(50),
      },
    buttons:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    errors:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: normalize(15)
    },
    option:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    }
  });
  
export default styles
  
  