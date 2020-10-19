import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Image,
    Text,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Button
} from 'react-native';
import Voice from '@react-native-community/voice';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          recognized: false,
          started: false,
          results: [],
          searchQuery: ''
        };

        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
    }
    componentWillUnmount() {
      Voice.destroy().then(Voice.removeAllListeners);
    }

    onSpeechStart(e) {
      this.setState({
        started: true,
      });
    };
  
    onSpeechRecognized(e) {
      this.setState({
        recognized: true,
      });
    };
  
    onSpeechResults(e) {
      this.setState({ searchQuery: e.value[0], started: false});
      this.props.searchPlace(e.value[0]);
    }

    async _startRecognition(e) {
      this.setState({
        recognized: '',
        started: '',
        results: [],
      });
      try {
        await Voice.start('es');
      } catch (e) {
        console.error(e);
      }
    }


    changeQueryField = (query) => {
        this.setState({ searchQuery: query});
        this.props.searchPlace(query);
    };

    navigateToNavInformation = (id, name) => {
        console.log('Going to Nav to End Node>', id, name);
        this.props.setDestination(id, name);
        this.props.navigation.push('Information');
    };

    render() {
        const {isSearching,isLocalized,dataList} = this.props
        const searchQuery = this.state.searchQuery;
        return (
            <View style={styles.container}>
                {isLocalized ? (
                    <>
                        <Input
                            style={styles.inputContainer}
                            placeholder="Buscar destino..."
                            value={searchQuery}
                            onChangeText={(text) => this.changeQueryField(text)}
                        />
                        <TouchableOpacity
                          style={styles.voiceButton}
                          onPress={this._startRecognition.bind(this)}
                          >
                             <Ionicons
                                name={this.state.started ? 'ear-outline' : 'mic'}
                                size={24}
                                color={'red'}
                              />
                          </TouchableOpacity>
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
                                                            this.navigateToNavInformation(
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
}

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
