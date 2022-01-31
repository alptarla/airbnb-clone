import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import places from '../../../assets/data/feed';
import Post from '../../components/Post';

const PostListScreen = () => {
  const navigation = useNavigation();

  const goToMapScreen = (coordinate, title) =>
    navigation.navigate('MapScreen', {coordinate, title});

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Post
          place={item}
          onPress={() => goToMapScreen(item.coordinate, item.title)}
        />
      )}
    />
  );
};

export default PostListScreen;
