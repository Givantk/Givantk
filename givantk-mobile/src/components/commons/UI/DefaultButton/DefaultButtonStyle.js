import { StyleSheet } from 'react-native';

import { colors, gaps, fontSizes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    minHeight: 55,
  },
  button: {
    margin: gaps.sm,
    padding: gaps.xsm,
    backgroundColor: colors.white,
    width: '70%',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
});

export default styles;
