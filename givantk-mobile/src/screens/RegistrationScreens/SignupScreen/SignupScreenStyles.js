import { StyleSheet } from 'react-native';

import { colors, dimensions } from '../../../assets/styles/base';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: dimensions.fullHeight,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: dimensions.fullWidth / 5,
  },
  buttonsContainer: { width: '100%', marginBottom: '15%' },
  button: { margin: 7 },
});
