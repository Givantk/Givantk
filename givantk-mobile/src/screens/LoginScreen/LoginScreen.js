import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { fontTypes, gaps } from "../../../assets/styles/base";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ marginBottom: gaps.xxl, fontFamily: fontTypes.mainLight }}
        >
          Hi welcome our dear user
        </Text>
        <Button
          title="log in"
          onPress={() => {
            this.props.navigation.replace("TabNavigator");
            console.log(this.props.navigation);
          }}
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
