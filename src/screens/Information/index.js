import React, {Component} from 'react';
// import {View, Text} from 'react-native';

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


class Information extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            path: [],
        };
    }
    
    componentDidMount() {
        console.log(this.props.path)
        this.setState({path : this.props.path})
    }

    render() {
        if (this.props.path !== null ){
            // console.log(this.props.path.path)
            const { path } = this.props.path;
            console.log(path)
            const arrayOfCoordinates = path.map(item => [item.node["coordinates"][1],item.node["coordinates"][2], item.node["coordinates"][0]])
            console.log(arrayOfCoordinates)
            const InfoAr = () => {
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
                            onTap={this.props.del}
                        />
                        {/* Render lines here */}
                        <ViroPolyline
                            position={[0, 0, -2]}
                            points={arrayOfCoordinates}
                            thickness={0.2}
                        />
                    </ViroARScene>
                );
            }
            return <ViroARSceneNavigator  initialScene={{scene: InfoAr}} />;
        } else {
            return <><Text>Loading route</Text></>
        }
    }
}

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
)(Information);

