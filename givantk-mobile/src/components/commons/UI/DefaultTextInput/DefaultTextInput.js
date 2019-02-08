import { View, TextInput, Text } from 'react-native';
import React from 'react';
import styles from './DefaultTextInputStyles';

const DefaultTextInput = (props) => {
  const { password, style, onChangeText, name, error } = props;
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={password}
        underlineColorAndroid="#00000000"
        style={[styles.textInput, style]}
        onChangeText={(value) => onChangeText(name, value)}
      />

      {error && (
        <Text style={[style, styles.warningText]}>
          {error || 'Error occurs on this field'}
        </Text>
      )}
    </View>
  );
};

export default DefaultTextInput;
