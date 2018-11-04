import { Font } from "expo";

const loadAllFonts = fonts => fonts.map(font => Font.loadAsync(font));

export const loadFonts = loadAllFonts([
  {
    montserratBold: require("./Montserrat-Bold.ttf")
  },
  {
    montserratLight: require("./Montserrat-Light.ttf")
  },
  {
    montserratMedium: require("./Montserrat-Medium.ttf")
  }
]);
