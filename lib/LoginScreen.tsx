import * as React from "react";
import {
  Image,
  ImageStyle,
  SafeAreaView,
  StatusBar,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import TextInput, {
  IInteractiveTextInputProps,
} from "react-native-text-input-interactive";
import Tooltip, { Placement } from "react-native-tooltip-2";
/**
 * ? Local Imports
 */
import styles from "./LoginScreen.style";
import SocialButton from "./components/social-button/SocialButton";
import useStateWithCallback from "./helpers/useStateWithCallback";
import emailValidator from "./helpers/emailValidator";
import passwordValidator from "./helpers/passwordValidator";

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
  disableEmailValidation?: boolean;
  disablePasswordValidation?: boolean;
  style?: StyleProp<ViewStyle>;
  dividerStyle?: StyleProp<ViewStyle>;
  logoImageStyle?: StyleProp<ImageStyle>;
  eyeIconStyle?: StyleProp<ImageStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  loginButtonStyle?: StyleProp<ViewStyle>;
  loginTextStyle?: StyleProp<TextStyle>;
  signupStyle?: StyleProp<ViewStyle>;
  eyeIconContainer?: StyleProp<ViewStyle>;
  signupTextStyle?: StyleProp<TextStyle>;
  emailTextInputProps?: IInteractiveTextInputProps;
  passwordTextInputProps?: IInteractiveTextInputProps;
  children?: any;
  customSocialLoginButtons?: React.ReactNode;
  customLoginButton?: React.ReactNode;
  customSignupButton?: React.ReactNode;
  customTextInputs?: React.ReactNode;
  textInputChildren?: React.ReactNode;
  customEyeIcon?: React.ReactNode;
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
  onEyePress?: () => void;
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
  emailTextInputProps,
  passwordTextInputProps,
  disableEmailValidation,
  disablePasswordValidation,
  eyeIconContainer,
  customEyeIcon,
  eyeIconStyle,
  onEyePress,
  children,
}) => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isEmailShakeVisible, setEmailShakeVisible] =
    useStateWithCallback(false);
  const [isPasswordShakeVisible, setPasswordShakeVisible] =
    useStateWithCallback(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    onEmailChange?.(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    onPasswordChange?.(text);
  };

  const handleEyePress = () => {
    setPasswordVisible((oldValue) => !oldValue);
    onEyePress?.();
  };

  const handleEmailValidation = () => {
    if (disableEmailValidation) {
      return;
    }

    if (emailValidator(email)) {
      setEmailShakeVisible(false);
      onEmailChange(email);
    } else {
      setEmailShakeVisible(true);
    }
  };

  const handlePasswordValidation = () => {
    if (disablePasswordValidation) {
      return;
    }

    if (passwordValidator(password)) {
      setPasswordShakeVisible(false);
      onPasswordChange(password);
    } else {
      setPasswordShakeVisible(true);
    }
    onPasswordChange(password);
  };

  const renderLogo = () =>
    customLogo || (
      <Image
        resizeMode="contain"
        source={logoImageSource}
        style={[styles.logoImageStyle, logoImageStyle]}
      />
    );

  const renderTextInputContainer = () => {
    const eyeIcon = isPasswordVisible
      ? require("./local-assets/eye.png")
      : require("./local-assets/eye-off.png");
    return (
      customTextInputs || (
        <View style={[styles.textInputContainer, textInputContainerStyle]}>
          <Tooltip
            isVisible={isEmailShakeVisible}
            content={
              <View
                style={{
                  padding: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  That{" "}
                  <Text style={{ fontWeight: "bold", color: "red" }}>
                    email address
                  </Text>{" "}
                  doesn't look right.
                </Text>
              </View>
            }
            contentStyle={{
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
            backgroundStyle={{ backgroundColor: "transparent" }}
            placement={Placement.TOP}
            onClose={() => setEmailShakeVisible(false)}
          >
            <TextInput
              placeholder={emailPlaceholder}
              onChangeText={handleEmailChange}
              autoCapitalize="none"
              value={email}
              {...emailTextInputProps}
            />
          </Tooltip>
          {!disablePasswordInput && (
            <View style={styles.passwordTextInputContainer}>
              <Tooltip
                isVisible={isPasswordShakeVisible}
                style={{ marginTop: 30 }}
                content={
                  <View
                    style={{
                      padding: 12,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>
                      Incorrect{" "}
                      <Text style={{ fontWeight: "bold", color: "red" }}>
                        password
                      </Text>
                    </Text>
                  </View>
                }
                contentStyle={{
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                backgroundStyle={{ backgroundColor: "transparent" }}
                placement={Placement.TOP}
                onClose={() => setPasswordShakeVisible(false)}
              >
                <TextInput
                  placeholder={passwordPlaceholder}
                  secureTextEntry={!isPasswordVisible}
                  onChangeText={handlePasswordChange}
                  enableIcon
                  iconImageSource={eyeIcon}
                  autoCapitalize="none"
                  onIconPress={handleEyePress}
                  value={password}
                  {...passwordTextInputProps}
                />
              </Tooltip>
            </View>
          )}
          {textInputChildren}
        </View>
      )
    );
  };

  const renderLoginButton = () =>
    customLoginButton || (
      <TouchableOpacity
        style={[styles.loginButtonStyle, loginButtonStyle]}
        onPress={() => {
          handleEmailValidation();
          handlePasswordValidation();
          onLoginPress?.();
        }}
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
      {children}
    </SafeAreaView>
  );
};

export default LoginScreen;
