import { Picker } from 'react-native-ui-lib';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import styles from './PickerStyles';

const PickerInput = (props) => {
  const { onChange, style, name, error, options } = props;

  return (
    <Picker
      {...props}
      style={[
        style,
        styles.picker,
        { borderColor: error ? colors.red : colors.primary },
      ]}
      onChange={(c) => onChange(name, c)}
      hideUnderline
      enableErrors
    >
      {options.map((option) => (
        <Picker.Item key={option} value={option} disabled={option.disabled} />
      ))}
    </Picker>
  );
};

export default PickerInput;
