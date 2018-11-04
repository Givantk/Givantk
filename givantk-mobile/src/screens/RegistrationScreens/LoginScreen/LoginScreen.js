import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

import { styles } from "./LoginScreenStyles";

import logo from "../../../../assets/icon.png";

export default class LoginScreen extends React.Component {
  handleLogin = () => {
    console.log("Log in");
    //..
    this.props.navigation.replace("Tab");
  };

  handleHaveNoAccount = () => {
    this.props.navigation.replace("Signup");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logoStyle} />

        <View style={styles.loginButtonContainer}>
          <Button title="Log In" onPress={this.handleLogin} />
        </View>

        <Button
          title="I don't have an account"
          onPress={this.handleHaveNoAccount}
        />
      </View>
    );
  }
}
