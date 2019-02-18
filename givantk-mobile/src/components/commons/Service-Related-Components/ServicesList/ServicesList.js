import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import * as ServiceActions from '../../../../store/actions/serviceActions';
import Announcement from '../../UI/Announcement/Announcement';
import Loading from '../../UI/Loading/Loading';
import QuickNotification from '../../UI/QuickNotification/QuickNotification';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesList = (props) => {
  const {
    navigation,
    services,
    loading,
    currentUserProfile,
    bookmarkService,
    unbookmarkService,
  } = props;

  const renderItem = (service) => {
    let bookmarked = false;
    if (currentUserProfile.services_bookmarked) {
      bookmarked =
        currentUserProfile.services_bookmarked
          .map((s) => s._id || s)
          .findIndex((id) => id === service.item._id) >= 0;
    }

    const bookmarkCallback = () => {
      QuickNotification('Successfully bookmarked service');
    };

    const unbookmarkCallback = () => {
      QuickNotification('Service unbookmarked');
    };

    return (
      <ServiceCard
        service={service.item}
        navigation={navigation}
        bookmarked={bookmarked}
        onBookmark={(id) => bookmarkService(id, bookmarkCallback)}
        onUnbookmark={(id) => unbookmarkService(id, unbookmarkCallback)}
      />
    );
  };

  if (loading) return <Loading />;
  if (services.length === 0) return <Announcement text="No services yet" />;

  return (
    <FlatList
      style={{ height: '100%' }}
      data={services}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

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
  currentUserProfile: PropTypes.shape({}),
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  bookmarkService: PropTypes.func,
  unbookmarkService: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentUserProfile: state.profile.currentUserProfile,
});

const mapDispatchToProps = {
  bookmarkService: ServiceActions.bookmarkService,
  unbookmarkService: ServiceActions.unbookmarkService,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServicesList);
