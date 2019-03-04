import { Badge, Icon } from 'native-base';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import getUserImage from '../../../../assets/utils/getUserImage';
import MainButton from '../../../../components/commons/UI/MainButton/MainButton';
import styles from './ProposalStyles';

const Proposal = ({
  application,
  onPressApplicant,
  onPressAcceptProposal,
  ownService,
  hasHelper,
  acceptServiceProposalLoading,
}) => (
  <View
    style={[
      styles.proposalsContainer,
      application.chosen && { borderWidth: 8 },
    ]}
    key={application._id}
  >
    <TouchableWithoutFeedback
      onPress={() => onPressApplicant(application.user._id)}
    >
      <View style={styles.proposalHeader}>
        <View style={styles.helperIdentityContainer}>
          <Image
            source={{
              uri: application.user && getUserImage(application.user.avatar),
            }}
            style={styles.proposalUserImage}
          />
          <View style={styles.proposalUserNameContainer}>
            <Text style={styles.proposalUserName}>
              {`${application.user.first_name} ${application.user.last_name}`}
            </Text>
          </View>
        </View>
        {application.chosen && (
          <Badge danger>
            <View>
              <Text style={{ color: colors.trueWhite, lineHeight: 85 }}>
                Helper{' '}
                <Icon
                  name="star"
                  style={{
                    fontSize: 25,
                    color: colors.trueWhite,
                    lineHeight: 50,
                  }}
                />
              </Text>
            </View>
          </Badge>
        )}
      </View>
    </TouchableWithoutFeedback>
    <View style={styles.proposalTextContainer}>
      <Text style={styles.proposalText}>{application.proposal}</Text>
    </View>
    <View
      style={[
        styles.buttonsContainer,
        (!ownService || hasHelper) && { display: 'none' },
      ]}
    >
      <MainButton
        onPress={() => onPressAcceptProposal(application._id)}
        loading={acceptServiceProposalLoading}
      >
        Accept
      </MainButton>
      <MainButton
        onPress={() => onPressApplicant(application.user._id)}
        backgroundColor={colors.primaryLight}
      >
        Ask More
      </MainButton>
    </View>
  </View>
);

Proposal.propTypes = {
  application: PropTypes.shape({}),
  onPressApplicant: PropTypes.func,
  onPressAcceptProposal: PropTypes.func,
  ownService: PropTypes.bool,
  hasHelper: PropTypes.bool,
  acceptServiceProposalLoading: PropTypes.bool,
};

export default Proposal;
