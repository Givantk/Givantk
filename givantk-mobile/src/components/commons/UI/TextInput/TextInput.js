import { TextField } from 'react-native-ui-lib';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './TextInputStyles';

const TextInput = (props) => {
  const { password, onChange, style, name, error } = props;

  return (
    <TextField
      {...props}
      style={[
        style,
        styles.input,
        { borderColor: error ? colors.red : colors.primary },
      ]}
      secureTextEntry={password}
      onChangeText={(value) => onChange(name, value)}
      hideUnderline
    />
  );
};

export default TextInput;
