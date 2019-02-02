import { Picker } from 'native-base';
import { View } from 'react-native';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import DefaultTextInput from '../../../commons/UI/DefaultTextInput/DefaultTextInput';
import styles from './SignupInputsStyles';
import cairoDistricts from '../../../../assets/data/cairoDistricts';

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

  render() {
    const { selectedLocation } = this.state;
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
        <View style={styles.viewInput}>
          <Picker
            style={{
              color: colors.white.fade(0.5),
            }}
            selectedValue={selectedLocation}
            onValueChange={this.onSelectLocation}
          >
            <Picker.Item
              label="Select Location"
              value=""
              onPress={() => {
                console.log('PPPPPPPP');
              }}
            />
            {cairoDistricts.map((district) => (
              <Picker.Item label={district} value={district} key={district} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}
