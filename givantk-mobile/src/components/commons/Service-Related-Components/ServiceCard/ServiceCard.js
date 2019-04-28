import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import getUserImage from '../../../../assets/utils/getUserImage';
import Loading from '../../UI/Loading/Loading';
import QuickNotification from '../../UI/QuickNotification/QuickNotification';
import styles from './ServiceCardStyles';

class ServiceCard extends React.PureComponent {
  state = {
    bookmarked: false,
  };

  componentWillReceiveProps(nextProps) {
    const { bookmarked } = this.props;
    if (nextProps.bookmarked !== bookmarked) {
      this.setState({ bookmarked: nextProps.bookmarked });
    }
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
    if (!service.reveal_asker) return;
    navigation.navigate('Profile', {
      userId: service.asker._id,
    });
  };

  onPressStar = () => {
    const {
      service,
      onBookmark,
      onUnbookmark,
      bookmarked,
      currentUserHasProfile,
    } = this.props;

    if (!currentUserHasProfile) {
      QuickNotification('Please make a profile first');
      return;
    }

    if (bookmarked) {
      this.setState({ bookmarked: false });
      onUnbookmark(service._id);
    } else {
      this.setState({ bookmarked: true });
      onBookmark(service._id);
    }
  };

  render() {
    const { service } = this.props;
    const { bookmarked } = this.state;

    if (!service) {
      return <Loading />;
    }

    const serviceDescription = service.brief_description
      ? service.brief_description.length > 150
        ? `${service.brief_description.slice(0, 160)}...`
        : service.brief_description
      : service.description
      ? service.description.length > 150
        ? `${service.description.slice(0, 160)}...`
        : service.description
      : null;

    const jsDate = service.date ? new Date(service.date) : new Date();
    const readableDate = `${jsDate.getHours()}:${jsDate.getMinutes()} (${jsDate.getDate()}-${jsDate.getMonth() +
      1}-${jsDate.getFullYear()})`;

    return (
      <TouchableWithoutFeedback onPress={this.onPressCard}>
        <View style={styles.serviceCard}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={this.onPressAskerAvatar}>
              <View>
                <Image
                  source={{
                    uri:
                      service.asker &&
                      getUserImage(
                        service.reveal_asker === false
                          ? null
                          : service.asker.avatar,
                      ),
                  }}
                  style={styles.userImage}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.headerRight}>
              <TouchableWithoutFeedback
                onPress={
                  service.reveal_asker === false
                    ? null
                    : this.onPressAskerAvatar
                }
              >
                <View>
                  {service.reveal_asker === false ? (
                    <Text style={styles.userName}>Anonymous</Text>
                  ) : (
                    <Text style={styles.userName}>
                      {`${service.asker.first_name} ${service.asker.last_name}`}
                    </Text>
                  )}
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.serviceTitle}>{service.name}</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={styles.descriptionText}>{serviceDescription}</Text>
          </View>
          <Text style={styles.dateText}>{readableDate}</Text>

          <View style={styles.footer}>
            {/* <Text style={styles.cost}>{service.cost}</Text> */}
            {service.money_points ? (
              <Text style={styles.points}>
                Money score: {service.money_points} EGP
              </Text>
            ) : (
              <Text style={styles.points}>
                Givantk points: {service.givantk_points}{' '}
              </Text>
            )}
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
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

export default connect(mapStateToProps)(ServiceCard);
