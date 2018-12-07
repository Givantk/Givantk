import { View, TextInput } from "react-native";
import React from "react";

import styles from "./DefaultTextInputStyles";
import { colors } from "../../../../assets/styles/base";

const DefaultTextInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        underlineColorAndroid="#00000000"
        style={[styles.textInput, props.style]}
        placeholderTextColor={colors.white.fade(0.5)}
      />
    </View>
  );
};

//expected props
//style (object)
//normal TextInput props

export default DefaultTextInput;
