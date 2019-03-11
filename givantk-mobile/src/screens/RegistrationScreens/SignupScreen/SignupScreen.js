import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import registerForPushNotificationsAsync from '../../../assets/utils/registerForPushNotificationsAsync';

import { colors } from "../../../assets/styles/base";
import { styles } from "./SignupScreenStyles";
import * as AuthActions from "../../../store/actions/authActions";
import AvoidKeyboard from "../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard";
import Header from "../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header";
import QuickNotification from "../../../components/commons/UI/QuickNotification/QuickNotification";
import SignupInputs from "../../../components/RegistrationsScreensComponents/SignupScreenComponents/SignupInputs/SignupInputs";

class SignupScreen extends React.Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent
    }
  });

  componentWillMount() {
    registerForPushNotificationsAsync()
      .then(token => {
        console.log(token);
      })
      .catch(error => console.log(error));
  }

  handleSignup = user => {
    const { navigation, signupUser } = this.props;

    const callback = () => {
      QuickNotification("Successfully Signed Up, Please Login");
      navigation.navigate("Login");
    };

    signupUser(user, callback);
  };

  handleSignupWithFacebook = () => {
    alert("Facebook sign up clicked");
  };

  render() {
    const { errors, signupLoading } = this.props;
    return (
      <AvoidKeyboard
        bottomPadding={-30}
        backgroundColor={colors.primary.toString()}
      >
        <View style={styles.container}>
          <Header />

          <SignupInputs
            onSignup={this.handleSignup}
            onSignupWithFacebook={this.handleSignupWithFacebook}
            errors={errors}
            loading={signupLoading}
          />
        </View>
      </AvoidKeyboard>
    );
  }
}

SignupScreen.propTypes = {
  navigation: PropTypes.shape({}),
  signupUser: PropTypes.func,
  errors: PropTypes.shape({}),
  signupLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  errors: state.errors,
  signupLoading: state.auth.signupLoading
});

const mapDispatchToProps = {
  signupUser: AuthActions.signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);
