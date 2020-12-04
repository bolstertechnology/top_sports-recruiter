import {Dimensions, PixelRatio, Platform} from 'react-native';

let SCREEN_HEIGHT = Dimensions.get('window').height;
let SCREEN_WIDTH = Dimensions.get('window').width;

export const windowHeight = (height) => {
  let tempHeight = SCREEN_HEIGHT * (parseFloat(height) / 667);
  return PixelRatio.roundToNearestPixel(tempHeight);
};

export const windowWidth = (width) => {
  let tempWidth = SCREEN_WIDTH * (parseFloat(width) / 375);
  return PixelRatio.roundToNearestPixel(tempWidth);
};

export const fontSizes = {
  FONT08: windowWidth(8),
  FONT09: windowWidth(9),
  FONT10: windowWidth(10),
  FONT12: windowWidth(12),
  FONT14: windowWidth(14),
  FONT15: windowWidth(15),
  FONT16: windowWidth(16),
  FONT17: windowWidth(17),
  FONT18: windowWidth(18),
  FONT20: windowWidth(20),
  FONT22: windowWidth(22),
  FONT24: windowWidth(24),
  FONT26: windowWidth(26),
  FONT28: windowWidth(28),
};

const AppConstant = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  AppBackgroundColor: '#fff',
  ButtonBackgroundColor: '3fd0fb',
  navBarHeight:
    Platform.OS === 'android' ? windowHeight(70) - 16 : windowHeight(70),
};

export default AppConstant;
