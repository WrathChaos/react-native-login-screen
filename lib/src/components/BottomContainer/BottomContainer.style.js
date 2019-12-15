import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const container = backgroundColor => {
  return {
    height: 250,
    bottom: 100,
    backgroundColor,
    borderRadius: 24,
    width: width * 0.9,
    alignSelf: "center",
    position: "absolute"
  };
};

export default {
  containerGlue: {
    marginTop: 12
  },
  footerContainer: {
    right: 32,
    bottom: 24,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row"
  },
  switchTextStyle: {
    color: "white",
    marginRight: 8,
    fontWeight: "700"
  }
};
