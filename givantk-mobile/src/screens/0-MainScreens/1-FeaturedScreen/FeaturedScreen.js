import { StyleSheet, Text, View, Button } from "react-native";
import IonIcon from "@expo/vector-icons/Ionicons";
import React from "react";

export default class FeaturedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "FEATURED",
    tabBarIcon: ({ tintColor }) => (
      <IonIcon name="ios-star" size={30} style={{ color: tintColor }} />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Featured Screen</Text>
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
