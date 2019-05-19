import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Notifications } from 'expo';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import { styles } from './LoginScreenStyles';
import * as AuthActions from '../../../store/actions/authActions';
import * as ProfileActions from '../../../store/actions/profileActions';
import * as ServiceActions from '../../../store/actions/serviceActions';
import * as IntroActions from '../../../store/actions/introActions';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import DefaultButton from '../../../components/commons/UI/DefaultButton/DefaultButton';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import Header from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header';

class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const { checkSavedUserThenLogin, getSavedPassedIntro } = this.props;

    getSavedPassedIntro();

    // Check if user has previously signed in
    checkSavedUserThenLogin(this.callbackAfterLogin);
  }

  callbackAfterLogin = () => {
    const {
      navigation,
      getAllServices,
      getCurrentUserProfile,
      currentUser,
      passedIntro,
    } = this.props;

    if (currentUser.passedIntro || passedIntro) navigation.replace('Tab');
    else {
      navigation.replace('IntroScreen', {
        currentUser,
      });
    }
    getAllServices();
    getCurrentUserProfile();

    AuthActions.getPushNotificationToken();
    this._notificationSubscription = Notifications.addListener((n) => {
      if (n.origin === 'selected') {
        if (n.data && n.data.type === 'message')
          navigation.navigate('MessagesList');
        else navigation.navigate('Notifications');
      } else {
        navigation.navigate('Tab');
      }
    });
  };

  handleLogin = () => {
    const { loginUser } = this.props;

    const { email, password } = this.state;

    loginUser({ email, password }, this.callbackAfterLogin);
  };

  onChangeTextValue = (name, value) => {
    // \s* means any numbers of white space and $ means at the end of the string

    this.setState({
      [name]: value.replace(/\s*$/, ''),
    });
  };

  handleSignInWithFacebook = () => {
    const { loginUserWithFacebook } = this.props;

    loginUserWithFacebook(this.callbackAfterLogin);
  };

  render() {
    const {
      navigation,
      errors,
      setCurrentUserLoading,
      loginWithFacebookLoading,
    } = this.props;
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
              onChangeText={this.onChangeTextValue}
              name="email"
              autoCapitalize="none"
              errorText={errors.email || errors.incorrectinfo}
            />
            <DefaultTextInput
              password
              placeholder="Password"
              style={styles.textInput}
              onChangeText={this.onChangeTextValue}
              name="password"
              autoCapitalize="none"
              errorText={errors.password}
            />

            <DefaultButton
              onPress={this.handleLogin}
              loading={setCurrentUserLoading}
            >
              Sign In
            </DefaultButton>

            <DefaultButton
              onPress={this.handleSignInWithFacebook}
              loading={loginWithFacebookLoading}
            >
              Sign In With{' '}
              <Icon
                type="FontAwesome"
                name="facebook-square"
                style={styles.facebookButton}
              />
            </DefaultButton>
          </View>

          <View style={styles.signupRedirect}>
            <Text style={styles.signupRedirectText}>
              Don't have an account?{' '}
            </Text>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signup')}
            >
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

  loginUser: PropTypes.func,
  loginUserWithFacebook: PropTypes.func,
  checkSavedUserThenLogin: PropTypes.func,
  getAllServices: PropTypes.func,
  getCurrentUserProfile: PropTypes.func,

  errors: PropTypes.shape({}),
  setCurrentUserLoading: PropTypes.bool,
  loginWithFacebookLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  setCurrentUserLoading: state.auth.setCurrentUserLoading,
  loginWithFacebookLoading: state.auth.loginWithFacebookLoading,
  currentUser: state.auth.user,
  passedIntro: state.intro.passedIntro,
});

const mapDispatchToProps = {
  loginUser: AuthActions.loginUser,
  loginUserWithFacebook: AuthActions.loginUserWithFacebook,
  checkSavedUserThenLogin: AuthActions.checkSavedUserThenLogin,
  getAllServices: ServiceActions.getAllServices,
  getCurrentUserProfile: ProfileActions.getCurrentUserProfile,
  getSavedPassedIntro: IntroActions.getSavedPassedIntro,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
