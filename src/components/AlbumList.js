import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }
  componentWillMount() {
    console.log("Album List mounted!");
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        console.log('response from api was: ', res.data);
        this.setState({
          albums: res.data
        });
      })
      .catch(err => {
        console.log('got an error: ', err);
      });
  }
  renderAlbums() {
    return this.state.albums.map(album => {
      return(
          <AlbumDetail key={album.title} album={album} />
      );
    });
  }
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}