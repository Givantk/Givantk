import { connect } from 'react-redux';
import { Icon, Label, Textarea, Button } from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { dimensions } from '../../../assets/styles/base';
import * as ProfileActions from '../../../store/actions/profileActions';
import * as ServiceActions from '../../../store/actions/serviceActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import Loading from '../../../components/commons/UI/Loading/Loading';
import Picker from '../../../components/commons/UI/Picker/Picker';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import servicesNatures from '../../../assets/data/servicesNatures';
import servicesTypes from '../../../assets/data/servicesTypes';
import styles from './AddServiceScreenStyles';
import TextInput from '../../../components/commons/UI/TextInput/TextInput';
import NoProfileDisclaimer from '../../../components/commons/NoProfileDisclaimer/NoProfileDisclaimer';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';

class AddServiceScreen extends React.Component {
  static navigationOptions = () => ({
    tabBarLabel: 'Add Service',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="Ionicons"
        name="md-add-circle"
        style={[styles.tabBarIcon, { color: tintColor }]}
      />
    ),
  });

  state = {
    name: '',
    description: '',
    type: '',
    nature: '',
  };

  onChangeValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  onAddService = () => {
    const {
      createService,
      getAllServices,
      getCurrentUserProfile,
      navigation,
    } = this.props;
    const { name, type, nature, description } = this.state;
    const service = {
      name,
      description,
      type: type.value,
      nature: nature.value,
    };
    const callback = () => {
      QuickNotification('Service posted successfully');
      getAllServices();
      getCurrentUserProfile();
      navigation.replace('Tab');
    };
    createService(service, callback);
  };

  render() {
    const { type, nature } = this.state;
    const {
      errors,
      createServiceLoading,
      getCurrentProfileLoading,
      currentUserHasProfile,
      navigation,
    } = this.props;

    if (getCurrentProfileLoading) return <Loading />;

    if (!currentUserHasProfile)
      return <NoProfileDisclaimer navigation={navigation} />;

    return (
      <View style={styles.container}>
        <AvoidKeyboard bottomPadding={120}>
          <TextInput
            title="Service Name"
            placeholder="Type the service name"
            error={errors.name}
            name="name"
            onChange={this.onChangeValue}
          />

          <Picker
            title="Service Type"
            placeholder="Pick a type"
            style={styles.picker}
            name="type"
            onChange={this.onChangeValue}
            options={servicesTypes}
            value={type}
            error={errors.type}
          />

          <Picker
            title="Service Nature"
            placeholder="Pick a nature"
            style={styles.picker}
            name="nature"
            onChange={this.onChangeValue}
            options={servicesNatures}
            value={nature}
            error={errors.nature}
          />

          <View style={styles.left}>
            <Label style={styles.text}>Description </Label>
          </View>
          <View style={{ width: dimensions.fullWidth * 0.88 }}>
            <Textarea
              placeholder="Service Description"
              style={[
                styles.textarea,
                errors.description ? styles.warningInput : {},
              ]}
              onChangeText={(v) => this.onChangeValue('description', v)}
            />
            <Text style={styles.error}>{errors.description}</Text>
          </View>

          <View style={styles.row}>
            <MainButton
              onPress={this.onAddService}
              loading={createServiceLoading}
              big
            >
              ADD
            </MainButton>
          </View>
        </AvoidKeyboard>
      </View>
    );
  }
}

AddServiceScreen.propTypes = {
  navigation: PropTypes.shape({}),
  createService: PropTypes.func,
  getAllServices: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,
  errors: PropTypes.shape({}),
  createServiceLoading: PropTypes.bool,
  getCurrentProfileLoading: PropTypes.bool,
  currentUserHasProfile: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  createServiceLoading: state.service.createServiceLoading,
  getCurrentProfileLoading: state.profile.getCurrentProfileLoading,
  currentUserHasProfile: state.profile.currentUserHasProfile,
});

const mapDispatchToProps = {
  createService: ServiceActions.createService,
  getAllServices: ServiceActions.getAllServices,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddServiceScreen);
