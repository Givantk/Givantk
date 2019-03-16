import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as ProfileActions from '../../../../store/actions/profileActions';
import * as ServiceActions from '../../../../store/actions/serviceActions';
import Announcement from '../../UI/Announcement/Announcement';
import Loading from '../../UI/Loading/Loading';
import QuickNotification from '../../UI/QuickNotification/QuickNotification';
import ServiceCard from '../ServiceCard/ServiceCard';

class ServicesList extends Component {
  state = {
    refreshing: false,
  };

  renderItem = (service) => {
    const {
      navigation,
      currentUserProfile,
      getCurrentUserProfile,
      currentUserHasProfile,
      bookmarkService,
      unbookmarkService,
    } = this.props;

    let bookmarked = false;
    if (currentUserProfile && currentUserProfile.services_bookmarked) {
      bookmarked =
        currentUserProfile.services_bookmarked
          .map((s) => s._id || s)
          .findIndex((id) => id === service.item._id) >= 0;
    }

    const bookmarkCallback = () => {
      getCurrentUserProfile();
      QuickNotification('Successfully bookmarked service');
    };

    const unbookmarkCallback = () => {
      getCurrentUserProfile();
      QuickNotification('Service unbookmarked');
    };

    const onBookmarkService = (id) => {
      if (!currentUserHasProfile) {
        QuickNotification('Please make a profile first');
      } else {
        bookmarkService(id, bookmarkCallback);
      }
    };

    const onUnbookmarkService = (id) => {
      if (!currentUserHasProfile) {
        QuickNotification('Please make a profile first');
      } else {
        unbookmarkService(id, unbookmarkCallback);
      }
    };

    return (
      <ServiceCard
        service={service.item}
        navigation={navigation}
        bookmarked={bookmarked}
        onBookmark={(id) => onBookmarkService(id)}
        onUnbookmark={(id) => onUnbookmarkService(id)}
      />
    );
  };

  handleRefresh = () => {
    const { onRefresh } = this.props;
    if (!onRefresh) return;
    this.setState(
      () => ({
        refreshing: true,
      }),
      () => {
        onRefresh(
          this.setState({ refreshing: false }),
          this.setState({ refreshing: false }),
        );
      },
    );
  };

  render() {
    const { services, loading } = this.props;

    const { refreshing } = this.state;

    if (loading) return <Loading />;
    if (services.length === 0) return <Announcement text="No services yet" />;

    return (
      <FlatList
        style={{ height: '100%' }}
        data={services}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={this.renderItem}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      />
    );
  }
}

ServicesList.defaultProps = {
  services: [],
  loading: false,
};

ServicesList.propTypes = {
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

ServicesList.propTypes = {
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  onRefresh: PropTypes.func,

  currentUserProfile: PropTypes.shape({}),
  bookmarkService: PropTypes.func,
  unbookmarkService: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUserProfile: state.profile.currentUserProfile,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

const mapDispatchToProps = {
  bookmarkService: ServiceActions.bookmarkService,
  unbookmarkService: ServiceActions.unbookmarkService,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServicesList);
