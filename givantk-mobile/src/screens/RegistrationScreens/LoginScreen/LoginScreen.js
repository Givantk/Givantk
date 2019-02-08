import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../assets/styles/base';

import {
  loginUser,
  checkSavedUserThenLogin,
} from '../../../store/actions/authActions';
import { styles } from './LoginScreenStyles';
import AvoidKeyboard from '../../../components/commons/UI/AvoidKeyboard/AvoidKeyboard';
import DefaultButton from '../../../components/commons/UI/DefaultButton/DefaultButton';
import DefaultTextInput from '../../../components/commons/UI/DefaultTextInput/DefaultTextInput';
import Header from '../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header';
import store from '../../../store/createStore';

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
    const { navigation } = this.props;

    const callback = () => {
      navigation.replace('Tab');
    };
    // Check if user has previously signed in
    store.dispatch(checkSavedUserThenLogin(callback));
  }

  handleLogin = () => {
    const { navigation, onLoginUser } = this.props;

    const { email, password } = this.state;

    const callback = () => {
      navigation.replace('Tab');
    };

    onLoginUser({ email, password }, callback);
  };

  onChangeTextValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleSignInWithFacebook = () => {
    alert('Facebook login clicked');
  };

  render() {
    const { navigation, errors } = this.props;

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
              error={errors.email}
            />
            <DefaultTextInput
              password
              placeholder="Password"
              style={styles.textInput}
              onChangeText={this.onChangeTextValue}
              name="password"
              error={errors.password}
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
  onLoginUser: PropTypes.func,
  errors: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

const mapDispatchToProps = {
  onLoginUser: loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
