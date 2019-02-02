import { Textarea } from 'native-base';
import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';

import { colors, dimensions } from '../../../../assets/styles/base';
import styles from './AddProposalScreenStyles';
import services from '../../../../assets/data/fakeServices';

export default class AddProposalScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Add Proposal',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  onSubmitProposal = () => {
    alert('Submit Proposal Clicked');
  };

  render() {
    const service = services[0];
    return (
      <View style={styles.wrapper}>
        <Text style={styles.serviceName}>{service.title}</Text>
        <Text style={styles.header}>My Proposal:</Text>
        <View style={{ width: dimensions.fullWidth * 0.88 }}>
          <Textarea style={styles.textarea} />
        </View>
        <Button title="Submit Proposal" onPress={this.onSubmitProposal} />
      </View>
    );
  }
}
