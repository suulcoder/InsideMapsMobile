import React from 'react';
import * as Navigation from '../../navigation';

import {connect} from 'react-redux';
import {getDestinationPath, getLocation} from '../../redux/root-reducer';

import {
    ViroARScene,
    ViroPolyline,
    ViroARSceneNavigator,
    ViroAmbientLight,
    ViroSphere,
    ViroMaterials
} from 'react-viro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {Button, Card, Icon} from '@ui-kitten/components';

import styles from './styles';
import {deleteCurrentNode} from '../../redux/location/location.actions';

const NavigationIcon = (props) => (
    <Icon {...props} name="navigation-2-outline" />
);

class Information extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.destinationPath !== null) {
            const {path, distance, destination} = this.props.destinationPath;
            const {originName} = this.props.location;

            const arrayOfCoordinates = path.map((item) => [
                item.node['coordinates'][1],
                item.node['coordinates'][2],
                item.node['coordinates'][0],
            ]);
            console.log(arrayOfCoordinates);
            const InfoAr = () => {
                return (
                    <ViroARScene>
                        <ViroAmbientLight color="#FFFFFF" intensity={20} />
                        <ViroPolyline
                            position={[0, 0, 0]}
                            points={arrayOfCoordinates}
                            thickness={0.15}
                            materials = {"moving"}
                        />
                        <ViroSphere
                            position = {arrayOfCoordinates[arrayOfCoordinates.length-1]}
                            radius = {0.5}
                            materials = {["grid"]}
                        />
                    </ViroARScene>
                );
            };

            const NavigationCardFooter = () => (
                <View styles={styles.footerContainer}>
                    <Button
                        style={styles.footerControl}
                        status="primary"
                        accessoryRight={NavigationIcon}
                        onPress={() => Navigation.navigate('Search')}>
                        Cambiar destino
                    </Button>
                </View>
            );

            return (
                <View style={styles.flex}>
                    <StatusBar hidden={true} />
                    <ViroARSceneNavigator initialScene={{scene: InfoAr}} />

                    <TouchableOpacity
                        style={styles.alertButton}
                        onPress={() => Navigation.navigate('Report')}>
                        <MaterialCommunityIcons
                            name={'alert'}
                            size={32}
                            color={'white'}
                        />
                    </TouchableOpacity>
                    <View style={styles.topMenu}>
                        <Card style={styles.card} footer={NavigationCardFooter}>
                            <Text>Te encuentras en: {originName}</Text>
                            <Text>Destino: {destination}</Text>
                            <Text>Distancia de {distance.toFixed(2)} m.</Text>
                        </Card>
                    </View>
                </View>
            );
        } else {
            return (
                <>
                    <Text>Cargando ruta...</Text>
                </>
            );
        }
    }
}

ViroMaterials.createMaterials({
    grid:{
        diffuseTexture: require('../../../assets/images/endNode.jpg')
    },
    moving:{
        diffuseTexture: require('../../../assets/images/celeste.jpg')
    }
})

export default connect(
    (state) => ({
        destinationPath: getDestinationPath(state),
        location: getLocation(state),
    }),
    // TODO: is it necessary for the user to remove nodes? I dont think so...
    (dispatch) => ({
        popNearestNode() {
            dispatch(deleteCurrentNode());
        },
    }),
)(Information);
