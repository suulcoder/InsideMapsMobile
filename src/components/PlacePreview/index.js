import React from 'react';
import {Card, Text} from '@ui-kitten/components';
import styles from './styles';

const PlacePreview = ({item, onPress}) => {
    return (
        <Card onPress={onPress(item._id)} style={styles.card}>
            <Text>{item.name}</Text>
        </Card>
    );
};

export default PlacePreview;
