import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles';

export default class ServiceNatureInfoScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service Natures',
  });

  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Givantk Service Nature</Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              Service Nature
            </Text>{' '}
            indicates whether the service is{' '}
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              free ✨
            </Text>{' '}
            or{' '}
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              paid 💰
            </Text>
            , our app currently supports free services, and will support paid
            services soon.
          </Text>
          <Text style={styles.content}>
            When you choose the service nature to be free,{' '}
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              you will deal with something called Givantk Points{' '}
            </Text>
            . When you register in the app you take 100 Givantk Points by
            default, and use them to ask for services, and they will be taken
            from you and given to your helper.
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              Givantk Points
            </Text>{' '}
            can be exchanged in the future with prizes, and discounts from large
            stores, so try to collect as much as you can by helping other in
            free services.
          </Text>
          <Text style={styles.signature}>Givantk Team</Text>
        </View>
      </ScrollView>
    );
  }
}

ServiceNatureInfoScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
