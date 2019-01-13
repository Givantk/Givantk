import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import NotificationCard from '../../../components/0-MainScreensComponents/4-NotificationsScreenComponents/NotificationCard/NotificationCard';
import notifications from '../../../assets/data/fakeNotifications';
import styles from './NotificationsScreenStyles';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Notifications',
  });

  renderItem = (notification) => {
    const { navigation } = this.props;
    return (
      <NotificationCard
        notification={notification.item}
        navigation={navigation}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

NotificationsScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
