import { StyleSheet } from 'react-native';

import { colors } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: { width: '90%', alignItems: 'center' },
  snake: {
    width: '80%',
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
