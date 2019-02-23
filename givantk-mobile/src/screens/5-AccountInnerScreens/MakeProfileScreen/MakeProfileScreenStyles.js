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
  uploadButton: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    marginBottom: 10,
    marginTop: 10,
  },
  uploadButtonText: {
    color: colors.trueWhite,
    fontSize: 20,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    width: 200,
    height: 200,
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
    marginTop: 5,
    marginBottom: 20,
    padding: 10,
  },
  textarea2: {
    backgroundColor: colors.trueWhite,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 120,
    marginTop: 5,
    marginBottom: 20,
    padding: 10,
  },
  label: {
    color: colors.gray02,
  },
  error: {
    color: colors.red.lighten(0.5),
    marginTop: -16,
    fontSize: 14,
    marginBottom: 10,
  },
  submitButton: {
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  submitButtonText: {
    color: colors.trueWhite,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
