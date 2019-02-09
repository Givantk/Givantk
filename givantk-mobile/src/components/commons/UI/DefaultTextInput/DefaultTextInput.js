import { View, TextInput, Text } from 'react-native';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './DefaultTextInputStyles';

const DefaultTextInput = (props) => {
  const { password, style, onChangeText, name, error, errorText } = props;
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={password}
        underlineColorAndroid="#00000000"
        style={[styles.textInput, style, error ? styles.warningInput : {}]}
        onChangeText={(value) => onChangeText(name, value)}
      />

      <Text
        style={[
          styles.warningText,
          errorText ? {} : { color: colors.transparent },
        ]}
      >
        {errorText || 'Error occurs on this field'}
      </Text>
    </View>
  );
};

export default DefaultTextInput;
