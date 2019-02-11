import { View, TouchableWithoutFeedback, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './NotificationCardStyles';

class NotificationCard extends React.PureComponent {
  onPressAvatar = () => {
    const { navigation, notification } = this.props;
    if (notification.is_user_associated) {
      navigation.navigate('Profile', {
        profile: notification.user_profile_associated,
      });
    } else {
      this.onPressBody();
    }
  };

  onPressBody = () => {
    const { navigation, notification } = this.props;
    if (notification.navigateTo.kind === 'service') {
      navigation.navigate('Service', {
        service: notification.navigateTo.service,
      });
    } else if (notification.navigateTo.kind === 'profile') {
      navigation.navigate('Profile', {
        profile: notification.navigateTo.profile,
      });
    }
  };

  render() {
    const { notification } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onPressBody}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.onPressAvatar}>
            {/* <Image
              source={{
                uri: notification.userAssociated.imageURL,
              }}
              style={styles.image}
            /> */}
            <View style={{ marginRight: 20 }}>
              <Text>(Avatar)</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{notification.title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default NotificationCard;

NotificationCard.propTypes = {
  navigation: PropTypes.shape({}),
  notification: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    navigateTo: PropTypes.shape({}),
    isUserAssociated: PropTypes.bool,
    userAssociated: PropTypes.shape({}),
    toUser: PropTypes.shape({}),
  }),
};
