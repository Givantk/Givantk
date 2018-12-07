import { View, TextInput } from "react-native";
import React from "react";

import styles from "./DefaultTextInputStyles";

const DefaultTextInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        underlineColorAndroid="transparent"
        style={[styles.textInput, props.style]}
      />
    </View>
  );
};

export default DefaultTextInput;
