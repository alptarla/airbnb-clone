import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SearchResultItem from '../../components/SearchResultItem';
import {GOOGLE_API_KEY} from '../../constants/keys';
import styles from './styles';

const SearchScreen = () => {
  const placesRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    placesRef?.current?.focus();
  }, []);

  const goToResults = location =>
    navigation.navigate('PostListScreen', {title: location});

  console.log('GOOGLE_API_KEY', GOOGLE_API_KEY);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search places..."
        ref={placesRef}
        onPress={({description}) => goToResults(description)}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
        styles={styles.places}
        renderRow={item => <SearchResultItem text={item.description} />}
      />
    </View>
  );
};

export default SearchScreen;
