import { Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";

import { styles } from "./LoginScreenStyles";
import DefaultTextInput from "../../../components/commons/UI/DefaultTextInput/DefaultTextInput";
import DefaultButton from "../../../components/commons/UI/DefaultButton/DefaultButton";

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true
  });

  handleLogin = () => {
    console.log("Log in");
    //..
    this.props.navigation.replace("Tab");
  };

  handleHaveNoAccount = () => {
    this.props.navigation.replace("Signup");
  };

  handleSignWithFacebook = () => {
    //
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>GIVANTK</Text>
          <Text style={styles.subHeader}>Give and take</Text>
        </View>

        <View style={styles.inputContainer}>
          <DefaultTextInput
            placeholder="Email Address"
            style={styles.textInput}
          />
          <DefaultTextInput placeholder="Password" style={styles.textInput} />
          <DefaultButton onPress={this.handleLogin}>Sign In</DefaultButton>
          <DefaultButton onPress={this.handleSignWithFacebook}>
            Sign In With Facebook
          </DefaultButton>
        </View>

        <View style={styles.signupRedirect}>
          <Text style={styles.signupRedirectText}>Don't have an account? </Text>

          <TouchableWithoutFeedback onPress={this.handleHaveNoAccount}>
            <View>
              <Text style={styles.signupRedirectButtonText}>Join Now</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
