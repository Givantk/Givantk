import { Icon } from "native-base";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { colors, fontSizes } from "../../../assets/styles/base";
import styles from "./AccountScreenStyles";

export default class AccountScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "ACCOUNT",
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="MaterialIcons"
        name="person-outline"
        style={{ color: tintColor, fontSize: 40 }}
      />
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
