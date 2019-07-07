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
            اقترح صفات ملبى الخدمة 
          </Text>
          <Icon type="Ionicons" name="md-person" style={styles.personIcon} />
          <View style={{ flexDirection: 'column' }}>
            <MultiPicker
              options={jobsList.map((d) => ({ label: d, value: d }))}
              title="المهن المفضلة"
              name="job"
              onChange={this.onChangeValue}
              searchPlaceholderText="اختر المهن المفضلة"
              style={styles.multiPicker}
              initiallySelectedItems={values.job}
            />

            <MultiPicker
              options={skillsList.map((d) => ({ label: d, value: d }))}
              title="المهارات"
              name="skills"
              onChange={this.onChangeValue}
              searchPlaceholderText="اختر المهارات المفضلة"
              style={styles.multiPicker}
              initiallySelectedItems={values.skills}
            />

            <MultiPicker
              options={cairoDistricts.map((d) => ({ label: d, value: d }))}
              title="الاماكن"
              name="location"
              onChange={this.onChangeValue}
              searchPlaceholderText="اختر الاماكن المفضلة"
              style={styles.multiPicker}
              initiallySelectedItems={values.location}
            />
            <View style={styles.saveButtonContainer}>
              <MainButton
                style={styles.saveButton}
                disabled={Object.values(this.state).some((s) => s.length === 0)}
                onPress={this.onSave}
              >
                حفظ
              </MainButton>
            </View>
          </View>
          <Text>
            اختيارك لهذه الصفات ليس إجبارياً، ولكنه يساعدنا على إيجاد ملبى مناسب للخدمة الخاصة بك
          </Text>
        </View>
      </AvoidKeyboard>
    );
  }
}

SuggestHelperCriteriaScreen.propTypes = {
  navigation: PropTypes.shape(),
};
