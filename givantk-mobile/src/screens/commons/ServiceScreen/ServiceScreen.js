import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { colors } from "../../../assets/styles/base";
import styles from "./ServiceScreenStyles";

export default class ServiceScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Service Screen",
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
        <Text>Service Screen</Text>
        <Button
          title="Add Proposal"
          onPress={() => this.props.navigation.navigate("AddProposal")}
        />

        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

ServiceScreen.propTypes = {};
