import { StyleSheet } from 'react-native';

import { colors } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  buttonSmall: {
    margin: 5,
    height: 25,
  },
  buttonText: {
    color: colors.trueWhite,
    fontWeight: 'bold',
    fontSize: 13,
  },
  textBig: { fontSize: 20 },
  textSmall: { fontSize: 12 },
});

export default styles;
