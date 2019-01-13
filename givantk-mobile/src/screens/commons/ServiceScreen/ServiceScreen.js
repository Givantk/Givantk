import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import styles from './ServiceScreenStyles';

export default class ServiceScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service Screen',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  render() {
    const { navigation } = this.props;
    const serviceId = navigation.getParam('_id', null);
    // Then request for this service
    return (
      <View style={styles.wrapper}>
        <Text>Service Screen</Text>
        <Text>{serviceId}</Text>
        <Button
          title="Add Proposal"
          onPress={() => navigation.navigate('AddProposal')}
        />

        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

ServiceScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
