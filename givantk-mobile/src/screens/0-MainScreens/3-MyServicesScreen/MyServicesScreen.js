import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { dimensions } from '../../../assets/styles/base';
import Loading from '../../../components/commons/UI/Loading/Loading';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';
import ServicesList from '../../../components/commons/Service-Related-Components/ServicesList/ServicesList';
import SnakeNavigator from '../../../components/commons/UI/SnakeNavigator/SnakeNavigator';
import styles from './MyServicesScreenStyles';

class MyServicesScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'My Services',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Entypo"
        name="shopping-bag"
        style={{ color: tintColor, fontSize: 35 }}
      />
    ),
  });

  getSnakeNavigatorContent = () => {
    const { profile, getCurrentProfileLoading, navigation } = this.props;

    return [
      {
        name: 'I asked for',
        component: () => (
          <ServicesList
            services={profile.services_asked_for}
            loading={getCurrentProfileLoading}
            navigation={navigation}
          />
        ),
      },
      {
        name: 'I helped in',
        component: () => (
          <ServicesList
            services={profile.services_helped_in}
            loading={getCurrentProfileLoading}
            navigation={navigation}
          />
        ),
      },
    ];
  };

  render() {
    const {
      navigation,
      getCurrentProfileLoading,
      currentUserHasProfile,
    } = this.props;

    if (getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    return (
      <View style={styles.container}>
        <SnakeNavigator
          content={this.getSnakeNavigatorContent()}
          navigation={navigation}
          snakeWidth={dimensions.fullWidth * 0.7}
        />
      </View>
    );
  }
}

MyServicesScreen.propTypes = {
  navigation: PropTypes.shape({}),
  profile: PropTypes.shape({}),
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  profile: state.profile.currentUserProfile,
  currentUserHasProfile: state.profile.currentUserHasProfile,
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  null,
)(MyServicesScreen);
