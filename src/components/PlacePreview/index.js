import React from 'react';
import {Card, Text} from '@ui-kitten/components';
import styles from './styles';

const PlacePreview = ({item, onSelectDestination}) => {
    return (
        <Card
            style={styles.card}
            onPress={() => onSelectDestination(item.node_id, item.name)}>
            <Text category="s1">{item.name}</Text>
            <Text category="label" appearance="hint">
                Nivel: {item.level}
            </Text>
        </Card>
    );
};

export default PlacePreview;
