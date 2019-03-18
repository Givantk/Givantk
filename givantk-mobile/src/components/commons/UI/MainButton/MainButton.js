import { View, Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';
import Loading from '../Loading/Loading';
import styles from './MainButtonStyle';

const MainButton = ({
  backgroundColor,
  onPress,
  children,
  big,
  small,
  loading,
  disabled,
}) => (
  <View>
    {loading ? (
      <Loading />
    ) : (
      <Button
        style={[
          styles.button,
          { backgroundColor: disabled ? colors.gray02 : backgroundColor },
          small && styles.buttonSmall,
        ]}
        onPress={disabled ? () => null : onPress}
      >
        <Text
          style={[
            styles.buttonText,
            big && styles.textBig,
            small && styles.textSmall,
          ]}
        >
          {children}
        </Text>
      </Button>
    )}
  </View>
);

MainButton.defaultProps = {
  backgroundColor: colors.secondary,
  disabled: false,
};

MainButton.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  onPress: PropTypes.func,
  children: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MainButton;
