import { ActivityIndicator, View } from "react-native";
import React from "react";

import styles from "./LoadingScreenStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
