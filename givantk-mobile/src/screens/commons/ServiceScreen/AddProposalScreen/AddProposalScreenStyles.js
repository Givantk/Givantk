import { StyleSheet } from 'react-native';

import { colors, fontTypes } from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textarea: {
    backgroundColor: colors.trueWhite,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 200,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  error: {
    color: colors.red,
    marginTop: -10,
    fontWeight: 'bold',
    fontFamily: fontTypes.main,
  },
  submitButtonContainer: {
    marginTop: 30,
  },
});

export default styles;
