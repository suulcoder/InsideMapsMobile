import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {
    ViroARScene,
    ViroImage,
    ViroPolygon,
    ViroText,
    ViroARSceneNavigator,
    ViroAmbientLight,
} from 'react-viro';

const InfoAR = () => {
    return (
        <ViroARScene>
            <ViroAmbientLight color="#FFFFFF" intensity={20} />
            {/* Final Scene
            <ViroImage
                height={0.5}
                width={0.5}
                rotation={[0,-45,0]}
                position={[2, 0, 0]}
                source={require('../../../assets/images/icons/garden.png')}
            />

            <ViroImage
                height={0.5}
                width={0.5}
                position={[0, 0, -2]}
                source={require('../../../assets/images/icons/bathroom.png')}
            />

            <ViroText text="Here!" width={2} height={2} position={[0, 0, -3]} />
 */}

            <ViroText
                text="Follow the line!"
                width={2}
                height={2}
                position={[0, 0, -3]}
            />
            <ViroPolygon
                rotation={[-90, 0, 0]}
                position={[0, -1, -0.5]}
                vertices={[
                    [-0.2, 0],
                    [0, 0.2],
                    [0.2, 0],
                ]}
            />
            <ViroPolygon
                rotation={[-90, 0, 0]}
                position={[0, -1, -1]}
                vertices={[
                    [-0.2, 0],
                    [0, 0.2],
                    [0.2, 0],
                ]}
            />
            <ViroPolygon
                rotation={[-90, 0, 0]}
                position={[0, -1, -1.5]}
                vertices={[
                    [-0.2, 0],
                    [0, 0.2],
                    [0.2, 0],
                ]}
            />
            <ViroPolygon
                rotation={[-90, 0, 0]}
                position={[0, -1, -2]}
                vertices={[
                    [-0.2, 0],
                    [0, 0.2],
                    [0.2, 0],
                ]}
            />
            <ViroPolygon
                rotation={[-90, 0, 0]}
                position={[0, -1, -2.5]}
                vertices={[
                    [-0.2, 0],
                    [0, 0.2],
                    [0.2, 0],
                ]}
            />
        </ViroARScene>
    );
};

const Information = () => {
    return <ViroARSceneNavigator initialScene={{scene: InfoAR}} />;
};

export default Information;
