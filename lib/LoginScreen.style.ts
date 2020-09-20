import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";
import {
  isAndroid,
  ScreenWidth,
  ScreenHeight,
  isIPhoneXFamily,
} from "@freakycoder/react-native-helpers";

interface Style {
  spinnerStyle: ViewStyle;
  loginButtonStyle: ViewStyle;
  loginButtonTextStyle: TextStyle;
  imageBackgroundStyle: ViewStyle;
  blackoverlay: ViewStyle;
  safeAreaViewStyle: ViewStyle;
  loginContainer: ViewStyle;
}

export const container = (loginButtonBackgroundColor) => {
  return {
    marginBottom: 32,
    width: ScreenWidth,
    height: ScreenHeight,
    backgroundColor: loginButtonBackgroundColor,
  };
};

export default StyleSheet.create<Style>({
  spinnerStyle: {
    left: 0,
    right: 0,
    zIndex: 9,
    height: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: isIPhoneXFamily() ? 24 : 12,
  },
  loginButtonStyle: {
    left: 0,
    right: 0,
    zIndex: 9,
    height: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: isAndroid ? 24 : isIPhoneXFamily() ? 24 : 12,
  },
  loginButtonTextStyle: {
    color: "white",
    fontSize: 15,
  },
  imageBackgroundStyle: {
    flex: 1,
    zIndex: -1,
    width: ScreenWidth,
    height: ScreenHeight * 0.9,
    ...StyleSheet.absoluteFillObject,
  },
  blackoverlay: {
    width: ScreenWidth,
    height: ScreenHeight,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  safeAreaViewStyle: {
    flex: 1,
  },
  loginContainer: {
    marginTop: 24,
  },
});
