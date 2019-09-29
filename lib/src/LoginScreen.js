import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Logo from "./Logo/Logo";
import BottomContainer from "./BottomContainer/BottomContainer";
import styles, { container } from "./LoginScreen.style";

const defaultBackground =
  "https://images.unsplash.com/photo-1543637005-4d639a4e16de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1481&q=80";

const LoginScreen = props => {
  const {
    source,
    onPress,
    children,
    loginText,
    loginButtonTextStyle,
    loginButtonBackgroundColor
  } = props;

  function renderLoginButton() {
    return (
      <TouchableOpacity style={styles.loginButtonStyle} onPress={onPress}>
        <Text style={loginButtonTextStyle}>{loginText}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={container(loginButtonBackgroundColor)}
    >
      <View style={container(loginButtonBackgroundColor)}>
        <ImageBackground
          borderRadius={24}
          resizeMode="cover"
          style={styles.imagebackgroundStyle}
          source={source}
        >
          <View style={styles.blackoverlay}>
            <SafeAreaView style={styles.safeAreaViewStyle}>
              <View style={styles.loginContainer}>
                <Logo {...props} />
              </View>
              {children}
              <BottomContainer {...props} />
            </SafeAreaView>
          </View>
        </ImageBackground>
        {renderLoginButton()}
      </View>
    </KeyboardAvoidingView>
  );
};

LoginScreen.propTypes = {
  loginText: PropTypes.string,
  loginButtonBackgroundColor: PropTypes.string
};

LoginScreen.defaultProps = {
  loginText: "LOGIN",
  source: { uri: defaultBackground },
  loginButtonBackgroundColor: "#282828",
  loginButtonTextStyle: styles.loginButtonTextStyle
};

export default LoginScreen;
