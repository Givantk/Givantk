import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Announcement from '../../UI/Announcement/Announcement';
import Loading from '../../UI/Loading/Loading';
import RatingCard from '../RatingCard/RatingCard';

const RatingList = (props) => {
  const { navigation, services, loading, openedProfile } = props;

  const isItAskedService = (service) =>
    openedProfile.user === service.asker._id;

  const addInfoToService = (service) => {
    service.askedByUser = isItAskedService(service);
    service.helpedByUser = !isItAskedService(service);

    return service;
  };

  const renderItem = (service) => (
    <RatingCard
      service={addInfoToService(service.item)}
      navigation={navigation}
    />
  );

  if (loading) return <Loading />;
  if (services.length === 0) return <Announcement text="Not reviewed yet" />;

  return (
    <FlatList
      style={{ height: '100%' }}
      data={services.sort((a, b) => new Date(b.date) - new Date(a.date))}
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
  openedProfile: PropTypes.shape({}),
  navigation: PropTypes.shape({}),
  services: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

export default RatingList;
