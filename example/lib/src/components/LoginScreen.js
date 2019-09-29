import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Logo from "./Logo/Logo";
import BottomContainer from "./BottomContainer/BottomContainer";

const { width, height } = Dimensions.get("window");
const defaultBackground =
  "https://images.unsplash.com/photo-1543637005-4d639a4e16de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1481&q=80";

const LoginScreen = props => {
  const { onPress } = props;

  function renderBottomButton() {
    return (
      <TouchableOpacity
        style={{
          left: 0,
          right: 0,
          bottom: 24,
          height: 50,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center"
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "Montserrat-Bold"
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View
      style={{ backgroundColor: "#282828", height, width, marginBottom: 32 }}
    >
      <ImageBackground
        style={{
          width,
          flex: 1,
          zIndex: -1,
          height: height * 0.9,
          ...StyleSheet.absoluteFillObject
        }}
        borderRadius={24}
        resizeMode="cover"
        source={{ uri: defaultBackground }}
      >
        <View
          style={{
            width,
            height,
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginTop: 24 }}>
              <Logo {...props} />
            </View>
            <BottomContainer {...props} />
          </SafeAreaView>
        </View>
      </ImageBackground>
      {renderBottomButton()}
    </View>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default LoginScreen;
