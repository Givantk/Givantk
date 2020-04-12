import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { colors } from "../../../assets/styles/base";
import styles from "./PersonalInfoScreenStyles";

export default class PersonalInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Payment Info Screen",
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
        <Text>Payment Info Screen</Text>
      </View>
    );
  }
}

PersonalInfoScreen.propTypes = {};
