import { View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { newUserImage } from '../../../../assets/constants';
import styles from './NotificationCardStyles';
import getUserImage from '../../../../assets/utils/getUserImage';

class NotificationCard extends React.PureComponent {
  onPressAvatar = () => {
    const { navigation, notification } = this.props;
    if (notification.is_user_associated) {
      navigation.navigate('Profile', {
        userId:
          notification.user_associated._id || notification.user_associated,
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
        userId:
          notification.navigateTo.profile.user._id ||
          notification.navigateTo.profile.user,
      });
    }
  };

  render() {
    const { notification } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onPressBody}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.onPressAvatar}>
            <Image
              source={{
                uri: notification.is_user_associated
                  ? getUserImage(notification.user_associated.avatar)
                  : newUserImage,
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
