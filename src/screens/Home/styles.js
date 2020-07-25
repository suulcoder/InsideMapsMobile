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
    scanButton:{
      position: 'absolute',
      backgroundColor: colors.secondary,
      top: 20,
      right: 10,
      padding: 15,
      borderRadius: 25,
    },
    text:{
        textAlign: 'justify',
        fontSize: 15
    },
    scanText:{
        fontSize: 10,
        marginRight: 10
    },
    message:{
        backgroundColor: colors.white,
        padding: 35,
        margin: 20,
        alignItems: 'center',
        borderRadius: 20
    },
    scanMessage:{
        backgroundColor: colors.white,
        padding: 15,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scanInfo:{
        position: 'absolute',
        top: 20,
        right: 80,
    },
    button:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    ImageBackground:{
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
        marginBottom: 20
    },
  });

export default styles