import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Image} from 'react-native';
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import * as selectors from '../../redux/Location/reducer'

const image = { uri: "https://miro.medium.com/max/2400/0*VUGGU1mPbQG2QrFe.png" };

const Home = ({navigation, reset, isLocalized}) => {
    return (
        <SafeAreaView style={styles.layout} >
            <ImageBackground source={image} style={styles.ImageBackground}>         
            {/* This is just here for a moment. When the map is here this will be gone! */}
            {
                !isLocalized?
                (<View style={styles.layout}>
                    <View style={styles.message}>
                        <View style={styles.image}>
                            <Image
                                source={require('../../../assets/images/logo.png')}
                                style={styles.mainImage}
                            />
                        </View>
                        <Text style={styles.text}>We don't have your location yet. Search for a QR code in the building and start navigating with Indoor Maps.</Text>
                    </View>
                    <View style={styles.scanInfo}>
                        <View style={styles.scanMessage}>
                            <Text style={styles.scanText}>Click this icon to scan your code</Text>
                            <FontAwesome5
                                name={'arrow-right'}
                                size={25}
                                color={'black'}
                            />
                        </View>
                    </View>
                </View>):(
                    <View style={styles.layout}>
                        <Text style={styles.message} >You should be localized now</Text>
                    </View>
                )

            }
            
            <TouchableOpacity style={styles.scanButton} onPress={()=>navigation.push('Scan')}>
                    <FontAwesome5
                        name={'expand'}
                        size={35}
                        color={'white'}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default connect(
    (state) => ({
        isLocalized : selectors.getIsLocalized(state)
    }),
    (dispatch) => ({
        
    }),
)(Home);
