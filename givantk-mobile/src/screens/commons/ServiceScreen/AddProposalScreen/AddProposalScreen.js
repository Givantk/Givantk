import { connect } from 'react-redux';
import { Textarea } from 'native-base';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { dimensions } from '../../../../assets/styles/base';
import * as ServiceActions from '../../../../store/actions/serviceActions';
import quickNotification from '../../../../assets/utils/quickNotification';
import styles from './AddProposalScreenStyles';

class AddProposalScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Add Proposal',
  });

  state = {
    proposal: '',
  };

  onSubmitProposal = () => {
    const { proposal } = this.state;
    const { proposeToService, getAllServices, navigation } = this.props;
    const service = navigation.getParam('service', null);

    const callback = () => {
      quickNotification('Successfully proposed to service');
      getAllServices();
      navigation.goBack();
    };

    proposeToService(service._id, { proposal }, callback);
  };

  render() {
    const { navigation, errors } = this.props;
    const service = navigation.getParam('service', null);

    return (
      <View style={styles.wrapper}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text style={styles.header}>My Proposal:</Text>
        <View style={{ width: dimensions.fullWidth * 0.88 }}>
          <Textarea
            onChangeText={(t) => this.setState(() => ({ proposal: t }))}
            style={styles.textarea}
          />
          <Text style={styles.error}>
            {errors.proposal ||
              errors.alreadyproposed ||
              errors.unauthorized ||
              errors.unauthorized}
          </Text>
        </View>
        <View style={styles.submitButtonContainer}>
          <Button title="Submit Proposal" onPress={this.onSubmitProposal} />
        </View>
      </View>
    );
  }
}

AddProposalScreen.propTypes = {
  navigation: PropTypes.shape({}),
  proposeToService: PropTypes.func,
  getAllServices: PropTypes.func,
  errors: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

const mapDispatchToProps = {
  proposeToService: ServiceActions.proposeToService,
  getAllServices: ServiceActions.getAllServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProposalScreen);
