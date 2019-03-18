import { connect } from 'react-redux';
import { Notifications } from 'expo';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import { styles } from './SignupScreenStyles';
import * as AuthActions from '../../../store/actions/authActions';
import * as ProfileActions from '../../../store/actions/profileActions';
import * as ServiceActions from '../../../store/actions/serviceActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import Header from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header';
import QuickNotification from '../../../components/commons/UI/QuickNotification/QuickNotification';
import registerForPushNotificationsAsync from '../../../assets/utils/registerForPushNotificationsAsync';
import SignupInputs from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/SignupInputs/SignupInputs';

class SignupScreen extends React.Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  componentWillMount() {
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log(token);
      })
      .catch((error) => console.log(error));
  }

  handleSignup = (user) => {
    const { navigation, signupUser } = this.props;

    const callback = () => {
      QuickNotification('Successfully Signed Up, Please Login');
      navigation.navigate('Login');
    };

    signupUser(user, callback);

    AuthActions.getPushNotificationToken();
    this._notificationSubscription = Notifications.addListener((n) => {
      if (n.origin === 'selected') navigation.navigate('Notifications');
      else navigation.navigate('Tab');
    });
  };

  handleSignupWithFacebook = () => {
    const { loginUserWithFacebook } = this.props;

    const callback = () => {
      const { navigation, getAllServices, getCurrentUserProfile } = this.props;

      QuickNotification('Login Successful');
      navigation.replace('Tab');
      getAllServices();
      getCurrentUserProfile();

      AuthActions.getPushNotificationToken();
      this._notificationSubscription = Notifications.addListener((n) => {
        if (n.origin === 'selected') navigation.navigate('Notifications');
        else navigation.navigate('Tab');
      });
    };

    loginUserWithFacebook(callback);
  };

  render() {
    const { errors, signupLoading, signupWithFacebookLoading } = this.props;
    return (
      <AvoidKeyboard
        bottomPadding={-30}
        backgroundColor={colors.primary.toString()}
      >
        <View style={styles.container}>
          <Header />

          <SignupInputs
            onSignup={this.handleSignup}
            errors={errors}
            loading={signupLoading}
            onSignupWithFacebook={this.handleSignupWithFacebook}
            signupWithFacebookLoading={signupWithFacebookLoading}
          />
        </View>
      </AvoidKeyboard>
    );
  }
}

SignupScreen.propTypes = {
  navigation: PropTypes.shape({}),

  signupUser: PropTypes.func,
  loginUserWithFacebook: PropTypes.func,
  getAllServices: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,

  errors: PropTypes.shape({}),
  signupLoading: PropTypes.bool,
  signupWithFacebookLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  signupLoading: state.auth.signupLoading,
  signupWithFacebookLoading: state.auth.loginWithFacebookLoading,
});

const mapDispatchToProps = {
  signupUser: AuthActions.signupUser,
  loginUserWithFacebook: AuthActions.loginUserWithFacebook,
  getAllServices: ServiceActions.getAllServices,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupScreen);
