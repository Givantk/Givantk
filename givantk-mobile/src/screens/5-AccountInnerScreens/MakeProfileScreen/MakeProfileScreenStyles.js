import { StyleSheet } from 'react-native';

import { colors } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    padding: 20,
  },
  input: {
    height: 40,
  },
  picker: {
    color: colors.gray01,
  },
  textarea1: {
    backgroundColor: colors.trueWhite,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 100,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  textarea2: {
    backgroundColor: colors.trueWhite,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 160,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  label: {
    color: colors.gray02,
  },
});

export default styles;
