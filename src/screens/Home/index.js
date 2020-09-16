import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Image,
} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import * as selectors from '../../redux/root-reducer';
import { deleteCurrentNode } from '../../redux/location/location.actions';

const image = {uri: 'https://miro.medium.com/max/2400/0*VUGGU1mPbQG2QrFe.png'};

const Home = ({navigation, reset, isLocalized, del}) => {
    return (
        <SafeAreaView style={styles.layout}>
            <ImageBackground source={image} style={styles.ImageBackground}>
                {/* This is just here for a moment. When the map is here this will be gone! */}
                {!isLocalized ? (
                    <View style={styles.layout}>
                        <View style={styles.message}>
                            <View style={styles.image}>
                                <Image
                                    source={require('../../../assets/images/logo.png')}
                                    style={styles.mainImage}
                                />
                            </View>
                            <Text style={styles.text}>
                                Aún no tenemos su ubicación. Busca un QR
                                código en el edificio y empieza a navegar con
                                Inside Maps.
                            </Text>
                        </View>
                        <View style={styles.scanInfo}>
                            <View style={styles.scanMessage}>
                                <Text style={styles.scanText}>
                                    Haz clic en este icono para escanear su código
                                </Text>
                                <FontAwesome5
                                    name={'arrow-right'}
                                    size={25}
                                    color={'black'}
                                />
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={styles.layout}>
                        <Text style={styles.message}>
                            Deberías estar localizado ahora
                        </Text>
                    </View>
                )}

                <TouchableOpacity
                    style={styles.scanButton}
                    onPress={() => navigation.push('Scan')}>
                    <FontAwesome5 name={'expand'} size={35} color={'white'} />
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default connect(
    (state) => ({
        isLocalized: selectors.getLocation(state) !== null,
    }),
    (dispatch) => ({
        del(){
            dispatch(deleteCurrentNode())
        }
    }),
)(Home);
