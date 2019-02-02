import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import { styles } from './LoginScreenStyles';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import DefaultButton from '../../../components/commons/UI/DefaultButton/DefaultButton';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import Header from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header';

export default class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  handleLogin = () => {
    const { navigation } = this.props;
    // ..
    navigation.replace('Tab');
  };

  handleHaveNoAccount = () => {
    const { navigation } = this.props;

    navigation.navigate('Signup');
  };

  handleSignInWithFacebook = () => {
    //
  };

  render() {
    return (
      <AvoidKeyboard
        bottomPadding={0}
        backgroundColor={colors.primary.toString()}
      >
        <View style={styles.container}>
          <Header />

          <View style={styles.inputContainer}>
            <DefaultTextInput
              placeholder="Email Address"
              style={styles.textInput}
            />
            <DefaultTextInput
              password
              placeholder="Password"
              style={styles.textInput}
            />
            <DefaultButton onPress={this.handleLogin}>Sign In</DefaultButton>
            <DefaultButton onPress={this.handleSignInWithFacebook}>
              Sign In With Facebook
            </DefaultButton>
          </View>

          <View style={styles.signupRedirect}>
            <Text style={styles.signupRedirectText}>
              Don't have an account?{' '}
            </Text>

            <TouchableWithoutFeedback onPress={this.handleHaveNoAccount}>
              <View>
                <Text style={styles.signupRedirectButtonText}>Join Now</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </AvoidKeyboard>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({}),
};
