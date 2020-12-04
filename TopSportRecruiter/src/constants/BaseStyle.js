import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const isIOS = Platform.OS === "ios";

const BaseStyle = {
    DEVICE_HEIGHT: y,
    DEVICE_WIDTH: x,
    DRAWER_HEIGHT: y,
    DRAWER_OFFSET: 0.3,
    DRAWER_WIDTH: x * 0.53,
    MARGIN_TOP_IOS: isIOS ? getStatusBarHeight() : 0,
    PADDING: (x / 100) * 5,
    GETSTATUSBARHEIGHT: getStatusBarHeight()
};

module.exports = BaseStyle;
