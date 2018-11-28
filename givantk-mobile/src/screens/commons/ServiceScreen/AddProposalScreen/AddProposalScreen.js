import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { colors } from "../../../../assets/styles/base";
import styles from "./AddProposalScreenStyles";

export default class AddProposalScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Add Proposal Screen",
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
        <Text>Add Proposal Screen</Text>
      </View>
    );
  }
}

AddProposalScreen.propTypes = {};
