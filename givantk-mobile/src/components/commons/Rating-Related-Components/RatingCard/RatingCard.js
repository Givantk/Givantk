import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import getUserImage from '../../../../assets/utils/getUserImage';
import styles from '../../Service-Related-Components/ServiceCard/ServiceCardStyles';

class RatingCard extends React.PureComponent {
  onPressCard = () => {
    const { service } = this.props;

    const { navigation } = this.props;
    navigation.navigate('Service', {
      service,
    });
  };

  onPressAskerAvatar = () => {
    const { navigation, service } = this.props;
    navigation.navigate('Profile', {
      userId: service.asker._id,
    });
  };

  render() {
    const { service } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onPressCard}>
        <View style={styles.serviceCard}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={this.navigateToAskerProfile}>
              <View>
                <Image
                  source={{
                    uri: service.asker && getUserImage(service.asker.avatar),
                  }}
                  style={styles.userImage}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.headerRight}>
              <TouchableWithoutFeedback onPress={this.onPressAskerAvatar}>
                <View>
                  {service.askedByUser ? (
                    <Text style={styles.userName}>
                      {`${service.helper.first_name} reviewed ${
                        service.asker.first_name
                      }`}
                    </Text>
                  ) : (
                    <Text style={styles.userName}>
                      {`${service.asker.first_name} reviewed ${
                        service.helper.first_name
                      }`}
                    </Text>
                  )}
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.serviceTitle}>{service.name}</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.descriptionText}>
              {service.brief_description || service.description}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default RatingCard;

RatingCard.defaultProps = {
  service: {},
};

RatingCard.propTypes = {
  navigation: PropTypes.shape({}),
  service: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    asker: PropTypes.shape({}),
  }),
};
