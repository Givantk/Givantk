import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { colors } from "../../../assets/styles/base";
import styles from "./InviteFriendsScreenStyles";

export default class InviteFriendsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Invite Friends Screen",
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
        <Text>Invite Friends Screen</Text>
      </View>
    );
  }
}

InviteFriendsScreen.propTypes = {};
