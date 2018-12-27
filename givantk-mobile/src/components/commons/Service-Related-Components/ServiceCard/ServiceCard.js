import { Icon } from 'native-base';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ServiceCardStyles';

const ServiceCard = (props) => {
  const { service, navigateToServiceScreen } = props;

  return (
    <TouchableWithoutFeedback onPress={navigateToServiceScreen}>
      <View style={styles.serviceCard}>
        <View style={styles.header}>
          <Image
            source={{
              uri: service.poster.imageURL,
            }}
            style={styles.userImage}
          />
          <View style={styles.headerRight}>
            <Text style={styles.userName}>{service.poster.name}</Text>
            <Text style={styles.serviceTitle}>{service.title}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.descriptionText}>{service.description}</Text>
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
};

export default ServiceCard;

ServiceCard.propTypes = {
  navigateToServiceScreen: PropTypes.func,
  service: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    poster: PropTypes.shape({
      name: PropTypes.string,
      imageURL: PropTypes.string,
    }),
  }),
};
