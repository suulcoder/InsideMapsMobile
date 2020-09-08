import React from 'react';
import {Card, Text} from '@ui-kitten/components';
import styles from './styles';

const PlacePreview = ({item, onSelectDestination}) => {
    return (
        <Card style={styles.card} onPress={() => onSelectDestination(item.node_id)}>
            <Text>{item.name}</Text>
        </Card>
    );
};

export default PlacePreview;
