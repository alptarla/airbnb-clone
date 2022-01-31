import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SearchResultItem from '../../components/SearchResultItem';
import {GOOGLE_API_KEY} from '../../constants/keys';
import styles from './styles';

const SearchScreen = () => {
  const placesRef = useRef(null);

  useEffect(() => {
    placesRef?.current?.focus();
  }, []);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search places..."
        ref={placesRef}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
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
