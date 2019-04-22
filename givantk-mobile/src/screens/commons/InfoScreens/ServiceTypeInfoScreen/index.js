import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles';

export default class ServiceTypeInfoScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Service Types',
  });

  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Givantk Service Types</Text>
          <Text style={styles.content}>There are four types of services.</Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              1-Knowledge exchange:
            </Text>{' '}
            When you want to ask about something you want to know from others,
            you can choose this type of service. You can also ask for this type
            of services anonymously.
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              2-EveryDay services:{' '}
            </Text>
            If you want to interact with someone in real world to help you in
            services like transporting something or buying something for you.{' '}
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              3-Reach the community:{' '}
            </Text>
            If you want to reach someone, e.g: you want to make a startup and
            you want someone with technical knowledge you can choose this
            option, and write the qualifications of the person you need.
          </Text>
          <Text style={styles.content}>
            <Text style={[styles.content, { fontWeight: 'bold' }]}>
              4-Others:
            </Text>
            If your service is not related to any of the above types, you can
            choose this option.
          </Text>
          <Text style={styles.signature}>Givantk Team</Text>
        </View>
      </ScrollView>
    );
  }
}

ServiceTypeInfoScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
