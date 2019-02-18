import { View, Text } from 'react-native';
import React, { Component } from 'react';

export default class ProposedForServicesScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'ProposedForServicesScreen',
  });

  render() {
    return (
      <View>
        <Text>ProposedForServicesScreen</Text>
      </View>
    );
  }
}

ProposedForServicesScreen.propTypes = {};
