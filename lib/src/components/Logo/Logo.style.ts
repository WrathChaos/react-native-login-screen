import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  textStyle: TextStyle;
  row: ViewStyle;
  iconStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "white",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconStyle: {
    marginLeft: 12,
  },
});
