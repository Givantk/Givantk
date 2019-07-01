import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Announcement from '../../UI/Announcement/Announcement';
import Loading from '../../UI/Loading/Loading';
import RecommendationCard from '../RecommendationCard/RecommendationCard';

const RecommendationList = (props) => {
  const { navigation, loading, profiles } = props;

  const renderItem = (profile) => {
    return (
      <RecommendationCard profile={profile.item} navigation={navigation} />
    );
  };
  if (loading) return <Loading />;
  if (profiles.length === 0)
    return <Announcement text="No recommendations found " />;

  return (
    <FlatList
      style={{ height: '100%' }}
      data={profiles}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};
RecommendationList.propTypes = {
  navigation: PropTypes.shape({}),
  profiles: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
};

export default RecommendationList;
