import { Icon } from 'native-base';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ServiceCardStyles';

class ServiceCard extends React.PureComponent {
  navigateToServiceScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('Service');
  };

  navigateToAskerProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  };

  render() {
    const { service } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.navigateToServiceScreen}>
        <View style={styles.serviceCard}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={this.navigateToAskerProfile}>
              <Image
                source={{
                  uri: service.asker.imageURL,
                }}
                style={styles.userImage}
              />
            </TouchableWithoutFeedback>
            <View style={styles.headerRight}>
              <TouchableWithoutFeedback onPress={this.navigateToAskerProfile}>
                <View>
                  <Text style={styles.userName}>{service.asker.name}</Text>
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.serviceTitle}>{service.title}</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.descriptionText}>
              {service.briefDescription}
            </Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.cost}>{service.cost}</Text>
            <View style={styles.footerLeft}>
              <Icon type="EvilIcons" name="envelope" style={styles.shareIcon} />
              <Icon type="Feather" name="star" style={styles.favoriteIcon} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ServiceCard;

ServiceCard.propTypes = {
  navigation: PropTypes.shape({}),
  service: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    asker: PropTypes.shape({}),
  }),
};
