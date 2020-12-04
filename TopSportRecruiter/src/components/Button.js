import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import constants from '../constants';

export default class Button extends Component {
  render() {
    let {title, onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}>
        <Text style={styles.TitleTxt}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: constants.Colors.BLACK,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 80,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 6,
    borderRadius: 10,
  },
  TitleTxt: {
    color: constants.Colors.WHITE,
    alignSelf: 'center',
    fontSize: constants.Fonts.fontSizes.FONT18,
  },
});
