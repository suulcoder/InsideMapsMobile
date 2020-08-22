import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import {Input} from '@ui-kitten/components';
import PlacePreview from '../../components/PlacePreview';
import styles from './styles';

import {
    getIsSearching,
    getFilteredPlaces,
    getLocation,
} from '../../redux/root-reducer';
import {startSearchingPlaces} from '../../redux/search/search.actions';

const Search = ({
    isSearching,
    isLocalized,
    navigation,
    dataList,
    searchPlace,
}) => {
    const [searchQuery, changeSearchQuery] = useState('');

    const changeQueryField = (query) => {
        //console.log(query);
        changeSearchQuery(query);
        searchPlace(query);
    };

    const navigateToNavInformation = () => {
        navigation.navigate('Information');
    };

    return (
        <View style={styles.container}>
            {isLocalized ? (
                <>
                    <View style={styles.inputContainer}>
                        <Input
                            placeholder="Search a place..."
                            value={searchQuery}
                            onChangeText={(text) => changeQueryField(text)}
                        />
                    </View>
                    <View>
                        {isSearching && (
                            <View style={styles.isSearchingContainer}>
                                <ActivityIndicator size="large" />
                            </View>
                        )}

                        {!(searchQuery.length > 0) && !isSearching && (
                            <View style={styles.isSearchingContainer}>
                                <Text>
                                    Try searching the place you want to go...
                                </Text>
                            </View>
                        )}

                        {searchQuery.length > 0 && !isSearching && (
                            <>
                                <ScrollView>
                                    {dataList &&
                                        dataList.map((item, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                activeOpacity={0.8}
                                                style={styles.item}
                                                onPress={() =>
                                                    navigateToNavInformation()
                                                }>
                                                <PlacePreview
                                                    item={item}
                                                    onPress={(id) =>
                                                        navigateToNavInformation(
                                                            id,
                                                        )
                                                    }
                                                />
                                            </TouchableOpacity>
                                        ))}
                                </ScrollView>
                            </>
                        )}
                    </View>
                </>
            ) : (
                <View style={styles.container}>
                    <Text>{'Please, scan your initial location first'}</Text>
                </View>
            )}
        </View>
    );
};

export default connect(
    (state) => ({
        isLocalized: getLocation(state) != null,
        isSearching: getIsSearching(state),
        dataList: getFilteredPlaces(state),
    }),
    (dispatch) => ({
        searchPlace(query) {
            dispatch(startSearchingPlaces(query));
        },
    }),
)(Search);
