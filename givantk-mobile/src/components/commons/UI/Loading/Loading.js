import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../../assets/styles/base';
import styles from './LoadingStyles';

const Loading = ({ color }) => (
  <View style={styles.root}>
    <ActivityIndicator size="large" color={color || colors.primary} />
  </View>
);

Loading.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
};

export default Loading;
