import { Badge } from 'react-native-ui-lib';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';

const NotificationsIndicator = ({ currentUserProfile }) => {
  const notificationsNumber =
    currentUserProfile && currentUserProfile.notifications
      ? currentUserProfile.notifications.filter((n) => !n.seen).length
      : 0;

  return (
    <View style={{ width: 39,marginRight:10 }}>
      <Icon
        type="Ionicons"
        name="md-notifications"
        style={{ color: colors.white, fontSize: 33 }}
      />
      {notificationsNumber ? (
        <View style={{ position: 'absolute' }}>
          <Badge
            backgroundColor={colors.secondary.toString()}
            label={notificationsNumber.toString()}
          />
        </View>
      ) : null}
    </View>
  );
};

NotificationsIndicator.propTypes = {
  currentUserProfile: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  currentUserProfile: state.profile.currentUserProfile,
});

export default connect(
  mapStateToProps,
  null,
)(NotificationsIndicator);
