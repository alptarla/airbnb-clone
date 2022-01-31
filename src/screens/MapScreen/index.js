import {useRoute} from '@react-navigation/native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';

const MapScreen = () => {
  const {coordinate} = useRoute().params;

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker coordinate={coordinate} />
    </MapView>
  );
};

export default MapScreen;
