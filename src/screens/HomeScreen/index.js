import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {SearchIcon} from '../../icons';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.backgroundImage}>
        <Pressable onPress={() => {}} style={styles.topButton}>
          <SearchIcon style={styles.searchIcon} size={28} />
          <Text style={styles.buttonText}>Where are you going?</Text>
        </Pressable>
        <View style={styles.backgroundContent}>
          <Text style={styles.contentTitle}>Go Near</Text>
          <Pressable onPress={() => {}} style={styles.contentButton}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
