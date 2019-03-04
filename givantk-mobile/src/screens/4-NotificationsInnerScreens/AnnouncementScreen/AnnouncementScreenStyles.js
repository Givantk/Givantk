import { StyleSheet } from 'react-native';

import { colors, fontTypes, fontSizes } from '../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 30,
    paddingVertical: 100,
    backgroundColor: colors.primary.lighten(0.2),
  },
  title: {
    color: colors.white,
    fontFamily: fontTypes.main,
    fontSize: fontSizes.lg,
  },
  content: {
    color: colors.trueWhite,
    fontFamily: fontTypes.logoFont,
    fontSize: fontSizes.md,
  },
  signature: {
    color: colors.secondary,
    alignSelf: 'flex-end',
    fontFamily: fontTypes.mainBold,
  },
});

export default styles;
