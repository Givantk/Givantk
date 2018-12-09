import { StyleSheet, Text, View, Button } from "react-native";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import React from "react";

import styles from "./MyServicesScreenStyles";

export default class MyServicesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "MY SERVICES",
    tabBarIcon: ({ tintColor }) => (
      <SimpleLineIcon name="handbag" size={30} style={{ color: tintColor }} />
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
