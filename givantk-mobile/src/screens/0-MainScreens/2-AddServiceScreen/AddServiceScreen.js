import { connect } from 'react-redux';
import { Icon, Label, Picker, Textarea, Button } from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { dimensions, colors } from '../../../assets/styles/base';
import * as ServiceActions from '../../../store/actions/serviceActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import quickNotification from '../../../assets/utils/quickNotification';
import servicesNatures from '../../../assets/data/servicesNatures';
import servicesTypes from '../../../assets/data/servicesTypes';
import styles from './AddServiceScreenStyles';

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
    const { createService, getAllServices } = this.props;
    const { name, type, nature, description } = this.state;
    const service = {
      name,
      description,
      type,
      nature,
    };
    const callback = () => {
      quickNotification('Service posted successfully');
      getAllServices();
    };
    createService(service, callback);
  };

  render() {
    const { type, nature } = this.state;
    const { errors } = this.props;

    return (
      <View style={styles.container}>
        <AvoidKeyboard bottomPadding={120}>
          <View style={styles.row}>
            <Text style={styles.text}>Service Name </Text>
            <View style={styles.inputContainer}>
              <DefaultTextInput
                name="name"
                onChangeText={this.onChangeValue}
                placeholder="Name"
                style={styles.input}
                error={errors.name}
              />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, { fontSize: 13 }]}>Service Type </Text>
            <View
              style={[
                styles.pickerContainer,
                errors.type ? styles.warningInput : {},
              ]}
            >
              <Picker
                style={styles.picker}
                selectedValue={type}
                onValueChange={(v) => this.onChangeValue('type', v)}
              >
                <Picker.Item label="Type" value="" />
                {servicesTypes.map((t) => (
                  <Picker.Item label={t} value={t} key={t} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, { fontSize: 13 }]}>Service Nature </Text>
            <View
              style={[
                styles.pickerContainer,
                errors.nature ? styles.warningInput : {},
              ]}
            >
              <Picker
                style={styles.picker}
                selectedValue={nature}
                onValueChange={(v) => this.onChangeValue('nature', v)}
              >
                <Picker.Item label="Nature" value="" />
                {servicesNatures.map((n) => (
                  <Picker.Item label={n} value={n} key={n} />
                ))}
              </Picker>
            </View>
          </View>

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
