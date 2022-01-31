import React from 'react';
import {Text, View} from 'react-native';
import {LocationIcon} from '../../icons';
import styles from './styles';

const SearchResultItem = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <LocationIcon size={24} style={styles.icon} />
      </View>
      <Text>{text}</Text>
    </View>
  );
};

export default SearchResultItem;
