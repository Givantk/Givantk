import { Icon } from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import MainButton from '../../../components/commons/UI/MainButton/MainButton';
import styles from './style';
import TextInput from '../../../components/commons/UI/TextInput/TextInput';

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
    if (value)
      this.setState({
        [name]: value.split(',').map((s) => s.trim()),
      });
  };

  onSave = () => {
    const { job, skills, location } = this.state;
    const { navigation } = this.props;
    const { onDone } = navigation.state.params;
    onDone(job, skills, location);
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
            <TextInput
              title="Job(s) - separated by a comma (,)"
              placeholder="Example: doctor, service worker"
              name="job"
              onChange={this.onChangeValue}
              value={values.job.join(', ')}
            />

            <TextInput
              title="Skill(s) - separated by a comma (,)"
              placeholder="Example: read chinese, know about psychology"
              style={styles.input}
              name="skills"
              onChange={this.onChangeValue}
              value={values.skills.join(', ')}
            />

            <TextInput
              title="Location(s) - separated by a comma (,)"
              placeholder="Example: Dokki, Madinet Nasr"
              name="location"
              onChange={this.onChangeValue}
              value={values.location.join(', ')}
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
