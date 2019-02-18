import { View, Text } from 'react-native';
import React, { Component } from 'react';

export default class BookmarkedServicesScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'BookmarkedServicesScreen',
  });

  render() {
    return (
      <View>
        <Text>BookmarkedServicesScreen</Text>
      </View>
    );
  }
}

BookmarkedServicesScreen.propTypes = {};
