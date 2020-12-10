import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import constants from '../../constants';
import TextInput from '../../components/TextInput';
import CommonButton from '../../components/Button';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.LogoContainer}>
          <Image
            style={styles.Logo}
            source={constants.Images.Logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.InputsContainer}>
          <TextInput placeholder={'Email'} />
        </View>
        <View style={styles.InputsContainer}>
          <TextInput source={constants.Images.Eye} placeholder={'Password'} />
          <TouchableOpacity style={styles.ForgotContainer} onPress={()=> this.props.navigation.navigate("ForgotPasswordScreen")}>
            <Text style={styles.ForgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <CommonButton
            title="SIGN IN"
            onPress={() => this.props.navigation.replace('Drawer')}
          />
          <View style={styles.SignupOpt}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignupScreen')}
              style={styles.ForgotContainer}>
              <Text style={styles.ForgotText}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
