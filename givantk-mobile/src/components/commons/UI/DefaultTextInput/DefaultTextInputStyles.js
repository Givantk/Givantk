import { StyleSheet } from "react-native";
import { colors, gaps } from "../../../../assets/styles/base";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  textInput: {
    width: "70%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.secondary,
    margin: gaps.sm,
    padding: gaps.xsm,
    color: colors.white
  }
});

export default styles;
