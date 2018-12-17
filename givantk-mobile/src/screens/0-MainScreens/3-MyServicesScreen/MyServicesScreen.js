import { Text, View, Button } from "react-native";
import React from "react";

import styles from "./MyServicesScreenStyles";
import { Icon } from "native-base";

export default class MyServicesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "MY SERVICES",
    tabBarIcon: ({ tintColor }) => (
      <Icon
        type="SimpleLineIcons"
        name="handbag"
        style={{ color: tintColor, fontSize: 30 }}
      />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>My services screen</Text>
        <Button
          title="Service"
          onPress={() => this.props.navigation.navigate("Service")}
        />
      </View>
    );
  }
}
