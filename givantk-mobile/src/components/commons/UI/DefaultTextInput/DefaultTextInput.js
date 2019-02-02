import { View, TextInput, Text } from 'react-native';
import React from 'react';
import styles from './DefaultTextInputStyles';
import { colors } from '../../../../assets/styles/base';

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
      <Text
        style={[
          style,
          styles.warningText,
          error ? {} : { color: colors.transparent },
        ]}
      >
        {error || 'Error occurs on this field'}
      </Text>
    </View>
  );
};

export default DefaultTextInput;
