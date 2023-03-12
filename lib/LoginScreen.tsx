import * as React from "react";
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
import TextInput, {
  IInteractiveTextInputProps,
} from "react-native-text-input-interactive";
/**
 * ? Local Imports
 */
import styles from "./LoginScreen.style";
import SocialButton from "./components/social-button/SocialButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => {};
export interface ILoginScreenProps {
  signupText?: string;
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  disableSignup?: boolean;
  disablePasswordInput?: boolean;
  loginButtonText?: string;
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  loginButtonStyle?: CustomStyleProp;
  loginTextStyle?: CustomTextStyleProp;
  signupStyle?: CustomStyleProp;
  signupTextStyle?: CustomTextStyleProp;
  textInputProps?: IInteractiveTextInputProps;
  children?: any;
  onLoginPress: () => void;
  onSignupPress: () => void;
  onEmailChange: (email: string) => void;
  emailValue?: string;
  onPasswordChange: (password: string) => void;
  passwordValue?: string;
  onFacebookPress?: () => void;
  onTwitterPress?: () => void;
  onApplePress?: () => void;
  onDiscordPress?: () => void;
}

const LoginScreen: React.FC<ILoginScreenProps> = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  signupTextStyle,
  signupStyle,
  textInputContainerStyle,
  signupText = "Create an account",
  disableDivider,
  logoImageSource,
  onLoginPress,
  disableSocialButtons,
  disablePasswordInput = false,
  loginButtonText = "Login",
  onSignupPress,
  onEmailChange,
  emailValue,
  onPasswordChange,
  passwordValue,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = "Email",
  passwordPlaceholder = "Password",
  disableSignup = false,
  children,
  textInputProps,
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
      <TextInput
        placeholder={emailPlaceholder}
        onChangeText={onEmailChange}
        value={emailValue}
        {...textInputProps}
      />
      {!disablePasswordInput && (
        <View style={styles.passwordTextInputContainer}>
          <TextInput
            placeholder={passwordPlaceholder}
            secureTextEntry
            onChangeText={onPasswordChange}
            value={passwordValue}
            {...textInputProps}
          />
        </View>
      )}
    </View>
  );

  const LoginButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle, loginButtonStyle]}
      onPress={onLoginPress}
    >
      <Text style={[styles.loginTextStyle, loginTextStyle]}>
        {loginButtonText}
      </Text>
    </TouchableOpacity>
  );

  const SignUp = () => (
    <TouchableOpacity
      style={[styles.signupStyle, signupStyle]}
      onPress={onSignupPress}
    >
      <Text style={[styles.signupTextStyle, signupTextStyle]}>
        {signupText}
      </Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle, dividerStyle]} />;

  const DefaultSocialLoginButtons = () =>
    !disableSocialButtons ? (
      <>
        <SocialButton
          text="Continue with Facebook"
          textStyle={styles.facebookSocialButtonTextStyle}
          onPress={onFacebookPress}
        />
        <SocialButton
          text="Continue with Twitter"
          style={styles.socialButtonStyle}
          textStyle={styles.twitterSocialButtonTextStyle}
          imageSource={require("./local-assets/twitter.png")}
          onPress={onTwitterPress}
        />
        <SocialButton
          text="Continue with Apple"
          style={styles.socialButtonStyle}
          imageSource={require("./local-assets/apple.png")}
          onPress={onApplePress}
        />
        <SocialButton
          text="Continue with Discord"
          style={styles.socialButtonStyle}
          textStyle={styles.discordSocialButtonTextStyle}
          imageSource={require("./local-assets/discord.png")}
          onPress={onDiscordPress}
        />
      </>
    ) : null;

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <TextInputContainer />
      <LoginButton />
      {!disableSignup && <SignUp />}
      {!disableDivider && <Divider />}
      <View style={styles.socialLoginContainer}>
        {children || <DefaultSocialLoginButtons />}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
