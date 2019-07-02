import { Icon } from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import cairoDistricts from '../../../assets/data/cairoDistricts';
import jobsList from '../../../assets/data/jobs';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import MultiPicker from '../../../components/commons/UI/MultiPicker';
import skillsList from '../../../assets/data/skills';
import styles from './style';

export default class SuggestHelperCriteriaScreen extends Component {
  state = {
    job: [],
    skills: [],
    location: [],
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { values } = navigation.state.params;
    this.setState({
      job: values.job,
      skills: values.skills,
      location: values.location,
    });
  }

  onChangeValue = (name, value) => {
    value = Array.from(value);
    if (value)
      this.setState({
        [name]: value,
      });
  };

  onSave = () => {
    const { job, location, skills } = this.state;
    const { navigation } = this.props;
    const { onDone } = navigation.state.params;
    onDone(job, location, skills);
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { values } = navigation.state.params;
    return (
      <AvoidKeyboard bottomPadding={100}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Suggest a Criteria for your service helper
          </Text>
          <Icon type="Ionicons" name="md-person" style={styles.personIcon} />
          <View style={{ flexDirection: 'column' }}>
            {/* <TextInput
              title="Job(s) - separated by a comma (,)"
              placeholder="Example: doctor, service worker"
              name="job"
              onChange={this.onChangeValue}
              value={values.job.join(', ')}
            /> */}
            <MultiPicker
              options={jobsList.map((d) => ({ label: d, value: d }))}
              title="Job(s)"
              name="job"
              onChange={this.onChangeValue}
              searchPlaceholderText="Select preferable jobs"
              style={styles.multiPicker}
              initiallySelectedItems={values.job}
            />

            {/* <TextInput
              title="Skill(s) - separated by a comma (,)"
              placeholder="Example: read chinese, know about psychology"
              style={styles.input}
              name="skills"
              onChange={this.onChangeValue}
              value={values.skills.join(', ')}
            /> */}
            <MultiPicker
              options={skillsList.map((d) => ({ label: d, value: d }))}
              title="Skill(s)"
              name="skills"
              onChange={this.onChangeValue}
              searchPlaceholderText="Select preferable skills"
              style={styles.multiPicker}
              initiallySelectedItems={values.skills}
            />

            {/* <TextInput
              title="Location(s) - separated by a comma (,)"
              placeholder="Example: Dokki, Madinet Nasr"
              name="location"
              onChange={this.onChangeValue}
              value={values.location.join(', ')}
            /> */}
            <MultiPicker
              options={cairoDistricts.map((d) => ({ label: d, value: d }))}
              title="Location(s)"
              name="location"
              onChange={this.onChangeValue}
              searchPlaceholderText="Select preferable locations"
              style={styles.multiPicker}
              initiallySelectedItems={values.location}
            />
            <View style={styles.saveButtonContainer}>
              <MainButton
                style={styles.saveButton}
                disabled={Object.values(this.state).some((s) => s.length === 0)}
                onPress={this.onSave}
              >
                Save
              </MainButton>
            </View>
          </View>
          <Text>
            Hint: These suggestions are not mandatory, they just help our
            algorithm suggest the most suitable helpers for you
          </Text>
        </View>
      </AvoidKeyboard>
    );
  }
}

SuggestHelperCriteriaScreen.propTypes = {
  navigation: PropTypes.shape(),
};
