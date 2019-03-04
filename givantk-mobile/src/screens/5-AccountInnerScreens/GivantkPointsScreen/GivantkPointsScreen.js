import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './GivantkPointsScreenStyles';

export default class PersonalInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Givantk points Screen',
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Givantk Points Screen</Text>
      </View>
    );
  }
}

PersonalInfoScreen.propTypes = {};
