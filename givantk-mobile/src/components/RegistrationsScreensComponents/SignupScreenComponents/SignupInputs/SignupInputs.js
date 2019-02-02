import { Picker } from 'native-base';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import cairoDistricts from '../../../../assets/data/cairoDistricts';
import DefaultButton from '../../../commons/UI/DefaultButton/DefaultButton';
import DefaultTextInput from '../../../commons/UI/DefaultTextInput/DefaultTextInput';
import styles from './SignupInputsStyles';

export default class SignupInputs extends Component {
  state = {
    selectedLocation: '',
  };

  onSelectLocation = (selectedLocation) => {
    if (!selectedLocation) {
      alert('Please select your location');
      return;
    }
    this.setState(() => ({
      selectedLocation,
    }));
  };

  onChangeTextValue = (name, value) => {
    console.log(name, value);
    // Set the state
  };

  onSignup = () => {
    const { onSignup } = this.props;
    onSignup();
  };

  render() {
    const { selectedLocation } = this.state;
    const { onSignupWithFacebook } = this.props;
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
          }}
        >
          <View style={{ width: '50%' }}>
            <DefaultTextInput
              placeholder="First Name"
              style={styles.textInput}
              onChangeText={this.onChangeTextValue}
              name="first_name"
            />
          </View>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <DefaultTextInput
              placeholder="Last Name"
              style={styles.textInput}
              onChangeText={this.onChangeTextValue}
              name="last_name"
            />
          </View>
        </View>
        <DefaultTextInput
          placeholder="Email Address"
          style={styles.textInput}
          onChangeText={this.onChangeTextValue}
          name="email"
        />
        <DefaultTextInput
          password
          placeholder="Password"
          style={styles.textInput}
          onChangeText={this.onChangeTextValue}
          name="password"
        />
        <DefaultTextInput
          password
          placeholder="Confirm Password"
          style={styles.textInput}
          onChangeText={this.onChangeTextValue}
          name="password2"
        />
        <View style={styles.viewInput}>
          <Picker
            style={{
              color: colors.white.fade(0.5),
            }}
            selectedValue={selectedLocation}
            onValueChange={this.onSelectLocation}
          >
            <Picker.Item label="Select Location" value="" />
            {cairoDistricts.map((district) => (
              <Picker.Item label={district} value={district} key={district} />
            ))}
          </Picker>
        </View>
        <View style={styles.buttonsContainer}>
          <DefaultButton onPress={this.onSignup} style={styles.button}>
            Sign Up
          </DefaultButton>
          <DefaultButton onPress={onSignupWithFacebook} style={styles.button}>
            Sign Up With Facebook
          </DefaultButton>
        </View>
      </View>
    );
  }
}

SignupInputs.propTypes = {
  onSignup: PropTypes.func,
  onSignupWithFacebook: PropTypes.func,
};
