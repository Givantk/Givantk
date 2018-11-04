import { StyleSheet } from "react-native";

import { colors, gaps } from "../../../../assets/styles/base";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center"
  },
  signupButtonContainer: {
    marginBottom: gaps.md
  },
  logoStyle: {
    margin: 10,
    height: 100,
    width: 100
  }
});
