import {StyleSheet} from 'react-native';
import constants from '../../constants';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: constants.Colors.PRIMARY,
  },
  LogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Logo: {
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 25,
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 30,
  },
});
export default styles;
