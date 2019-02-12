import { connect } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import NotificationCard from '../../../components/0-MainScreensComponents/4-NotificationsScreenComponents/NotificationCard/NotificationCard';
// import notifications from '../../../assets/data/fakeNotifications';
import styles from './NotificationsScreenStyles';
import Loading from '../../../components/commons/UI/Loading/Loading';

class NotificationsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Notifications',
  });

  renderItem = (notification) => {
    const { navigation } = this.props;
    return (
      <NotificationCard
        notification={notification.item}
        navigation={navigation}
      />
    );
  };

  render() {
    const {
      getCurrentProfileLoading,
      currentUserHasProfile,
      notifications,
    } = this.props;

    if (getCurrentProfileLoading) {
      return <Loading />;
    }
    if (!currentUserHasProfile) {
      return <Text>You have no profile yet</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

NotificationsScreen.propTypes = {
  navigation: PropTypes.shape({}),
  notifications: PropTypes.shape({}),
  currentUserProfile: PropTypes.shape({}),
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUserProfile: state.profile.currentUserProfile,
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

export default connect(
  mapStateToProps,
  null,
)(NotificationsScreen);
