import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './NotificationsScreenStyles';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Notifications Screen',
  });

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Notifications screen</Text>
        <Button
          title="Service"
          onPress={() => navigation.navigate('Service')}
        />

        <Button title="Person" onPress={() => navigation.navigate('Profile')} />
      </View>
    );
  }
}

NotificationsScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
