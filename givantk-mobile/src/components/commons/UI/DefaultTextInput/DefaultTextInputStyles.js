import { StyleSheet } from 'react-native';
import {
  colors,
  gaps,
  fontSizes,
  fontTypes,
} from '../../../../assets/styles/base';

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
  },
  warningText: {
    fontSize: 8.5,
    margin: 0,
    padding: 0,
    marginLeft: 10,
    color: colors.red,
    fontWeight: '100',
    borderBottomWidth: 0,
  },
});

export default styles;
