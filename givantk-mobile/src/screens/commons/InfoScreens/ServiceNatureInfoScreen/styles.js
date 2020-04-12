import { StyleSheet } from 'react-native';
import {
  colors,
  fontTypes,
  fontSizes,
  dimensions,
} from '../../../../assets/styles/base';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: colors.primary.lighten(0.2),
    minHeight: dimensions.fullHeight,
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
