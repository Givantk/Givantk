import { StyleSheet, Text, View } from "react-native";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import React from "react";

import styles from "./AddServiceScreenStyles";

export default class AddServiceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "ADD SERVICE",
    tabBarIcon: ({ tintColor }) => (
      <EvilIcon name="plus" size={40} style={{ color: tintColor }} />
    )
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Add services screen</Text>
      </View>
    );
  }
}
