import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { colors } from "../../../assets/styles/base";

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Profile Screen",
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitleStyle: {
      color: colors.white
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
