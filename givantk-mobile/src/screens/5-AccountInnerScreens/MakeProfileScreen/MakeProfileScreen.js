import { connect } from 'react-redux';
import { Textarea, Button } from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import * as ProfileActions from '../../../store/actions/profileActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import genderTypes from '../../../assets/data/genderTypes';
import Loading from '../../../components/commons/UI/Loading/Loading';
import Picker from '../../../components/commons/UI/Picker/Picker';
import styles from './MakeProfileScreenStyles';
import TextInput from '../../../components/commons/UI/TextInput/TextInput';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';

class MakeProfileScreen extends Component {
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
    skills: '',
  };

  onChangeValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit = () => {
    const { gender, skills } = this.state;
    const { navigation, makeProfile, getCurrentUserProfile } = this.props;

    const newProfile = {
      ...this.state,
      gender: gender.value,
      skills: skills.split(','),
    };

    const callback = () => {
      getCurrentUserProfile();
      navigation.goBack();
      QuickNotification('Profile Successfully created');
    };

    makeProfile(newProfile, callback);
  };

  render() {
    const { gender } = this.state;
    const { errors } = this.props;
    return (
      <AvoidKeyboard bottomPadding={80}>
        <View style={styles.container}>
          <Picker
            title="Gender"
            placeholder="Male / Female"
            style={styles.picker}
            name="gender"
            onChange={this.onChangeValue}
            options={genderTypes}
            value={gender}
            // error={errors.type}
          />

          <TextInput
            title="Phone Number"
            placeholder="Example: 01003947562"
            style={styles.input}
            keyboardType="numeric"
            // error={errors.name}
            name="phone_number"
            onChange={this.onChangeValue}
          />
          <Text style={styles.error}>{errors.phone_number}</Text>

          <Text style={styles.label}>Skills</Text>
          <Textarea
            placeholder="Type what you can do, separated by a comma. For example: I can buy anything for you within Madinet Nast area, I can read Chinese... etc"
            style={[styles.textarea1]}
            onChangeText={(v) => this.onChangeValue('skills', v)}
          />
          <Text style={styles.error}>{errors.skills}</Text>

          <Text style={styles.label}>Description</Text>
          <Textarea
            placeholder="Describe yourself. What's your job? What's your major? What are your hobbies? 😃"
            style={[styles.textarea2]}
            onChangeText={(v) => this.onChangeValue('description', v)}
          />
          <Text style={styles.error}>{errors.description}</Text>

          <View style={styles.row}>
            {false && <Loading />}
            {false || (
              <Button style={styles.submitButton} onPress={this.onSubmit}>
                <Text style={styles.submitButtonText}>Save</Text>
              </Button>
            )}
          </View>
        </View>
      </AvoidKeyboard>
    );
  }
}

MakeProfileScreen.propTypes = {
  navigation: PropTypes.shape(),
  errors: PropTypes.shape(),
  makeProfile: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  makeProfileLoading: state.profile.makeProfileLoading,
});

const mapDispatchToProps = {
  makeProfile: ProfileActions.makeProfile,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MakeProfileScreen);
