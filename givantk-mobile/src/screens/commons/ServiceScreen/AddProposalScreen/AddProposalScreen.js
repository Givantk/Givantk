import { connect } from 'react-redux';
import { Textarea } from 'native-base';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { dimensions } from '../../../../assets/styles/base';
import * as ProfileActions from '../../../../store/actions/profileActions';
import * as ServiceActions from '../../../../store/actions/serviceActions';
import Loading from '../../../../components/commons/UI/Loading/Loading';
import QuickNotification from '../../../../components/commons/UI/QuickNotification/QuickNotification';
import styles from './AddProposalScreenStyles';
import NoProfileDisclaimer from '../../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';
import AvoidKeyboard from '../../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';

class AddProposalScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'تقديم العرض',
  });

  state = {
    service: null,
    proposal: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { service } = navigation.state.params;

    this.setService(service);
  }

  setService = (service) => {
    this.setState(() => ({ service }));
  };

  onSubmitProposal = () => {
    const { proposal } = this.state;
    const {
      proposeToService,
      getAllServices,
      getCurrentUserProfile,
      navigation,
    } = this.props;
    const { service } = navigation.state.params;

    const callback = () => {
      QuickNotification('تم التقدم للخدمة بنجاح');
      getAllServices();
      getCurrentUserProfile();
      navigation.goBack();
    };

    proposeToService(service._id, { proposal }, callback);
  };

  render() {
    const {
      errors,
      proposeToServiceLoading,
      getCurrentProfileLoading,
      currentUserHasProfile,
      navigation,
    } = this.props;
    const { service } = this.state;

    if (getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    if (!service) return <Loading />;

    return (
      <AvoidKeyboard bottomPadding={20}>
        <View style={styles.wrapper}>
          <Text style={styles.serviceName}>{service.name}</Text>
          <Text style={styles.header}>تقديم العرض</Text>
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
          <View style={styles.submitContainer}>
            {proposeToServiceLoading && <Loading />}
            {proposeToServiceLoading || (
              <Button title="التقدم بالعرض" onPress={this.onSubmitProposal} />
            )}
          </View>
        </View>
      </AvoidKeyboard>
    );
  }
}

AddProposalScreen.propTypes = {
  navigation: PropTypes.shape({}),
  proposeToService: PropTypes.func,
  getAllServices: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,
  errors: PropTypes.shape({}),
  proposeToServiceLoading: PropTypes.bool,
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  allServices: state.service.recommendedServices,
  proposeToServiceLoading: state.service.proposeToServiceLoading,
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

const mapDispatchToProps = {
  proposeToService: ServiceActions.proposeToService,
  getAllServices: ServiceActions.getRecommendedServices,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProposalScreen);
