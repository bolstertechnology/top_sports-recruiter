import {createAppContainer, withNavigation} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/SignIn';
import Signup from '../screens/Auth/SignUp';
import TabNavigator from './TabNavigation';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Drawer from './Drawer';

const AppNavigator = createStackNavigator(
  {
    LoginScreen: {screen: Login},
    SignupScreen: {screen: Signup},
    TabNavigator: {screen: TabNavigator},
    ForgotPasswordScreen: {screen: ForgotPassword},
    Drawer: {screen: Drawer},
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(withNavigation(AppNavigator));
