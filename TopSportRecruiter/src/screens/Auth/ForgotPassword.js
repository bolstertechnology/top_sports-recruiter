import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity,TextInput} from 'react-native';
import styles from './style';
import constants from '../../Constants';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

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
          <Button title="SIGN EMAIL" />
          <View style={styles.forgotOPtions}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={styles.forgotOptText}>Sign in |</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignupScreen')}>
              <Text style={styles.forgotOptText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
