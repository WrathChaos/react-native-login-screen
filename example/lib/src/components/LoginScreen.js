import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("window");
const defaultBackground =
  "https://images.unsplash.com/photo-1543637005-4d639a4e16de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1481&q=80";

const LoginScreen = props => {
  const { example } = props;
  return (
    <ImageBackground
      style={{
        width,
        height,
        flex: 1,
        zIndex: -1,
        ...StyleSheet.absoluteFillObject
      }}
      resizeMode="cover"
      source={{ uri: defaultBackground }}
    >
      <View
        style={{
          height,
          width,
          backgroundColor: "rgba(0,0,0,0.1)",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 50 }}>{example}</Text>
      </View>
    </ImageBackground>
  );
};

LoginScreen.propTypes = {
  example: PropTypes.number
};

LoginScreen.defaultProps = {
  example: 1
};

export default LoginScreen;
