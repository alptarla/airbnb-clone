import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {SearchIcon} from '../../icons';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSearchScreen = () => navigation.navigate('SearchScreen');

  return (
    <View>
      <Pressable onPress={goToSearchScreen} style={styles.topButton}>
        <SearchIcon style={styles.searchIcon} size={28} />
        <Text style={styles.buttonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.backgroundContent}>
          <Text style={styles.contentTitle}>Go Near</Text>
          <Pressable
            onPress={() => console.log('clicked')}
            style={styles.contentButton}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
