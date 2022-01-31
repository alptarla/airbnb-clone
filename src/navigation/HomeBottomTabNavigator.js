import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import colors from '../constants/colors';
import {
  AirbnbIcon,
  HeartIcon,
  MessageIcon,
  ProfileIcon,
  SearchIcon,
} from '../icons';
import HomeScreen from '../screens/HomeScreen';
import NotImplemented from '../screens/NotImplemented';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <SearchIcon size={28} style={{color}} />,
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={NotImplemented}
        options={{
          tabBarIcon: ({color}) => <HeartIcon size={28} style={{color}} />,
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Trips"
        component={NotImplemented}
        options={{
          tabBarIcon: ({color}) => <AirbnbIcon size={28} style={{color}} />,
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={NotImplemented}
        options={{
          tabBarIcon: ({color}) => <MessageIcon size={28} style={{color}} />,
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NotImplemented}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon size={28} style={{color}} />,
          tabBarActiveTintColor: colors.primary,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
