import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import fakeProfile from '../../../../assets/data/fakeProfile';
import styles from './ProposalStyles';
import { colors } from '../../../../assets/styles/base';

export default class Proposal extends Component {
  state = {
    hi: 'hi',
  };

  render() {
    const { application, onPressApplicant, chosen } = this.props;

    return (
      <View
        style={[
          styles.proposalsContainer,
          chosen && { borderColor: colors.red },
        ]}
        key={application._id}
      >
        <TouchableWithoutFeedback
          onPress={() => onPressApplicant(application.user._id)}
        >
          <View style={styles.proposalHeader}>
            <Image
              source={{
                uri: fakeProfile.avatar,
              }}
              style={styles.proposalUserImage}
            />
            <View style={styles.headerRight}>
              <Text style={styles.proposalUserName}>
                {`${application.user.first_name} ${application.user.last_name}`}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.proposalTextContainer}>
          <Text style={styles.proposalText}>{application.proposal}</Text>
        </View>
      </View>
    );
  }
}

Proposal.propTypes = {
  application: PropTypes.shape({}),
  onPressApplicant: PropTypes.func,
  chosen: PropTypes.bool,
};
