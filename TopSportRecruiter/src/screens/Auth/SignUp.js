import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity,TextInput} from 'react-native';
import styles from './style';
import constants from '../../Constants';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

export default class Signup extends Component {
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
          <TextInput placeholder={'Full Name'} />
        </View>
        <View style={styles.InputsContainer}>
          <TextInput placeholder={'Email'} />
        </View>
        <View style={styles.InputsContainer}>
          <TextInput source={constants.Images.Eye} placeholder={'Password'} />
        </View>
        <View style={styles.InputsContainer}>
          <TextInput
            source={constants.Images.DropDown}
            placeholder={'Profile Type'}
          />
        </View>
        <View
          style={[
            styles.ButtonContainer,
            {marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 10},
          ]}>
          <Button title="SIGN UP" />
          <View style={styles.SignupOpt}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LoginScreen')}
              style={styles.ForgotContainer}>
              <Text style={styles.ForgotText}>
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
