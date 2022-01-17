import {
  ViewStyle,
  StyleSheet,
  Dimensions,
  ImageStyle,
  TextStyle,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  iconImageStyle: ImageStyle;
  textContainer: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 45,
    borderRadius: 8,
    width: ScreenWidth * 0.9,
    paddingLeft: ScreenWidth * 0.2,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#e9eef4",
  },
  iconImageStyle: {
    width: 20,
    height: 20,
  },
  textContainer: {
    marginLeft: 16,
  },
  textStyle: {
    color: "#315092",
    fontWeight: "500",
  },
});
