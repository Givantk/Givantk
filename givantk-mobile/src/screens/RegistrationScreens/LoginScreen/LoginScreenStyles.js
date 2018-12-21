import { StyleSheet } from 'react-native';

import { colors, gaps, dimensions } from '../../../assets/styles/base';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: dimensions.fullWidth / 3.5
  },
  inputContainer: {
    width: '100%'
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray03,
    width: '70%',
    color: colors.white,
    fontWeight: 'bold'
  },
  signupRedirect: {
    flexDirection: 'row',
    marginBottom: gaps.md
  },
  signupRedirectText: {
    color: colors.black
  },
  signupRedirectButtonText: {
    color: colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary
  }
});
