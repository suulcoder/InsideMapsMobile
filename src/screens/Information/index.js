import React from 'react';
//import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import {getDestinationPath} from '../../redux/root-reducer';

import {
    ViroARScene,
    ViroPolyline,
    ViroText,
    ViroARSceneNavigator,
    ViroAmbientLight,
    ViroButton,
} from 'react-viro';

import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { deleteCurrentNode } from '../../redux/location/location.actions';
import { isNavigationDone } from '../../redux/location/location.reducer';


const InfoAR = ({path, del}) => {

    return (
        <ViroARScene>
            <ViroAmbientLight color="#FFFFFF" intensity={20} />
            <ViroText
                text="Sigue la línea!"
                width={2}
                height={2}
                position={[0, 0, -3]}
            />
            <ViroButton
                source={require("../../res/delete.png")}
                position={[1, 3, -5]}
                height={2}
                width={3}
                onTap={del}
            />
            {/* Render lines here */}
            <ViroPolyline
                position={[0, 0, -2]}
                points={[
                    [0, 0, 0],
                    [0.5, 0.5, 0.5],
                    [1, 0, 0],
                ]}
                thickness={0.2}
            />
        </ViroARScene>
    );
};

const Information = ({del}) => {
    return <ViroARSceneNavigator initialScene={{scene: InfoAR}} />;
};

const image = {uri: 'https://miro.medium.com/max/2400/0*VUGGU1mPbQG2QrFe.png'};

const deleteButton = ({del, path}) => {
    console.log(path)
    return (
        <SafeAreaView style={styles.layout}>
            <ImageBackground source={image} style={styles.ImageBackground}>
                    <View style={styles.layout}>
                        <Text style={styles.message}>
                            {path?'CLICK TO POP NEXT NODE':'NO HAY MÁS NODOS'}
                        </Text>
                    </View>
                    <TouchableOpacity
                                style={styles.button}
                                onPress={() => del()}>
                                <FontAwesome5 name={'trash'} size={35} color={'white'} />
                            </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default connect(
    (state) => ({
        path: getDestinationPath(state),
    }),
    (dispatch) => ({
        del(){
            dispatch(deleteCurrentNode())
        }
    }),
)(deleteButton);

