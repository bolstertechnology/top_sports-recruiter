import React from 'react';
import Home from '../screens/Home/index';
import TabNavigator from '../navigator/TabNavigation';
import DrawerContent from './DrawerContent';
import {createDrawerNavigator} from 'react-navigation-drawer';
import constants from '../constants';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    TabNavigaotr: TabNavigator,
  },
  {
    initialRouteName: 'TabNavigaotr',
    drawerPosition: 'left',
    drawerLockMode: 'unlocked',
    drawerWidth: '100%',
    drawerBackgroundColor: constants.Colors.PRIMARY,
    contentComponent: (props) => {
      return <DrawerContent {...props} />;
    },
  },
);
export default DrawerNavigator;
