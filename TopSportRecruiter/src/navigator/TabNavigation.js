import React from 'react';
import {createAppContainer, withNavigation} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import constants from '../constants';
import {View, Text, Image, StyleSheet} from 'react-native';
import Home from '../screens/Home/index';
import Profile from '../screens/Home/profile';
import FindPlayer from '../screens/Home/findplayer';
import Videos from '../screens/Home/videos';
import Messages from '../screens/Home/messages';
import Support from '../screens/Home/support';

const routes = {
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <Text
          style={{
            color: focused ? '#fff' : '#ccc',
            fontWeight: focused ? 'bold' : '600',
            fontSize: 10,
          }}>
          HOME
        </Text>
      ),
    }),
  },

  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <Text
          style={{
            color: focused ? '#fff' : '#ccc',
            fontWeight: focused ? 'bold' : '600',
            fontSize: 10,
          }}>
          PROFILE
        </Text>
      ),
    }),
  },

  FindPlayer: {
    screen: FindPlayer,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <Text
          style={{
            color: focused ? '#fff' : '#ccc',
            fontWeight: focused ? 'bold' : '600',
            fontSize: 10,
            width: 120,
            textAlign: 'center',
          }}>
          FIND PLAYERS
        </Text>
      ),
    }),
  },

  Videos: {
    screen: Videos,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <Text
          style={{
            color: focused ? '#fff' : '#ccc',
            fontWeight: focused ? 'bold' : '600',
            fontSize: 10,
          }}>
          VIDEOS
        </Text>
      ),
    }),
  },

  Messages: {
    screen: Messages,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <Text
          style={{
            color: focused ? '#fff' : '#ccc',
            fontSize: 10,
            fontWeight: focused ? 'bold' : '600',
          }}>
          MESSAGES
        </Text>
      ),
    }),
  },

  Support: {
    screen: Support,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <Text
          style={{
            color: focused ? '#fff' : '#ccc',
            fontSize: 10,
            fontWeight: focused ? 'bold' : '600',
          }}>
          SUPPORT
        </Text>
      ),
    }),
  },
};

const tabBarConfiguration = {
  tabBarOptions: {
    activeTintColor: constants.Colors.PRIMARY,
    showIcon: true,
    showLabel: false,
    style: {
      height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 8,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  },
  initialRouteName: 'Home',
};

const HomeNavigator = createBottomTabNavigator(routes, tabBarConfiguration);

export default createAppContainer(withNavigation(HomeNavigator));
