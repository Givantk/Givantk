import { Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const colors = {
  primary: "#C94B28",
  secondary: "#2B6BA0",
  tertiary: "#9E711F",
  black: "#232323",
  white: "#EAEEFF"
};

export const gaps = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50
};

export const fontSizes = {
  sm: 12,
  md: 18,
  lg: 28
};

export const fontTypes = {
  main: "montserratMedium",
  mainBold: "montserratBold",
  mainLight: "montserratLight"
};
