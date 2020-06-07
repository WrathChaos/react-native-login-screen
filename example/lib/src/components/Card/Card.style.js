import { isAndroid } from "@freakycoder/react-native-helpers";

export const _textInputStyle = textColor => {
  return {
    fontSize: 14,
    color: textColor,
    fontWeight: "800",
    right: isAndroid ? 5 : 0,
    marginTop: isAndroid ? 0 : 3,
    height: isAndroid ? 35 : null
  };
};

export const _textStyle = titleColor => {
  return {
    fontSize: 12,
    fontWeight: "700",
    color: titleColor
  };
};

export default {
  container: {
    margin: 8,
    height: 75,
    width: "95%",
    marginTop: 0,
    borderRadius: 24,
    justifyContent: "center",
    backgroundColor: "white"
  },
  containerGlue: {
    marginLeft: 24,
    marginRight: 24,
    flexDirection: "row"
  },
  textContainer: {
    width: "90%",
    marginLeft: 12,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: isAndroid ? 10 : null
  }
};
