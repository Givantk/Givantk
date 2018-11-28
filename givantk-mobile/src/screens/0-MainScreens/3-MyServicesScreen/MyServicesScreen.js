import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

export default class MyServicesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "MY SERVICES",
    tabBarIcon: ({ tintColor }) => (
      <IonIcon name="ios-basket" size={30} style={{ color: tintColor }} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
