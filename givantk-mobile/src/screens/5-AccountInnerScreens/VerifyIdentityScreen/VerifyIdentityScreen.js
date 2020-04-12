import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { colors } from "../../../assets/styles/base";
import styles from "./VerifyIdentityScreenStyles";

export default class VerifyIdentityScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Verify Identity Screen",
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitleStyle: {
      color: colors.white
    }
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Verify Identity Screen</Text>
      </View>
    );
  }
}

VerifyIdentityScreen.propTypes = {};
