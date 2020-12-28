import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity,TextInput} from 'react-native';
import styles from './style';
import constants from '../../Constants';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';

export default class Login extends Component {
  render() {
    let defaultEmail = `email@email.com`;
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
        <TextField
                ref={this.emailRef}
                defaultValue={defaultEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onFocus={this.onFocus}
                returnKeyType='next'
                label='Email Address'
                error={errors.email}
              />
        </View>
        <View style={styles.InputsContainer}>
          <TextField
                ref={this.passwordRef}
                secureTextEntry={secureTextEntry}
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                clearTextOnFocus={true}
                onFocus={this.onFocus}
                returnKeyType='done'
                label='Password'
                error={errors.password}
                title='Choose wisely'
                maxLength={30}
                characterRestriction={20}
                renderRightAccessory={this.renderPasswordAccessory}
              />
          <TouchableOpacity style={styles.ForgotContainer} onPress={()=> this.props.navigation.navigate("ForgotPasswordScreen")}>
            <Text style={styles.ForgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <Button primary text="SIGN IN" onPress={() => this.props.navigation.replace('Drawer')} />
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
