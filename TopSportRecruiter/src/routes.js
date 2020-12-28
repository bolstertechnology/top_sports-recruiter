import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
// components
import ActionButton from './Components/ActionButton';
import ActionButtonToolbar from './Components/ActionButton/ActionButtonToolbar';
import ActionButtonSpeedDial from './Components/ActionButton/ActionButtonSpeedDial';
import Avatar from './Components/Avatar';
import BottomNavigation from './Components/BottomNavigation';
import Badge from './Components/Badge';
import Button from './Components/Button';
import Card from './Components/Card';
import Checkbox from './Components/Checkbox';
import Dialog from './Components/Dialog';
import Drawer from './Components/Drawer';
import IconToggle from './Components/IconToggle';
import List from './Components/List';
import RadioButton from './Components/RadioButton';
import Toolbar from './Components/Toolbars';

const AppNavigator = createStackNavigator({
    home: { screen: Home },
    actionButton: { screen: ActionButton },
    actionButtonToolbar: { screen: ActionButtonToolbar },
    actionButtonSpeedDial: { screen: ActionButtonSpeedDial },
    avatar: { screen: Avatar },
    badge: { screen: Badge },
    bottomNavigation: { screen: BottomNavigation },
    button: { screen: Button },
    card: { screen: Card },
    checkbox: { screen: Checkbox },
    dialog: { screen: Dialog },
    drawer: { screen: Drawer },
    iconToggle: { screen: IconToggle },
    list: { screen: List },
    radioButton: { screen: RadioButton },
    toolbar: { screen: Toolbar },
}, {
    headerMode: 'none',
});
const App = createAppContainer(AppNavigator);
export default App;
