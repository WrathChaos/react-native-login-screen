import { ViewStyle, TextStyle, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

interface Style {
  containerGlue: ViewStyle;
  footerContainer: ViewStyle;
  signupContainer: ViewStyle;
  signupTextStyle: TextStyle;
  signupButtonStyle: TextStyle;
}

export const container = (backgroundColor: string, cardState: boolean) => {
  return {
    backgroundColor,
    borderRadius: 24,
    width: width * 0.9,
    alignSelf: "center",
    position: "absolute",
    bottom: height * 0.15,
    height: cardState ? 250 : 350,
  };
};

export default StyleSheet.create<Style>({
  containerGlue: {
    marginTop: 12,
  },
  footerContainer: {
    flex: 1,
    margin: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  signupContainer: {
    marginLeft: "auto",
  },
  signupTextStyle: {
    color: "#fdfdfd",
    fontWeight: "700",
  },
  signupButtonStyle: {
    padding: 12,
    minHeight: 30,
    borderRadius: 16,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
