import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './NotificationCardStyles';

class NotificationCard extends React.PureComponent {
  navigateAvatar = () => {
    const { navigation, notification } = this.props;
    if (notification.isUserAssociated) {
      navigation.navigate('Profile', {
        _id: notification.userAssociated._id,
      });
    } else {
      this.navigateBody();
    }
  };

  navigateBody = () => {
    const { navigation, notification } = this.props;
    if (notification.navigateTo.type === 'service') {
      navigation.navigate('Service', {
        _id: notification.navigateTo._id,
      });
    } else if (notification.navigateTo.type === 'profile') {
      navigation.navigate('Profile', {
        _id: notification.navigateTo._id,
      });
    }
  };

  render() {
    const { notification } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.navigateBody}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.navigateAvatar}>
            <Image
              source={{
                uri: notification.userAssociated.imageURL,
              }}
              style={styles.image}
            />
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
