import { Textarea } from 'native-base';
import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';

import { colors, dimensions } from '../../../../assets/styles/base';
import services from '../../../../assets/data/fakeServices';
import styles from './AddProposalScreenStyles';

export default class AddProposalScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Add Proposal',
  });

  onSubmitProposal = () => {
    alert('Submit Proposal Clicked');
  };

  render() {
    const { navigation } = this.props;
    const service = navigation.getParam('service', null);
    console.log(service);

    return (
      <View style={styles.wrapper}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text style={styles.header}>My Proposal:</Text>
        <View style={{ width: dimensions.fullWidth * 0.88 }}>
          <Textarea style={styles.textarea} />
        </View>
        <Button title="Submit Proposal" onPress={this.onSubmitProposal} />
      </View>
    );
  }
}
