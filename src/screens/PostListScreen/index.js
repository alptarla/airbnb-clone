import React from 'react';
import {FlatList} from 'react-native';
import places from '../../../assets/data/feed';
import Post from '../../components/Post';

const PostListScreen = () => {
  return (
    <FlatList
      style={{height: '100%'}}
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Post place={item} />}
    />
  );
};

export default PostListScreen;
