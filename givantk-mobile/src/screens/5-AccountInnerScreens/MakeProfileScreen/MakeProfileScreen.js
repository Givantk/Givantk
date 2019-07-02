import { connect } from 'react-redux';
import { FileSystem, ImagePicker } from 'expo';
import { Textarea, Button } from 'native-base';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import * as AuthActions from '../../../store/actions/authActions';
import * as ProfileActions from '../../../store/actions/profileActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import genderTypes from '../../../assets/data/genderTypes';
import Loading from '../../../components/commons/UI/Loading/Loading';
import Picker from '../../../components/commons/UI/Picker/Picker';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import styles from './MakeProfileScreenStyles';
import TextInput from '../../../components/commons/UI/TextInput/TextInput';
import MultiPicker from '../../../components/commons/UI/MultiPicker';
import skillsList from '../../../assets/data/skills';
import jobsList from '../../../assets/data/jobs';

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
    job: '',
    date_of_birth: '',
    skills: '',
    avatar: null,
    noAvatar: false,
    sizeAlert: false,
  };

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({});

    const { uri } = result;

    if (!result.cancelled) {
      this.getFileSize(uri).then((size) => {
        if (size > 5000000)
          this.setState({ avatar: null, noAvatar: false, sizeAlert: true });
        else {
          this.setState({ avatar: uri, noAvatar: false, sizeAlert: false });
        }
      });
    }
  };

  getFileSize = async (fileUri) => {
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    return fileInfo.size;
  };

  onChangeValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit = () => {
    const {
      gender,
      skills,
      avatar,
      description,
      phone_number,
      job,
      date_of_birth,
    } = this.state;

    const {
      navigation,
      makeProfile,
      currentUser,
      getCurrentUserProfile,
    } = this.props;

    // User didn't provide his avatar and he isn't signed with facebook
    if (!avatar && !currentUser.avatar) {
      this.setState({
        noAvatar: true,
      });
    } // the user uploaded an avatar or is signed with facebook
    else {
      const newProfile = new FormData();
      // if the user is signed with facebook but wants to upload avatar

      if (avatar) {
        const uriParts = avatar.split('.');
        const fileType = uriParts[uriParts.length - 1];
        newProfile.append('avatar', {
          uri: avatar,
          name: avatar.split('/').pop(),
          type: `image/${fileType}`,
        });
      }

      // appending keys and value in the new profile form data

      newProfile.append('gender', gender.value);
      newProfile.append('skills', JSON.stringify(skills));
      newProfile.append('description', description);
      newProfile.append('phone_number', phone_number);
      newProfile.append('job', job.value);
      newProfile.append('date_Of_birth', date_of_birth);

      const callback = () => {
        getCurrentUserProfile();
        navigation.goBack();
        QuickNotification('Profile Successfully created');
      };

      makeProfile(newProfile, callback);
    }
  };

  render() {
    const { gender, job, avatar, noAvatar, sizeAlert } = this.state;
    const { errors, makeProfileLoading, currentUser } = this.props;

    return (
      <AvoidKeyboard bottomPadding={0}>
        <View style={styles.container}>
          <Text style={styles.label}>
            Profile picture{currentUser.avatar ? '' : '*'}
          </Text>
          <Button
            style={styles.uploadButton}
            onPress={() =>
              AuthActions.ensureCameraRollPermission(this.pickImage)
            }
          >
            <Text style={styles.uploadButtonText}>Pick from gallery </Text>
          </Button>
          <View style={styles.imageView}>
            {avatar && <Image style={styles.image} source={{ uri: avatar }} />}
            {noAvatar && (
              <Text style={styles.error}>Please provide a profile picture</Text>
            )}
            {sizeAlert && (
              <Text style={styles.sizeError}>
                Image is bigger than 5 MB, please choose another image
              </Text>
            )}
          </View>

          <Picker
            title="Gender"
            placeholder="Male / Female"
            style={styles.picker}
            name="gender"
            onChange={this.onChangeValue}
            options={genderTypes}
            value={gender}
          />

          <TextInput
            title="Phone Number*"
            placeholder="Example: 01003947562"
            style={styles.input}
            keyboardType="numeric"
            name="phone_number"
            onChange={this.onChangeValue}
          />
          <Text style={styles.error}>{errors.phone_number}</Text>

          <Picker
            title="Job"
            placeholder="Select your job"
            style={styles.picker}
            name="job"
            onChange={this.onChangeValue}
            options={jobsList
              .map((j) => ({ label: j, value: j }))
              .concat({ label: 'Other', value: 'Other' })}
            value={job}
          />

          <MultiPicker
            options={skillsList.map((d) => ({ label: d, value: d }))}
            title="Skills*"
            name="skills"
            onChange={this.onChangeValue}
            searchPlaceholderText="Select your skills"
            style={styles.multiPicker}
          />
          <Text style={styles.error}>{errors.skills}</Text>

          <Text style={styles.label}>Description*</Text>
          <Textarea
            placeholder="Describe yourself. What's your job? What's your major? What are your hobbies? 😃"
            style={[styles.textarea2]}
            onChangeText={(v) => this.onChangeValue('description', v)}
          />
          <Text style={styles.error}>{errors.description}</Text>

          <View style={styles.row}>
            {makeProfileLoading ? (
              <Loading />
            ) : (
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
  makeProfileLoading: PropTypes.bool,
  getCurrentUserProfile: PropTypes.func,
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  makeProfileLoading: state.profile.makeProfileLoading,
  currentUser: state.auth.user,
});

const mapDispatchToProps = {
  makeProfile: ProfileActions.makeProfile,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MakeProfileScreen);
