import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';

import styles from './styles';
import * as selectors from '../../redux/root-reducer';

const image = {
    uri:
        'https://i.pinimg.com/originals/51/5a/ce/515ace09ba59e672af37f6fff046c3a8.jpg',
};

const Home = ({navigation, reset, isLocalized, del}) => {
    return (
        <SafeAreaView style={styles.layout}>
            <ImageBackground source={image} style={styles.imageBackground}>
                {/* This is just here for a moment. When the map is here this will be gone! */}
                {!isLocalized ? (
                    <View style={styles.layout}>
                        <View style={styles.message}>
                            <View style={styles.image}>
                                <Image
                                    source={require('../../../assets/images/qrcode.png')}
                                    style={styles.mainImage}
                                />
                            </View>
                            <Text style={styles.text}>
                                Aún no tenemos su ubicación. Busca un código QR
                                en el edificio y empieza a navegar con Inside
                                Maps.
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.layout}>
                         <View style={styles.message}>
                        <View style={styles.image}>
                                <Image
                                    source={require('../../../assets/images/success.png')}
                                    style={styles.mainImage}
                                />
                            </View>
                        <Text style={styles.text}>
                            Deberías estar localizado ahora. Busca tu destino en
                            la pestaña{' '}
                            <FontAwesome5 name={'search'} size={18} />
                        </Text>
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    style={styles.scanButton}
                    onPress={() => navigation.push('Scan')}>
                    <FontAwesome5 name={'expand'} size={32} color={'white'} />
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default connect(
    (state) => ({
        isLocalized: selectors.getLocation(state) !== null,
    }),
)(Home);
