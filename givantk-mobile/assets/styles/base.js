import { Dimensions } from "react-native";
import Color from "color";

//DIMENTIONS

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

//GAPS

export const gaps = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  filler: 100
};

//FONT SIZES

export const fontSizes = {
  sm: 12,
  md: 18,
  lg: 28
};

//FONT TYPES

export const fontTypes = {
  main: "montserratMedium",
  mainBold: "montserratBold",
  mainLight: "montserratLight"
};

//COLORS

const primaryColor = Color("#008388");
const secondaryColor = Color("#F4B2EB");
const tertiaryColor = Color("#F4B2EB");
const black = Color("#232323");
const white = Color("#EAEEFF");

export const colors = {
  primary: primaryColor,
  primaryLight: primaryColor.lighten(0.4),
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  black: black,
  white: white
};
