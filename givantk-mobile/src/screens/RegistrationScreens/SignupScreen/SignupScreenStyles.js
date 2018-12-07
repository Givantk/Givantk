import { StyleSheet } from "react-native";

import { colors, gaps, dimensions } from "../../../assets/styles/base";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: dimensions.fullWidth / 5
  },
  signinRedirect: {
    flexDirection: "row",
    marginBottom: gaps.md
  },
  signinRedirectText: {
    color: colors.black
  },
  signinRedirectButtonText: {
    color: colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary
  }
});
