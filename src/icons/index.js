import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';

export const SearchIcon = ({size, style}) => (
  <EvilIcons name="search" size={size} style={style} />
);
export const HeartIcon = ({size, style}) => (
  <EvilIcons name="heart" size={size} style={style} />
);
export const AirbnbIcon = ({size, style}) => (
  <FontAwesome5Brands name="airbnb" size={size} style={style} />
);
export const MessageIcon = ({size, style}) => (
  <Feather name="message-square" size={size} style={style} />
);
export const ProfileIcon = ({size, style}) => (
  <EvilIcons name="user" size={size} style={style} />
);
