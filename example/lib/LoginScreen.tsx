import React from "react";
import {
  Image,
  View,
  Text,
  StyleProp,
  ViewStyle,
  StatusBar,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import TextInput from "react-native-text-input-interactive";
/**
 * ? Local Imports
 */
import styles from "./LoginScreen.style";
import SocialLogin from "./components/social-login/SocialLogin";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface ILoginScreenProps {
  haveAccountText?: string;
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  loginButtonStyle?: CustomStyleProp;
  loginTextStyle?: CustomTextStyleProp;
  haveAccountButtonStyle?: CustomStyleProp;
  haveAccountTextStyle?: CustomTextStyleProp;
  logoImageSource?: any;
  onLoginPress: () => void;
  onHaveAccountPress: () => void;
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
}

const LoginScreen: React.FC<ILoginScreenProps> = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  haveAccountTextStyle,
  haveAccountButtonStyle,
  textInputContainerStyle,
  haveAccountText = "Already have an account?",
  logoImageSource,
  onLoginPress,
  onHaveAccountPress,
  onChangeEmail,
  onChangePassword,
  children,
}) => {
  const Logo = () => (
    <Image
      resizeMode="contain"
      source={logoImageSource}
      style={[styles.logoImageStyle, logoImageStyle]}
    />
  );

  const TextInputContainer = () => (
    <View style={[styles.textInputContainer, textInputContainerStyle]}>
      <TextInput placeholder="Email" onChangeText={onChangeEmail} />
      <View style={styles.passwordTextInputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={onChangePassword}
        />
      </View>
    </View>
  );

  const LoginButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle, loginButtonStyle]}
      onPress={onLoginPress}
    >
      <Text style={[styles.loginTextStyle, loginTextStyle]}>Login</Text>
    </TouchableOpacity>
  );

  const AlreadyHaveAccount = () => (
    <TouchableOpacity
      style={[styles.haveAccountButtonStyle, haveAccountButtonStyle]}
      onPress={onHaveAccountPress}
    >
      <Text style={[styles.haveAccountTextStyle, haveAccountTextStyle]}>
        {haveAccountText}
      </Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle, dividerStyle]} />;

  const DefaultSocialLoginButtons = () => (
    <>
      <SocialLogin
        text="Continue with Facebook"
        textStyle={{ color: "#4267B2" }}
        onPress={() => {}}
      />
      <SocialLogin
        text="Continue with Twitter"
        style={{ marginTop: 16 }}
        textStyle={{ color: "#56bfe8" }}
        imageSource={require("./local-assets/twitter.png")}
        onPress={() => {}}
      />
      <SocialLogin
        text="Continue with Apple"
        style={{ marginTop: 16 }}
        imageSource={require("./local-assets/apple.png")}
        onPress={() => {}}
      />
      <SocialLogin
        text="Continue with Discord"
        style={{ marginTop: 16 }}
        textStyle={{ color: "#5865F2" }}
        imageSource={require("./local-assets/discord.png")}
        onPress={() => {}}
      />
    </>
  );

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <TextInputContainer />
      <LoginButton />
      <AlreadyHaveAccount />
      <Divider />
      <View style={styles.socialLoginContainer}>
        {children || <DefaultSocialLoginButtons />}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
