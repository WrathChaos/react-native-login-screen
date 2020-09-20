import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Spinner from "react-native-spinkit";
/**
 * ? Local Imports
 */
import Logo from "./components/Logo/Logo";
import styles, { container } from "./LoginScreen.style";
import BottomContainer from "./components/BottomContainer/BottomContainer";

export interface ILoginProps {
  source: any;
  loginText?: string;
  spinnerStyle?: any;
  signupText: string;
  spinnerType?: string;
  spinnerSize?: number;
  spinnerColor?: string;
  spinnerEnable?: boolean;
  onPressLogin?: () => void;
  onPressSignup?: () => void;
  loginButtonTextStyle?: any;
  spinnerVisibility?: boolean;
  loginButtonBackgroundColor?: any;
}

const defaultBackground =
  "https://images.unsplash.com/photo-1543637005-4d639a4e16de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1481&q=80";

const LoginScreen = (props: ILoginProps) => {
  const {
    source,
    loginText,
    signupText,
    spinnerType,
    spinnerSize,
    spinnerColor,
    onPressLogin,
    spinnerStyle,
    spinnerEnable,
    onPressSignup,
    spinnerVisibility,
    loginButtonTextStyle,
    loginButtonBackgroundColor,
  } = props;

  const [cardState, setCardState] = React.useState(true);

  const renderSpinner = () => (
    <View style={styles.spinnerStyle}>
      <Spinner
        size={spinnerSize}
        type={spinnerType}
        style={spinnerStyle}
        color={spinnerColor}
        isVisible={spinnerVisibility}
      />
    </View>
  );

  const renderLoginButton = () => (
    <TouchableOpacity style={styles.loginButtonStyle} onPress={onPressLogin}>
      <Text style={loginButtonTextStyle}>
        {cardState ? loginText : signupText.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={container(loginButtonBackgroundColor)}
    >
      <View style={container(loginButtonBackgroundColor)}>
        <ImageBackground
          source={source}
          borderRadius={24}
          resizeMode="cover"
          style={styles.imageBackgroundStyle}
        >
          <View style={styles.blackoverlay}>
            <SafeAreaView style={styles.safeAreaViewStyle}>
              <View style={styles.loginContainer}>
                <Logo {...props} />
              </View>
              <BottomContainer
                {...props}
                cardState={cardState}
                onPressSignup={() => {
                  setCardState(!cardState);
                  onPressSignup && onPressSignup();
                }}
              />
            </SafeAreaView>
          </View>
        </ImageBackground>
        {spinnerEnable && spinnerVisibility
          ? renderSpinner()
          : renderLoginButton()}
      </View>
    </KeyboardAvoidingView>
  );
};

LoginScreen.defaultProps = {
  spinnerSize: 30,
  loginText: "LOGIN",
  spinnerEnable: false,
  spinnerColor: "#fdfdfd",
  signupText: "Sign Me Up",
  spinnerVisibility: false,
  spinnerType: "ThreeBounce",
  source: { uri: defaultBackground },
  loginButtonBackgroundColor: "#282828",
  loginButtonTextStyle: styles.loginButtonTextStyle,
};

export default LoginScreen;
