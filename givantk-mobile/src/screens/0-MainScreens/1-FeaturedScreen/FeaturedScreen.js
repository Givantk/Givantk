import { StyleSheet, Text, View, Button } from "react-native";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import React from "react";

import styles from "./FeaturedScreenStyles";

export default class FeaturedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "FEATURED",
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon name="star-o" size={30} style={{ color: tintColor }} />
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

        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate("SearchResults")}
        />
      </View>
    );
  }
}
