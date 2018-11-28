import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { colors } from "../../../assets/styles/base";
import styles from "./MessagesListScreenStyles";

export default class MessagesListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Messages List Screen",
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
        <Text>Messages List Screen</Text>
        <Button
          title="Chat"
          onPress={() => this.props.navigation.navigate("Chat")}
        />
      </View>
    );
  }
}

MessagesListScreen.propTypes = {};
