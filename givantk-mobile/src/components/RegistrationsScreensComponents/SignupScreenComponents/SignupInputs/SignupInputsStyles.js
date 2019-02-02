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
  buttonsContainer: { width: '100%', marginVertical: '10%' },
  button: { margin: 7 },
});

export default styles;
