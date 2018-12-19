import { Icon } from "native-base";
import { Text, View } from "react-native";
import React from "react";

import styles from "./AddServiceScreenStyles";

export default class AddServiceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "ADD SERVICE",
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="EvilIcons"
        name="plus"
        style={{ color: tintColor, fontSize: 40 }}
      />
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
