import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import constants from '../constants';

class DrawerContent extends Component {
  render() {
    return (
      <View>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.c());
            }}>
            <Image
              style={styles.MenuIcon}
              source={constants.Images.menu}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.PageTitle}>Customer Support</Text>
        </View>
      </View>
    );
  }
}
export default withNavigation(DrawerContent);

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 90,
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
    alignItems: 'center',
  },
  MenuIcon: {
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 10,
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 10,
  },
  PageTitle: {
    textAlign: 'center',
    color: constants.Colors.WHITE,
    fontSize: constants.Fonts.fontSizes.FONT16,
  },
});
