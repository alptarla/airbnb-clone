import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Pressable, ScrollView, Text, View} from 'react-native';
import places from '../../../assets/data/feed';
import Post from '../../components/Post';
import {SearchIcon} from '../../icons';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSearchScreen = () => navigation.navigate('SearchScreen');
  const goToPostListScreen = () =>
    navigation.navigate('PostListScreen', {title: 'Nearby stays'});
  const goToMapScreen = (coordinate, title) =>
    navigation.navigate('MapScreen', {coordinate, title});

  return (
    <ScrollView>
      <Pressable onPress={goToSearchScreen} style={styles.topButton}>
        <SearchIcon style={styles.searchIcon} size={28} />
        <Text style={styles.buttonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.backgroundContent}>
          <Text style={styles.contentTitle}>Go Near</Text>
          <Pressable onPress={goToPostListScreen} style={styles.contentButton}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
      <View style={styles.postList}>
        <Text style={styles.postListTitle}>Live anywhere</Text>
        {places.splice(0, 2).map((place, index) => (
          <Post
            key={index}
            place={place}
            onPress={() => goToMapScreen(place.coordinate, place.title)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
