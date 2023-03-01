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
  style?: StyleProp<ViewStyle>;
  dividerStyle?: StyleProp<ViewStyle>;
  logoImageStyle?: StyleProp<ImageStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  loginButtonStyle?: StyleProp<ViewStyle>;
  loginTextStyle?: StyleProp<TextStyle>;
  signupStyle?: StyleProp<ViewStyle>;
  signupTextStyle?: StyleProp<TextStyle>;
  emailTextInputProps?: IInteractiveTextInputProps;
  passwordTextInputProps?: IInteractiveTextInputProps;
  children?: any;
  customSocialLoginButtons?: React.ReactNode;
  customLoginButton?: React.ReactNode;
  customSignupButton?: React.ReactNode;
  customTextInputs?: React.ReactNode;
  textInputChildren?: React.ReactNode;
  customLogo?: React.ReactNode;
  customDivider?: React.ReactNode;
  onLoginPress: () => void;
  onSignupPress: () => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
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
  onPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = "Email",
  passwordPlaceholder = "Password",
  disableSignup = false,
  customSocialLoginButtons,
  customLogo,
  customTextInputs,
  textInputChildren,
  customLoginButton,
  customSignupButton,
  customDivider,
  children,
  emailTextInputProps,
  passwordTextInputProps,
}) => {
  const renderLogo = () =>
    customLogo || (
      <Image
        resizeMode="contain"
        source={logoImageSource}
        style={[styles.logoImageStyle, logoImageStyle]}
      />
    );

  const renderTextInputContainer = () =>
    customTextInputs || (
      <View style={[styles.textInputContainer, textInputContainerStyle]}>
        <TextInput
          placeholder={emailPlaceholder}
          onChangeText={onEmailChange}
          {...emailTextInputProps}
        />
        {!disablePasswordInput && (
          <View style={styles.passwordTextInputContainer}>
            <TextInput
              placeholder={passwordPlaceholder}
              secureTextEntry
              onChangeText={onPasswordChange}
              {...passwordTextInputProps}
            />
          </View>
        )}
        {textInputChildren}
      </View>
    );

  const renderLoginButton = () =>
    customLoginButton || (
      <TouchableOpacity
        style={[styles.loginButtonStyle, loginButtonStyle]}
        onPress={onLoginPress}
      >
        <Text style={[styles.loginTextStyle, loginTextStyle]}>
          {loginButtonText}
        </Text>
      </TouchableOpacity>
    );

  const renderSignUp = () =>
    customSignupButton ||
    (!disableSignup && (
      <TouchableOpacity
        style={[styles.signupStyle, signupStyle]}
        onPress={onSignupPress}
      >
        <Text style={[styles.signupTextStyle, signupTextStyle]}>
          {signupText}
        </Text>
      </TouchableOpacity>
    ));

  const renderDivider = () =>
    customDivider ||
    (!disableDivider && <View style={[styles.dividerStyle, dividerStyle]} />);

  const renderDefaultSocialLoginButtons = () =>
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
      {renderLogo()}
      {renderTextInputContainer()}
      {renderLoginButton()}
      {renderSignUp()}
      {renderDivider()}
      <View style={styles.socialLoginContainer}>
        {customSocialLoginButtons || renderDefaultSocialLoginButtons()}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
