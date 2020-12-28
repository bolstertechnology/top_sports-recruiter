import {StyleSheet} from 'react-native';
import constants from '../../Constants';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: constants.Colors.PRIMARY,
  },
  LogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 3,
  },
  Logo: {
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 25,
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 30,
  },
  InputsContainer: {
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    alignSelf: 'center',
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 80,
  },
  ForgotText: {
    color: constants.Colors.WHITE,
    fontSize: constants.Fonts.fontSizes.FONT14,
  },
  ForgotContainer: {
    alignSelf: 'flex-end',
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 4,
    justifyContent: 'center',
  },
  ButtonContainer: {
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
  },
  SignupOpt: {
    alignSelf: 'center',
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
  },
  forgotOPtions: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
  },
  forgotOptText: {
    color: constants.Colors.WHITE,
    fontSize: constants.Fonts.fontSizes.FONT14,
  },
  forgotPassText:{
    alignSelf:"center",
    fontSize:constants.Fonts.fontSizes.FONT20,
    color:constants.Colors.WHITE,

  }
});
export default styles;
