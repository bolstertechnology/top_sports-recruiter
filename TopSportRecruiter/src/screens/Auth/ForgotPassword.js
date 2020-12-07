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
          <Text style={styles.forgotPassText}>Forgot Password</Text>
        </View>
        <View style={[styles.InputsContainer, styles.ButtonContainer]}>
          <TextInput placeholder={'Email'} />
        </View>

        <View style={[styles.ButtonContainer]}>
          <CommonButton title="SIGN EMAIL" />
          <View style={styles.forgotOPtions}>
            <TouchableOpacity>
              <Text style={styles.forgotOptText}>Sign in |</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotOptText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
