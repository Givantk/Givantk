import { Icon } from 'native-base';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import fakeProfile from '../../../../assets/data/fakeProfile';
import styles from './ServiceCardStyles';

class ServiceCard extends React.PureComponent {
  state = {
    bookmarked: false,
  };

  componentDidMount() {
    const { bookmarked } = this.props;
    this.setState(() => ({ bookmarked }));
  }

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

  onPressStar = () => {
    const { service, onBookmark, onUnbookmark } = this.props;

    const { bookmarked } = this.state;

    if (bookmarked) {
      onUnbookmark(service._id);
    } else {
      onBookmark(service._id);
    }

    this.setState((prevState) => ({
      bookmarked: !prevState.bookmarked,
    }));
  };

  render() {
    const { service } = this.props;

    const { bookmarked } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.onPressCard}>
        <View style={styles.serviceCard}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={this.navigateToAskerProfile}>
              <View>
                <Image
                  source={{
                    uri: fakeProfile.avatar,
                  }}
                  style={styles.userImage}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.headerRight}>
              <TouchableWithoutFeedback onPress={this.onPressAskerAvatar}>
                <View>
                  <Text style={styles.userName}>
                    {`${service.asker.first_name} ${service.asker.last_name}`}
                  </Text>
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

          <View style={styles.footer}>
            <Text style={styles.cost}>{service.cost}</Text>
            <View style={styles.footerLeft}>
              <TouchableWithoutFeedback onPress={this.onPressStar}>
                <Icon
                  type="AntDesign"
                  name={bookmarked ? 'star' : 'staro'}
                  style={styles.favoriteIcon}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ServiceCard;

ServiceCard.defaultProps = {
  onBookmark: () => null,
  onUnbookmark: () => null,
  bookmarked: false,
  service: {},
};

ServiceCard.propTypes = {
  navigation: PropTypes.shape({}),
  service: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    asker: PropTypes.shape({}),
  }),
  onBookmark: PropTypes.func,
  onUnbookmark: PropTypes.func,
  bookmarked: PropTypes.bool,
};
