/**
 * @format
*/
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import React, { Component } from 'react';
class Main extends Component {
  render() {
    return (
      <App />
    );
  }
}
AppRegistry.registerComponent(appName, () => Main);
