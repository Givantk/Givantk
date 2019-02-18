import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

import styles from './DefaultButtonStyle';

const DefaultButton = (props) => (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );

// Props expected:
// onPress (func)
// style (object)

export default DefaultButton;
