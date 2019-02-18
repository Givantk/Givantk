import { View, Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import Loading from '../Loading/Loading';
import styles from './MainButtonStyle';

const MainButton = ({ backgroundColor, onPress, children, big, loading }) => (
  <View>
    {loading ? (
      <Loading />
    ) : (
      <Button style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.buttonText, big && styles.textBig]}>
          {children}
        </Text>
      </Button>
    )}
  </View>
);

MainButton.defaultProps = {
  backgroundColor: colors.secondary,
};

MainButton.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  onPress: PropTypes.func,
  children: PropTypes.string,
  big: PropTypes.bool,
  loading: PropTypes.bool,
};

export default MainButton;
