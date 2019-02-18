import { StyleSheet } from 'react-native';
import { colors, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    fontFamily: fontTypes.main,
    fontSize: 20,
    backgroundColor: colors.tertiary,
    color: colors.black,
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.secondary,
  },
});

export default styles;
