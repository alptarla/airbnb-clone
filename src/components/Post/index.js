import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const Post = ({place}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: place.image}} style={styles.image} />
      <Text style={styles.bedroomsText}>
        {`${place.bed} bed - ${place.bedroom} bedroom`}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {`${place.type} - ${place.title}`}
      </Text>
      <Text style={styles.priceText}>
        <Text style={styles.oldPrice}>${place.oldPrice}</Text>
        <Text style={styles.newPrice}> ${place.newPrice} </Text> / night
      </Text>
      <Text style={styles.totalPrice}>${place.totalPrice} total</Text>
    </View>
  );
};

export default Post;
