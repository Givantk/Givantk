import { StyleSheet } from "react-native";

import { colors } from "../../../assets/styles/base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "center"
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: "10%",
    backgroundColor: colors.white
  },
  searchInput: {
    borderColor: colors.primary,
    backgroundColor: "#FFF",
    borderWidth: 2,
    paddingLeft: 15
  },
  searchIcon: {
    color: colors.primary
  }
});

export default styles;
