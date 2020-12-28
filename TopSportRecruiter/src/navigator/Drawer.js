import React from 'react';
import Home from '../Screens/Home/index';
import TabNavigator from '../Navigator/TabNavigation';
import DrawerContent from './DrawerContent';
import {createDrawerNavigator} from 'react-navigation-drawer';
import constants from '../Constants';

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
