import {
  ViewStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
  ImageStyle,
} from "react-native";
const { width, height } = Dimensions.get("window");

interface Style {
  containerGlue: ViewStyle;
  footerContainer: ViewStyle;
  signupContainer: ViewStyle;
  signupTextStyle: TextStyle;
  signupButtonStyle: TextStyle;
  signupButtonRightArrowContainer: ViewStyle;
  signupButtonRightArrowImageStyle: ImageStyle;
  settingsIconContainer: ViewStyle;
  settingsIconImageStyle: ImageStyle;
  passwordIconImageStyle: ImageStyle;
  userIconImageStyle: ImageStyle;
}

export const container = (
  backgroundColor: string = "rgba(255,255,255,0.45)",
  cardState: boolean = false,
): ViewStyle => {
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
    padding: 10,
    minHeight: 30,
    borderRadius: 16,
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  signupButtonRightArrowContainer: {
    marginLeft: 5,
  },
  signupButtonRightArrowImageStyle: {
    width: 15,
    height: 15,
  },
  settingsIconContainer: {
    shadowRadius: 3,
    shadowOpacity: 0.7,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  settingsIconImageStyle: {
    width: 35,
    height: 35,
  },
  passwordIconImageStyle: {
    width: 30,
    height: 30,
  },
  userIconImageStyle: {
    width: 30,
    height: 30,
  },
});
