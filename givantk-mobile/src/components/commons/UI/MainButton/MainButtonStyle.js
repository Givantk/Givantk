import { StyleSheet } from 'react-native';

import { colors } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    color: colors.trueWhite,
    fontWeight: 'bold',
    fontSize: 13,
  },
  textBig: { fontSize: 20 },
});

export default styles;
