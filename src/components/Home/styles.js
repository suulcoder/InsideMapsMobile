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
    navBar:{
      position: 'absolute',
      flexDirection: 'row',
      backgroundColor: colors.primary,
      bottom: 0,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: normalize(0.5)
    },
    scanButton:{
      position: 'absolute',
      backgroundColor: colors.secondary,
      top: normalize(35),
      right: normalize(5),
      padding: normalize(2),
      borderRadius: normalize(50),
    },
    icon_:{
      alignSelf: 'center',
      height: normalize(30),
      width: normalize(30),
    },
    button:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon__:{
      alignSelf: 'center',
      marginRight: normalize(2),
      marginLeft: normalize(2),
      height: normalize(20),
      width: normalize(20),
    },
    logo: {
      alignSelf: 'center',
      margin: normalize(0.1),
      height: normalize(70),
      width: normalize(70),
    },
  });
  
export default styles
  
  