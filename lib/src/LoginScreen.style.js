import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const container = loginButtonBackgroundColor => {
  return {
    width,
    height,
    marginBottom: 32,
    backgroundColor: loginButtonBackgroundColor
  };
};

export default {
  loginButtonStyle: {
    left: 0,
    right: 0,
    bottom: 24,
    height: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  loginButtonTextStyle: {
    color: "white",
    fontSize: 15
  },
  imagebackgroundStyle: {
    width,
    flex: 1,
    zIndex: -1,
    height: height * 0.9,
    ...StyleSheet.absoluteFillObject
  },
  blackoverlay: {
    width,
    height,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  safeAreaViewStyle: {
    flex: 1
  },
  loginContainer: {
    marginTop: 24
  }
};
