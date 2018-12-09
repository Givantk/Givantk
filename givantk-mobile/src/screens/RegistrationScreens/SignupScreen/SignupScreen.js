import { Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";

import { colors } from "../../../assets/styles/base";
import { styles } from "./SignupScreenStyles";
import countries from "../../../assets/data/countries";
import DefaultButton from "../../../components/commons/UI/DefaultButton/DefaultButton";
import DefaultDatePicker from "../../../components/commons/UI/DefaultDatePicker/DefaultDatePicker";
import DefaultTextInput from "../../../components/commons/UI/DefaultTextInput/DefaultTextInput";
import SignupInputs from "../../../components/RegistrationsScreensComponents/SignupScreenComponents/SignupInputs/SignupInputs";
import Header from "../../../components/RegistrationsScreensComponents/SignupScreenComponents/Header/Header";

export default class SignupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true
  });

  handleSignup = () => {
    console.log("Signup");
    //..
    this.props.navigation.replace("Tab");
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
