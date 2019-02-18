import { Button } from 'native-base';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import fakeProfile from '../../../../assets/data/fakeProfile';
import MainButton from '../../../../components/commons/UI/MainButton/MainButton';
import styles from './ProposalStyles';

export default class Proposal extends Component {
  state = {
    hi: 'hi',
  };

  render() {
    const { application, onPressApplicant, onPressAcceptProposal } = this.props;

    return (
      <View
        style={[
          styles.proposalsContainer,
          application.chosen && { borderColor: colors.red },
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
            <View style={styles.proposalUserNameContainer}>
              <Text style={styles.proposalUserName}>
                {`${application.user.first_name} ${application.user.last_name}`}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.proposalTextContainer}>
          <Text style={styles.proposalText}>{application.proposal}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton onPress={() => onPressAcceptProposal(application._id)}>
            Accept
          </MainButton>
          <MainButton backgroundColor={colors.primaryLight}>
            Ask More
          </MainButton>
        </View>
      </View>
    );
  }
}

Proposal.propTypes = {
  application: PropTypes.shape({}),
  onPressApplicant: PropTypes.func,
  onPressAcceptProposal: PropTypes.func,
  chosen: PropTypes.bool,
};
