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
} from 'react-viro';

const InfoAR = ({path}) => {
    console.log(path);
    return (
        <ViroARScene>
            <ViroAmbientLight color="#FFFFFF" intensity={20} />

            <ViroText
                text="Sigue la línea!"
                width={2}
                height={2}
                position={[0, 0, -3]}
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

const Information = () => {
    return <ViroARSceneNavigator initialScene={{scene: InfoAR}} />;
};

const mapStateToProps = (state) => ({
    path: getDestinationPath(state),
});

export default connect(mapStateToProps)(Information);
