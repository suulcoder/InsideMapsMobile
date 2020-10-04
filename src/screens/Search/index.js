import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Image,
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
import {startSettingDestinationPath} from '../../redux/location/location.actions';

const Search = ({
    isSearching,
    isLocalized,
    navigation,
    dataList,
    searchPlace,
    setDestination,
}) => {
    const [searchQuery, changeSearchQuery] = useState('');

    const changeQueryField = (query) => {
        changeSearchQuery(query);
        searchPlace(query);
    };

    const navigateToNavInformation = (id, name) => {
        console.log('Going to Nav to End Node>', id, name);
        setDestination(id, name);
        navigation.push('Information');
    };

    return (
        <View style={styles.container}>
            {isLocalized ? (
                <>
                    <Input
                        style={styles.inputContainer}
                        placeholder="Buscar destino..."
                        value={searchQuery}
                        onChangeText={(text) => changeQueryField(text)}
                    />
                    <View>
                        {isSearching && (
                            <View style={styles.isSearchingContainer}>
                                <ActivityIndicator size="large" />
                            </View>
                        )}

                        {!isSearching &&
                            searchQuery.length > 0 &&
                            dataList.length == 0 && (
                                <View style={styles.isSearchingContainer}>
                                    <View style={styles.image}>
                                        <Image
                                            source={require('../../../assets/images/no-search-results.png')}
                                            style={styles.mainImage}
                                        />
                                    </View>
                                    <Text>
                                        No hemos encontrado un lugar con ese
                                        nombre...
                                    </Text>
                                </View>
                            )}

                        {!(searchQuery.length > 0) && !isSearching && (
                            <View style={styles.isSearchingContainer}>
                                <View style={styles.image}>
                                    <Image
                                        source={require('../../../assets/images/path.png')}
                                        style={styles.mainImage}
                                    />
                                </View>
                                <Text>
                                    Trata de buscar el lugar al que quieres
                                    ir...
                                </Text>
                            </View>
                        )}

                        {searchQuery.length > 0 && !isSearching && (
                            <>
                                <ScrollView>
                                    {dataList &&
                                        dataList.map((item, index) => (
                                            <TouchableOpacity
                                                key={item._id}
                                                activeOpacity={0.8}
                                                style={styles.item}>
                                                <PlacePreview
                                                    item={item}
                                                    onSelectDestination={(id, name) =>
                                                        navigateToNavInformation(
                                                            id, name
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
                <View style={styles.isSearchingContainer}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../../assets/images/no-search-results.png')}
                            style={styles.mainImage}
                        />
                    </View>
                    <Text>
                        Escanea tu ubicación inicial para empezar a navegar...
                    </Text>
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
        setDestination(id, name) {
            dispatch(startSettingDestinationPath(id, name));
        },
    }),
)(Search);
