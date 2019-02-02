import { View, TextInput } from 'react-native';
import React from 'react';

import styles from './DefaultTextInputStyles';

const DefaultTextInput = (props) => {
  const { password, style, onChangeText, name } = props;
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={password}
        underlineColorAndroid="#00000000"
        style={[styles.textInput, style]}
        onChangeText={(value) => onChangeText(name, value)}
      />
    </View>
  );
};

export default DefaultTextInput;
