import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <Text>Some Text</Text>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);