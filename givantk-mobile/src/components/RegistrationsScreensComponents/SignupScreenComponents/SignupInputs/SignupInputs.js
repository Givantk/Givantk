import { Picker } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import countries from '../../../../assets/data/countries';
import DefaultDatePicker from '../../../commons/UI/DefaultDatePicker/DefaultDatePicker';
import DefaultTextInput from '../../../commons/UI/DefaultTextInput/DefaultTextInput';
import styles from './SignupInputsStyles';

export default class SignupInputs extends Component {
  state = {
    selectedCountry: '',
  };

  onSelectCountry = (selectedCountry) => {
    this.setState(() => ({
      selectedCountry,
    }));
  };

  render() {
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
            />
          </View>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <DefaultTextInput
              placeholder="Last Name"
              style={styles.textInput}
            />
          </View>
        </View>
        <DefaultTextInput
          placeholder="Email Address"
          style={styles.textInput}
        />
        <DefaultTextInput placeholder="Password" style={styles.textInput} />
        <DefaultTextInput
          placeholder="Confirm Password"
          style={styles.textInput}
        />
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
          }}
        >
          <DefaultDatePicker
            label="Birth Date"
            onDateChange={(newDate) => {}}
            style={{ width: '50%', alignItems: 'center' }}
          />

          <Picker
            style={{
              color: colors.white.fade(0.5),
            }}
            selectedValue={this.state.selectedCountry}
            onValueChange={this.onSelectCountry}
          >
            <Picker.Item label="Country" value="" />
            {countries.map((country) => (
              <Picker.Item label={country} value={country} key={country} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

SignupInputs.propTypes = {
  placeholderColor: PropTypes.string,
};
