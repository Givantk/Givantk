import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

import { colors } from "../../../assets/styles/base";
import { styles } from "./SignupScreenStyles";

import logo from "../../../../assets/icon.png";

export default class SignupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Sign up Screen",
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitleStyle: {
      color: colors.white
    }
  });

  handleSignup = () => {
    console.log("Signup");
    //..
    this.props.navigation.replace("Tab");
  };

  handleHaveAccount = () => {
    this.props.navigation.replace("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logoStyle} />

        <View style={styles.signupButtonContainer}>
          <Button title="Sign Up" onPress={this.handleSignup} />
        </View>

        <Button title="I have an account" onPress={this.handleHaveAccount} />
      </View>
    );
  }
}
