import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/SignIn';
import Signup from '../screens/Auth/SignUp';

const AppNavigator = createStackNavigator(
  {
    LoginScreen: {screen: Login},
    SignupScreen: {screen: Signup},
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(AppNavigator);
