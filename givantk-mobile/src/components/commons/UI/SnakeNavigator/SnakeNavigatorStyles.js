import { StyleSheet } from 'react-native';

import { colors } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: { height: '100%', alignItems: 'center' },
  snake: {
    height: 45,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  slice: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray01,
  },
  sliceText: { fontWeight: 'bold' },
});

export default styles;
