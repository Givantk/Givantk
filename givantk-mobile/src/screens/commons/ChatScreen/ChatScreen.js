import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { colors } from "../../../assets/styles/base";
import styles from "./ChatScreenStyles";

export default class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Chat Screen",
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
        <Text>Chat Screen</Text>
      </View>
    );
  }
}

ChatScreen.propTypes = {};
