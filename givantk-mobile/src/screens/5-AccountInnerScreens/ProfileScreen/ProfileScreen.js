import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, dimensions } from '../../../assets/styles/base';
import * as ProfileActions from '../../../store/actions/profileActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import Loading from '../../../components/commons/UI/Loading/Loading';
import fakeProfile from '../../../assets/data/fakeProfile';
import SnakeNavigator from '../../../components/commons/UI/SnakeNavigator/SnakeNavigator';
import styles from './ProfileScreenStyles';
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';

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

  componentDidMount() {
    const { navigation, getProfileByUserId } = this.props;
    const { userId } = navigation.state.params;
    getProfileByUserId(userId);
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

    if (getProfileLoading) return <Loading />;

    if (!selectedUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    return (
      <View style={styles.container}>
        <AvoidKeyboard>
          {/* Imagne and name */}

          <View style={styles.imageContainer}>
            <Image source={{ uri: fakeProfile.avatar }} style={styles.image} />
            <Text style={styles.userName}>
              {profile.first_name} {profile.last_name}
            </Text>
          </View>
          {/* Description */}

          <View style={styles.userDescriptionContainer}>
            <Text style={styles.userDescription}>{profile.description}</Text>
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
