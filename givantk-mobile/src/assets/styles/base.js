import { Dimensions } from 'react-native';
import Color from 'color';

// DIMENTIONS

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

Dimensions.addEventListener('change', (dims) => {
  dimensions.fullHeight = dims.window.height;
  dimensions.fullWidth = dims.window.width;
});

export const bottomTabHeight = 90;
export const headerHeight = 60;

// GAPS

export const gaps = {
  xsm: 5,
  sm: 10,
  msm: 15,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  xxxl: 80,
  filler: 120,
};

// FONT SIZES

export const fontSizes = {
  xxs: 8,
  xs: 10,
  sm: 12,
  msm: 15,
  md: 18,
  lg: 28,
  xlg: 40,
  huge: 50,
};

// FONT TYPES

export const fontTypes = {
  main: 'montserratMedium',
  mainBold: 'montserratBold',
  logoFont: 'montserratLight',
};

// COLORS

const primaryColor = Color('#3871C2');
const secondaryColor = Color('#FFA963');
const tertiaryColor = Color('#F3FAFC');
const black = Color('#232323');
const white = Color('#EAEEFF');
const trueWhite = Color('#FFFFFF');
const red = Color('#FF0000');
const disclaimer = Color('#3385ff');
const facebook = Color('#3b5998');
const gray01 = Color('#B3B3B3');
const gray02 = Color('#959595');
const gray03 = Color('#627273');
const gray04 = Color('#ddd');
const transparent = '#00FFFF00';

export const colors = {
  primary: primaryColor,
  primaryLight: primaryColor.lighten(0.4),
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  black,
  white,
  trueWhite,
  red,
  disclaimer,
  facebook,
  gray01,
  gray02,
  gray03,
  gray04,
  transparent,
};
