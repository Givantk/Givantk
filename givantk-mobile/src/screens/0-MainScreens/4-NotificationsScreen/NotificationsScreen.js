import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../../../components/commons/UI/Loading/Loading';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';
import NotificationCard from '../../../components/0-MainScreensComponents/4-NotificationsScreenComponents/NotificationCard/NotificationCard';
import styles from './NotificationsScreenStyles';

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
      currentUserProfile,
      navigation,
    } = this.props;

    if (getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

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
