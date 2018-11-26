import { StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import React from "react";

export default class AddServiceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "ADD SERVICE",
    tabBarIcon: ({ tintColor }) => (
      <IonIcon name="ios-add-circle" size={30} style={{ color: tintColor }} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
