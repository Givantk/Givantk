import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import * as ProfileActions from '../../../store/actions/profileActions';
import * as ServiceActions from '../../../store/actions/serviceActions';
import Announcement from '../../../components/commons/UI/Announcement/Announcement';
import Loading from '../../../components/commons/UI/Loading/Loading';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';
import NotificationCard from '../../../components/0-MainScreensComponents/4-NotificationsScreenComponents/NotificationCard/NotificationCard';
import styles from './NotificationsScreenStyles';

class NotificationsScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Your Notifications',
  });

  componentDidMount() {
    const { setNotificationsSeen, getCurrentUserProfile, getAllServices } = this.props;
    const callback = () => {
      getCurrentUserProfile();
    }
    setNotificationsSeen(callback);
    getAllServices();
  }

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
      currentUserProfile,
      navigation,
    } = this.props;

    if (!currentUserProfile && getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    if (currentUserProfile.notifications.length === 0)
      return <Announcement text="No Notifications yet" />;

    return (
      <View style={styles.container}>
        <FlatList
          data={currentUserProfile.notifications}
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
  currentUserProfile: PropTypes.shape({}),
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
  setNotificationsSeen: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,

  getAllServices: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentUserProfile: state.profile.currentUserProfile,
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

const mapDispatchToProps = {
  setNotificationsSeen: ProfileActions.setNotificationsSeen,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
  getAllServices: ServiceActions.getAllServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsScreen);
