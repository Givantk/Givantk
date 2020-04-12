import { StyleSheet } from 'react-native';
import { colors, gaps } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.secondary,
    margin: gaps.sm,
    marginBottom: 0,
    padding: gaps.xsm,
    paddingLeft: 10,
  },
  warningText: {
    fontSize: 8.5,
    margin: 0,
    padding: 0,
    marginLeft: 10,
    color: colors.red,
    fontWeight: '100',
    borderBottomWidth: 0,
    backgroundColor: colors.transparent,
    width: '70%',
  },
  warningInput: {
    borderColor: colors.red,
    borderWidth: 2,
  },
});

export default styles;
