import { StyleSheet } from 'react-native';

import { colors } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray03,
    width: '70%',
    color: colors.white,
    fontWeight: 'bold',
  },
  viewInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray03,
    width: '70%',
  },
  warningText: {
    fontSize: 8.5,
    margin: 0,
    padding: 0,
    marginLeft: 10,
    color: colors.red,
    fontWeight: '100',
    borderBottomWidth: 0,
    width: '70%',
  },
  facebookButton: {
    color: colors.facebook,
  },
  buttonsContainer: { width: '100%', marginVertical: '10%' },
});

export default styles;
