import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { styles } from './SignupScreenStyles';
import DefaultButton from '../../../components/commons/UI/DefaultButton/DefaultButton';
import Header from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header';
import SignupInputs from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/SignupInputs/SignupInputs';

export default class SignupScreen extends React.Component {
  static navigationOptions = () => ({
    headerTransparent: true,
  });

  handleSignup = () => {
    const { navigation } = this.props;
    // ..
    navigation.replace('Tab');
  };

  handleSignupWithFacebook = () => {
    //
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />

        <SignupInputs />

        <View style={styles.buttonsContainer}>
          <DefaultButton onPress={this.handleSignup} style={styles.button}>
            Sign Up
          </DefaultButton>
          <DefaultButton
            onPress={this.handleSignupWithFacebook}
            style={styles.button}
          >
            Sign Up With Facebook
          </DefaultButton>
        </View>
      </View>
    );
  }
}

SignupScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
