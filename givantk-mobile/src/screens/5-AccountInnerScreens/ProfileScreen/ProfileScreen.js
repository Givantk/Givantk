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

  getSnakeNavigatorContent = () => {
    const { profile, getProfileLoading, navigation } = this.props;
    return [
      {
        name: `${profile.first_name} asked for`,
        component: () => (
          <ServicesList
            services={profile.services_asked_for}
            loading={getProfileLoading}
            navigation={navigation}
          />
        ),
      },
      {
        name: `${profile.first_name} helped in`,
        component: () => (
          <ServicesList
            services={profile.services_helped_in}
            loading={getProfileLoading}
            navigation={navigation}
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

          {/* Send a message */}

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Chat')}>
            <View style={styles.sendMessageContainer}>
              <Text style={styles.sendMessageText}>Send a Message</Text>
              <Icon
                type="FontAwesome"
                name="envelope"
                style={styles.sendMessageIcon}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Services */}
          <SnakeNavigator
            content={this.getSnakeNavigatorContent()}
            navigation={navigation}
            snakeWidth={dimensions.fullWidth * 0.7}
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
