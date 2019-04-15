import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, dimensions } from '../../../assets/styles/base';
import * as ProfileActions from '../../../store/actions/profileActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import getUserImage from '../../../assets/utils/getUserImage';
import Loading from '../../../components/commons/UI/Loading/Loading';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
import RatingList from '../../../components/commons/Rating-Related-Components/RatingList/RatingList';
import SnakeNavigator from '../../../components/commons/UI/SnakeNavigator/SnakeNavigator';
import styles from './ProfileScreenStyles';

class ProfileScreen extends React.Component {
  // When navigating to this screen, we will always pass to it the userId in the
  // navigation params.

  static navigationOptions = () => ({
    headerTitle: 'Profile',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  state = {
    userId: null,
  };

  componentDidMount() {
    const { navigation, getProfileByUserId } = this.props;

    if (navigation.state.params) {
      const { userId } = navigation.state.params;

      this.setState(() => ({
        userId,
      }));
      getProfileByUserId(userId);
    }
  }

  filterService = (services, type) => {
    const filtered = services.filter(
      (service) =>
        (type === 'asked' && service.asker_is_rated && service.reveal_asker!==false) ||
        (type === 'helped' && service.helper_is_rated),
    );

    return filtered;
  };

  getSnakeNavigatorContent = () => {
    const { profile, getProfileLoading, navigation } = this.props;
    const { services_asked_for, services_helped_in } = profile;

    const RatedServicesArray = [
      ...this.filterService(services_asked_for, 'asked'),
      ...this.filterService(services_helped_in, 'helped'),
    ];

    return [
      {
        name: 'Asked for',
        component: () => (
          <ServicesList
            services={profile.services_asked_for.filter((service)=>service.reveal_asker!==false)}
            loading={getProfileLoading}
            navigation={navigation}
          />
        ),
      },
      {
        name: 'Helped in',
        component: () => (
          <ServicesList
            services={profile.services_helped_in}
            loading={getProfileLoading}
            navigation={navigation}
          />
        ),
      },
      {
        name: 'Reviews',
        component: () => (
          <RatingList
            services={RatedServicesArray}
            loading={getProfileLoading}
            navigation={navigation}
            openedProfile={profile}
          />
        ),
      },
    ];
  };

  render() {
    const {
      navigation,
      profile,
      getProfileLoading,
      selectedUserHasProfile,
    } = this.props;

    const { userId } = this.state;

    if (getProfileLoading || !userId) return <Loading />;

    if (!selectedUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    return (
      <View style={styles.container}>
        <AvoidKeyboard>
          {/* Image and name */}

          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: profile && getUserImage(profile.avatar),
              }}
              style={styles.image}
            />
            <Text style={styles.userName}>
              {profile.first_name} {profile.last_name}
            </Text>
          </View>
          {/* Description */}

          <View style={styles.userDescriptionContainer}>
            <Text style={styles.userDescription}>{profile.description}</Text>
          </View>

          <View style={styles.userDescriptionContainer}>
            <Text style={styles.points}>
              Givantk points: {profile.givantk_points}
            </Text>
          </View>

          <View style={styles.userDescriptionContainer}>
            <Text style={styles.points}>
              Average Rating:
              {profile.average_services_rating === 0
                ? ' Not Yet'
                : profile.average_services_rating}
            </Text>
          </View>



          {/* Services */}
          <SnakeNavigator
            content={this.getSnakeNavigatorContent()}
            navigation={navigation}
            snakeWidth={dimensions.fullWidth * 0.9}
          />
        </AvoidKeyboard>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({}),
  getProfileByUserId: PropTypes.func,
  profile: PropTypes.shape({}),
  selectedUserHasProfile: PropTypes.bool,
  getProfileLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  profile: state.profile.selectedProfile,
  selectedUserHasProfile: state.profile.selectedUserHasProfile,
  getProfileLoading: state.profile.getProfileLoading,
  errors: state.errors,
});

const mapDispatchToProps = {
  getProfileByUserId: ProfileActions.getProfileByUserId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
