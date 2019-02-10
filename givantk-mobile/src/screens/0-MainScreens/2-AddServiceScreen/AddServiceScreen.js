import { connect } from 'react-redux';
import { Icon, Label, Textarea, Button } from 'native-base';
import { TextArea } from 'react-native-ui-lib';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { dimensions } from '../../../assets/styles/base';
import * as ServiceActions from '../../../store/actions/serviceActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import Picker from '../../../components/commons/UI/Picker/Picker';
import quickNotification from '../../../assets/utils/quickNotification';
import servicesNatures from '../../../assets/data/servicesNatures';
import servicesTypes from '../../../assets/data/servicesTypes';
import styles from './AddServiceScreenStyles';
import TextInput from '../../../components/commons/UI/TextInput/TextInput';

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
    const { createService, getAllServices, navigation } = this.props;
    const { name, type, nature, description } = this.state;
    const service = {
      name,
      description,
      type: type.value,
      nature: nature.value,
    };
    const callback = () => {
      quickNotification('Service posted successfully');
      getAllServices();
      navigation.replace('Tab');
    };
    createService(service, callback);
  };

  render() {
    const { type, nature } = this.state;
    const { errors } = this.props;
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

          {/* <View style={styles.row}>
            <Text style={[styles.text, { fontSize: 13 }]}>Service Type </Text>
            <View
              style={[
                styles.pickerContainer,
                errors.type ? styles.warningInput : {},
              ]}
            > */}
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
          {/* </View>
          </View> */}

          {/* <View style={styles.row}> */}
          {/* <Text style={[styles.text, { fontSize: 13 }]}>Service Nature </Text>
            <View
              style={[
                styles.pickerContainer,
                errors.nature ? styles.warningInput : {},
              ]}
            > */}
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
          {/* </View>
          </View> */}

          <View style={styles.left}>
            <Label style={styles.text}>Description </Label>
          </View>
          <View style={{ width: dimensions.fullWidth * 0.88 }}>
            <Textarea
              style={[
                styles.textarea,
                errors.description ? styles.warningInput : {},
              ]}
              onChangeText={(v) => this.onChangeValue('description', v)}
            />
          </View>
          <TextArea title="DS" placeholder="hihi" />

          {/* <View style={styles.row}>
            <Text style={styles.text}>Do you have a specific budget? </Text>
            <View style={[styles.inputContainer, styles.budgetInputContainer]}>
              <DefaultTextInput
                keyboardType="numeric"
                maxLength={4}
                placeholder="EGP"
                style={styles.input}
              />
            </View>
          </View> */}

          <View style={styles.row}>
            <Button style={styles.addButton} onPress={this.onAddService}>
              <Text style={styles.addButtonText}>ADD</Text>
            </Button>
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
  errors: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

const mapDispatchToProps = {
  createService: ServiceActions.createService,
  getAllServices: ServiceActions.getAllServices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddServiceScreen);
