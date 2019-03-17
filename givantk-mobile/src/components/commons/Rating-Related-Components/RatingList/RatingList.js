import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import * as ProfileActions from '../../../../store/actions/profileActions';
import * as ServiceActions from '../../../../store/actions/serviceActions';
import Announcement from '../../UI/Announcement/Announcement';
import Loading from '../../UI/Loading/Loading';
import RatingCard from '../RatingCard/RatingCard';

const RatingList = (props) => {
  const {
    navigation,
    services,
    loading,
    currentUserProfile,
    getCurrentUserProfile,
    currentUserHasProfile,
  } = props;

  isItAskedService = (service) => {
    return currentUserProfile.user === service.asker._id ? true : false;
  };

  addInfoToService = (service) => {
    this.isItAskedService(service)
      ? (service.askedByUser = true)
      : (service.helpedByUser = true);


    //Pick the chosen application
    chosenApplication = service.applications.filter(
      (application) => application.chosen
    );

    //extract user from it an append it to service

    console.log(chosenApplication[0]);

    service.helperInfo = chosenApplication[0].user;

    console.log(service.helperInfo);

    return service;
  };

  const renderItem = (service) => {
    return (
      <RatingCard
        service={this.addInfoToService(service.item)}
        navigation={navigation}
      />
    );
  };

  if (loading) return <Loading />;
  if (services.length === 0) return <Announcement text="Not reviewed yet" />;

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

RatingList.defaultProps = {
  services: [],
  loading: false,
};

RatingList.propTypes = {
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

RatingList.propTypes = {
  currentUserProfile: PropTypes.shape({}),
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
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
  mapDispatchToProps
)(RatingList);
