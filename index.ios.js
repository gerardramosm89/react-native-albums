import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
class App extends Component {


  render() {
    return (
      <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}


AppRegistry.registerComponent('albums', () => App);