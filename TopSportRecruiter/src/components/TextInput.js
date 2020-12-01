import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import constants from '../constants';

export default class Textbox extends Component {
  render() {
    let {value, placeholder, keyboardType, onChangeText} = this.props;

    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor={constants.Colors.WHITE}
        style={styles.Textbox}
      />
    );
  }
}

const styles = StyleSheet.create({
  Textbox: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 80,
    borderBottomWidth: 1,
    borderColor: constants.Colors.APPGRAY,
    alignSelf: 'center',
    color: constants.Colors.WHITE,
  },
});
