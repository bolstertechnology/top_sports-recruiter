import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import constants from '../constants';

export default class Textbox extends Component {
  render() {
    let {
      value,
      placeholder,
      keyboardType,
      onChangeText,
      onPress,
      source,
    } = this.props;

    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={constants.Colors.WHITE}
          style={styles.Textbox}
        />
        <TouchableOpacity onPress={onPress}>
          <Image source={source} style={styles.Icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Textbox: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 70,
    fontSize: constants.Fonts.fontSizes.FONT16,
  },
  MainContainer: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 80,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: constants.Colors.APPGRAY,
  },
  Icon: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
    resizeMode: 'contain',
  },
});
