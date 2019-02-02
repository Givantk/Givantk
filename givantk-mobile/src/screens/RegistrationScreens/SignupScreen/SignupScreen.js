import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import { styles } from './SignupScreenStyles';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import Header from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header';
import SignupInputs from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/SignupInputs/SignupInputs';
import { signupUser } from '../../../store/actions/authActions';

class SignupScreen extends React.Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  handleSignup = (user) => {
    const { navigation, onSignupUser } = this.props;
    onSignupUser(user, navigation);
    // ..
    // navigation.replace('Tab');
  };

  handleSignupWithFacebook = () => {
    //
    alert('Facebook sign up clicked');
  };

  render() {
    const { errors } = this.props;
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
          />
        </View>
      </AvoidKeyboard>
    );
  }
}

SignupScreen.propTypes = {
  navigation: PropTypes.shape({}),
  onSignupUser: PropTypes.func,
  errors: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

const mapDispatchToProps = {
  onSignupUser: signupUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupScreen);
