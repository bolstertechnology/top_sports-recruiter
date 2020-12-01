import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/SignIn';

const AppNavigator = createStackNavigator(
  {
    LoginScreen: {screen: Login},
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(AppNavigator);
