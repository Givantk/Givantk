import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { colors } from "../../../assets/styles/base";

export default class AccountScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Account Screen",
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
        <Text>Account Screen</Text>
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />

        <Button
          title="Verify Identity"
          onPress={() => this.props.navigation.navigate("VerifyIdentity")}
        />

        <Button
          title="Invite Friends"
          onPress={() => this.props.navigation.navigate("InviteFriends")}
        />

        <Button
          title="Personal Info"
          onPress={() => this.props.navigation.navigate("PersonalInfo")}
        />

        <Button
          title="Payment Info"
          onPress={() => this.props.navigation.navigate("PaymentInfo")}
        />

        <Button
          title="Messages List"
          onPress={() => this.props.navigation.navigate("MessagesList")}
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
