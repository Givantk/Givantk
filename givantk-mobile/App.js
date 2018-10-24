import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Navigator from "./src/routes/MainNavigator.js";

export default class App extends React.Component {
  render() {
    return <Navigator />;
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
