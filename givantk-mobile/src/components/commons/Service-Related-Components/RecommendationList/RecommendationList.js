import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import QuickNotification from '../../UI/QuickNotification/QuickNotification';
import Announcement from '../../UI/Announcement/Announcement';
import Loading from '../../UI/Loading/Loading';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
import { connect } from 'react-redux';
import * as ServiceActions from '../../../../store/actions/serviceActions';

const RecommendationList = (props) => {
  const { navigation, loading, profiles, inviteHelper } = props;

  const renderItem = (profile) => {
    const { serviceId } = navigation.state.params;
    const onInviteHelper = (profileId) => {
      inviteHelper(profileId, serviceId, invitationCallback);
    };

    const invitationCallback = () => {
      QuickNotification('Successfully invited helper');
    };

    return (
      <RecommendationCard
        profile={profile.item}
        navigation={navigation}
        onInvite={(id) => onInviteHelper(id)}
      />
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

const mapDispatchToProps = {
  inviteHelper: ServiceActions.inviteHelper,
};

export default connect(
  null,
  mapDispatchToProps
)(RecommendationList);
