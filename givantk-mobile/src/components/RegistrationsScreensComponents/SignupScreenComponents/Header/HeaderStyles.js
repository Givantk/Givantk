import { StyleSheet } from "react-native";

import { colors, fontSizes, fontTypes } from "../../../../assets/styles/base";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    color: colors.secondary,
    fontSize: fontSizes.huge,
    //fontWeight: "bold"
    fontFamily: fontTypes.logoFont
  },
  subHeader: {
    color: colors.white,
    fontSize: fontSizes.md,
    //fontWeight: "bold",
    fontFamily: fontTypes.logoFont,
    marginTop: -10
  }
});

export default styles;
