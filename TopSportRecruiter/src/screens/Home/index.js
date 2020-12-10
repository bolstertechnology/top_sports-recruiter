import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import constants from '../../constants';
import {DrawerActions} from 'react-navigation-drawer';


export default class Home extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View style={styles.MainContainer}>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <Image
              style={styles.MenuIcon}
              source={constants.Images.menu}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.PageTitle}>Home</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder={'Search for latest videos ?'}
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Image
              source={constants.Images.search}
              resizeMode="contain"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.PostContaier}>
          <View style={styles.PostHeader}>
            <Image
              source={constants.Images.user}
              resizeMode={'contain'}
              style={styles.PostUser}
            />
            <Text style={styles.UserName}>
              John{`\n`}
              <Text style={styles.PostTime}>Posted 20 m ago</Text>
            </Text>
          </View>
          <ImageBackground
            source={constants.Images.background}
            style={styles.PostContain}>
            <TouchableOpacity>
              <Image
                source={constants.Images.play}
                style={styles.PlayButton}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.PostBottom}>
            <Text style={{padding: 5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <Text style={{fontWeight: 'bold'}}>Read More</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: constants.Colors.PRIMARY,
  },
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
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 12,
    textAlign: 'center',
    color: constants.Colors.WHITE,
    fontSize: constants.Fonts.fontSizes.FONT14,
  },
  searchContainer: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 86,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 5,
    backgroundColor: constants.Colors.WHITE,
    alignSelf: 'center',
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 1,
    flexDirection: 'row',
  },
  searchInput: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 75,
  },
  searchIcon: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 8,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 8,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  PostContaier: {
    borderRadius: 5,
    alignSelf: 'center',
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 86,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 57,
    marginTop: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    overflow: 'hidden',
  },
  PostUser: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 10,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 10,
    marginLeft: (constants.BaseStyle.DEVICE_WIDTH / 100) * 2,
  },
  PostHeader: {
    flexDirection: 'row',
    backgroundColor: constants.Colors.WHITE,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 8,
    alignItems: 'center',
  },
  PostTime: {
    fontSize: constants.Fonts.fontSizes.FONT10,
    color: '#A5A5A5',
    fontWeight: '500',
  },
  UserName: {
    fontWeight: 'bold',
    fontSize: constants.Fonts.fontSizes.FONT14,
    color: constants.Colors.BLACK,
    marginLeft: (constants.BaseStyle.DEVICE_WIDTH / 100) * 2,
  },
  PostContain: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 86,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlayButton: {
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 25,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 25,
  },
  PostBottom: {
    backgroundColor: constants.Colors.WHITE,
    height: (constants.BaseStyle.DEVICE_HEIGHT / 100) * 14,
  },
});
