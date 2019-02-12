import { Textarea } from 'native-base';
import { View, Text, Label } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import genderTypes from '../../../assets/data/genderTypes';
import Picker from '../../../components/commons/UI/Picker/Picker';
import styles from './MakeProfileScreenStyles';
import TextInput from '../../../components/commons/UI/TextInput/TextInput';

export default class MakeProfileScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Fill In Your Profile Info',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  });

  state = {
    gender: '',
    description: '',
    phone_number: '',
    date_of_birth: '',
    skills: [],
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Picker
          title="Gender"
          placeholder="Male / Female"
          style={styles.picker}
          name="type"
          // onChange={this.onChangeValue}
          options={genderTypes}
          // value={type}
          // error={errors.type}
        />
        <TextInput
          title="Phone Number"
          placeholder="Example: 01003947562"
          style={styles.input}
          // error={errors.name}
          name="name"
          // onChange={this.onChangeValue}
        />

        <Text style={styles.label}>Skills</Text>
        <Textarea
          placeholder="Type what you can do, separated by a comma. For example: I can buy anything for you within Madinet Nast area, I can read Chinese... etc"
          style={[styles.textarea1]}
          // onChangeText={(v) => this.onChangeValue('description', v)}
        />
        <Text style={styles.label}>Description</Text>
        <Textarea
          placeholder="Describe yourself. What's your job? What's your major? What are your hobbies? 😃"
          style={[styles.textarea2]}
          // onChangeText={(v) => this.onChangeValue('description', v)}
        />
      </View>
    );
  }
}

MakeProfileScreen.propTypes = {
  navigation: PropTypes.shape(),
};
