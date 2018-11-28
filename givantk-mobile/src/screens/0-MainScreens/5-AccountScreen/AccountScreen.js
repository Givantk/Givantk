import { StyleSheet, Text, View, Button } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import React from "react";

import { colors } from "../../../assets/styles/base";

export default class AccountScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "ACCOUNT",
    tabBarIcon: ({ tintColor }) => (
      <IonIcon name="ios-person" size={30} style={{ color: tintColor }} />
    )
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
