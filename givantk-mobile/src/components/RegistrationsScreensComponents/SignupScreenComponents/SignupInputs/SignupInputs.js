import { Picker, Icon } from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import cairoDistricts from '../../../../assets/data/cairoDistricts';
import DefaultButton from '../../../commons/UI/DefaultButton/DefaultButton';
import DefaultTextInput from '../../../commons/UI/DefaultTextInput/DefaultTextInput';
import styles from './SignupInputsStyles';

export default class SignupInputs extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
    location: '',
  };

  onSelectLocation = (location) => {
    if (!location) {
      alert('Please select your location');
      return;
    }
    this.setState(() => ({
      location,
    }));
  };

  onChangeTextValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  onSignup = () => {
    const { onSignup } = this.props;
    onSignup(this.state);
  };

  render() {
    const { location } = this.state;
    const {
      errors,
      loading,
      onSignupWithFacebook,
      signupWithFacebookLoading,
    } = this.props;
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '83%',
            flexDirection: 'row',
          }}
        >
          <View style={{ width: '50%' }}>
            <DefaultTextInput
              placeholder="الاسم"
              style={styles.textInput}
              onChangeText={this.onChangeTextValue}
              name="first_name"
              errorText={errors.first_name}
            />
          </View>
          <View style={{ width: '50%', alignItems: 'center' }}>
            <DefaultTextInput
              placeholder="اللقب"
              style={styles.textInput}
              onChangeText={this.onChangeTextValue}
              name="last_name"
              errorText={errors.last_name}
            />
          </View>
        </View>
        <DefaultTextInput
          placeholder="البريد الالكترونى"
          style={styles.textInput}
          onChangeText={this.onChangeTextValue}
          name="email"
          autoCapitalize="none"
          errorText={errors.email}
        />
        <DefaultTextInput
          password
          placeholder="كلمة السر"
          style={styles.textInput}
          onChangeText={this.onChangeTextValue}
          name="password"
          autoCapitalize="none"
          errorText={errors.password}
        />
        <DefaultTextInput
          password
          placeholder="تأكيد كلمة السر"
          style={styles.textInput}
          onChangeText={this.onChangeTextValue}
          name="password2"
          autoCapitalize="none"
          errorText={errors.password2}
        />
        <View style={styles.viewInput}>
          <Picker
            style={{
              color: colors.white.fade(0.5),
            }}
            selectedValue={location}
            onValueChange={this.onSelectLocation}
          >
            <Picker.Item label="اختر المنطقة" value="" />
            {cairoDistricts.map((district) => (
              <Picker.Item label={district} value={district} key={district} />
            ))}
          </Picker>
        </View>
        <Text
          style={[
            styles.warningText,
            errors.location ? {} : { color: colors.transparent },
          ]}
        >
          {errors.location || 'Error'}
        </Text>
        <View style={styles.buttonsContainer}>
          <DefaultButton onPress={this.onSignup} loading={loading}>
            التسجيل
          </DefaultButton>
          <DefaultButton
            onPress={onSignupWithFacebook}
            loading={signupWithFacebookLoading}
          >
            التسجيل بواسطة {' '}
            <Icon
              type="FontAwesome"
              name="facebook-square"
              style={styles.facebookButton}
            />
          </DefaultButton>
        </View>
      </View>
    );
  }
}

SignupInputs.propTypes = {
  onSignup: PropTypes.func,
  onSignupWithFacebook: PropTypes.func,

  errors: PropTypes.shape({}),

  loading: PropTypes.bool,
  signupWithFacebookLoading: PropTypes.bool,
};
