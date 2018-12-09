import { Dimensions } from "react-native";
import Color from "color";

//DIMENTIONS

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

Dimensions.addEventListener("change", dims => {
  dimensions.fullHeight = dims.window.height;
  dimensions.fullWidth = dims.window.width;
});

//GAPS

export const gaps = {
  xsm: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  xxxl: 80,
  filler: 120
};

//FONT SIZES

export const fontSizes = {
  sm: 12,
  md: 18,
  lg: 28,
  xlg: 40,
  huge: 50
};

//FONT TYPES

export const fontTypes = {
  main: "montserratMedium",
  mainBold: "montserratBold",
  logoFont: "montserratLight"
};

//COLORS

const primaryColor = Color("#008388");
const secondaryColor = Color("#FFA963");
const tertiaryColor = Color("#F5F5DC");
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
