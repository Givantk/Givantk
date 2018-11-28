import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { colors } from "../../../assets/styles/base";

export default class NotificationsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Notifications Screen",
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
        <Text>Notifications screen</Text>
        <Button
          title="Service"
          onPress={() => this.props.navigation.navigate("Service")}
        />

        <Button
          title="Person"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
