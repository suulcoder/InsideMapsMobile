import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {
    ViroARScene,
    ViroARSceneNavigator,
    ViroPolyline,
    ViroText,
    Viro3DObject,
    ViroAmbientLight,
    ViroBox,
    ViroMaterials,
    ViroSphere,
    ViroNode,
} from 'react-viro';

const InfoAR = () => {
    return (
        <ViroARScene>
            <ViroAmbientLight color="#FFFFFF" intensity={20} />
            {/* <ViroPolyline
                position={[0, 0, -2]}
                points={[
                    [0, 0, 0],
                    [0.5, 0.5, 0.5],
                    [1, 0, 0],
                ]}
                thickness={0.2}
            /> */}
            <ViroText
                text="Hello World!"
                width={2}
                height={2}
                position={[0, 0, -2]}
            />
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

export default Information;
