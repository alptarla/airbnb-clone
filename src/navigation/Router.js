import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PostListScreen from '../screens/PostListScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeBottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostListScreen"
          component={PostListScreen}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
