import { View, Text } from 'react-native';
import React, { Component } from 'react';

import styles from './PaymentInfoScreenStyles';

export default class PaymentInfoScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Payment Info',
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Payment Info</Text>
      </View>
    );
  }
}

PaymentInfoScreen.propTypes = {};
