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
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={constants.Images.home}
            resizeMode={'contain'}
          />
          <Text
            style={{
              color: focused ? '#fff' : '#ccc',
              fontWeight: focused ? 'bold' : '600',
              fontSize: 10,
            }}>
            HOME
          </Text>
        </View>
      ),
    }),
  },

  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={constants.Images.profile}
            resizeMode={'contain'}
          />
          <Text
            style={{
              color: focused ? '#fff' : '#ccc',
              fontWeight: focused ? 'bold' : '600',
              fontSize: 10,
            }}>
            PROFILE
          </Text>
        </View>
      ),
    }),
  },

  FindPlayer: {
    screen: FindPlayer,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={constants.Images.findPlayer}
            resizeMode={'contain'}
          />
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
        </View>
      ),
    }),
  },

  Videos: {
    screen: Videos,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={constants.Images.videos}
            resizeMode={'contain'}
          />
          <Text
            style={{
              color: focused ? '#fff' : '#ccc',
              fontWeight: focused ? 'bold' : '600',
              fontSize: 10,
            }}>
            VIDEOS
          </Text>
        </View>
      ),
    }),
  },

  Messages: {
    screen: Messages,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={constants.Images.messages}
            resizeMode={'contain'}
          />
          <Text
            style={{
              color: focused ? '#fff' : '#ccc',
              fontSize: 10,
              fontWeight: focused ? 'bold' : '600',
            }}>
            MESSAGES
          </Text>
        </View>
      ),
    }),
  },

  Support: {
    screen: Support,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={constants.Images.support}
            resizeMode={'contain'}
          />
          <Text
            style={{
              color: focused ? '#fff' : '#ccc',
              fontSize: 10,
              fontWeight: focused ? 'bold' : '600',
            }}>
            SUPPORT
          </Text>
        </View>
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

const styles = StyleSheet.create({
  tabView: {
    alignItems: 'center',
  },
  tabIcon: {
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
  },
});

const HomeNavigator = createBottomTabNavigator(routes, tabBarConfiguration);

export default createAppContainer(withNavigation(HomeNavigator));
