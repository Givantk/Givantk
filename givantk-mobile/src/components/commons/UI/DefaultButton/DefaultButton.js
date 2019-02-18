import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import Loading from '../Loading/Loading';
import styles from './DefaultButtonStyle';

const DefaultButton = ({ style, onPress, children, loading }) => (
  <View style={styles.container}>
    {loading ? (
      <Loading color={colors.secondary} />
    ) : (
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    )}
  </View>
);

DefaultButton.propTypes = {
  style: PropTypes.shape({}),
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  loading: PropTypes.bool,
};

export default DefaultButton;
