import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import constants from '../../constants';
import TextInput from '../../components/TextInput';

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
        <View>
          <TextInput placeholder={'Email'} />
        </View>
      </View>
    );
  }
}
