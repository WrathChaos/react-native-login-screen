import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import { isAndroid } from "@freakycoder/react-native-helpers";

interface Style {
  container: ViewStyle;
  containerGlue: ViewStyle;
  textContainer: ViewStyle;
  iconContainer: ViewStyle;
}

export const _textInputStyle = (textColor?: string): TextStyle => {
  return {
    fontSize: 14,
    color: textColor,
    fontWeight: "800",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.3,
    right: isAndroid ? 5 : 0,
    marginTop: isAndroid ? 0 : 3,
    height: isAndroid ? 35 : undefined,
  };
};

export const _textStyle = (titleColor?: string): TextStyle => {
  return {
    fontSize: 12,
    fontWeight: "700",
    color: titleColor,
  };
};

export default StyleSheet.create<Style>({
  container: {
    margin: 8,
    height: 75,
    width: "95%",
    marginTop: 0,
    borderRadius: 24,
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerGlue: {
    marginLeft: 24,
    marginRight: 24,
    flexDirection: "row",
  },
  textContainer: {
    bottom: 8,
    width: "80%",
    marginLeft: 12,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: isAndroid ? 10 : undefined,
  },
  iconContainer: {
    width: 35,
    justifyContent: "center",
  },
});
