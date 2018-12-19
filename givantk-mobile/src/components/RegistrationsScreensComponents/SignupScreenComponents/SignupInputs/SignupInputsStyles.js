import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/styles/base";

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%"
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#627273",
    width: "70%",
    color: colors.white,
    fontWeight: "bold"
  }
});

export default styles;
