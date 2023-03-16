import * as React from 'react';
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
  LayoutAnimation,
} from 'react-native';
import TextInput, {
  IInteractiveTextInputProps,
} from 'react-native-text-input-interactive';
/**
 * ? Local Imports
 */
import styles from './LoginScreen.style';
import SocialButton from './components/social-button/SocialButton';
import useStateWithCallback from './helpers/useStateWithCallback';
import emailValidator from './helpers/emailValidator';
import passwordValidator from './helpers/passwordValidator';
import Tooltip from './components/tooltip/Tooltip';

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
  enablePasswordValidation?: boolean;
  disableEmailTooltip?: boolean;
  disablePasswordTooltip?: boolean;
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
  TouchableComponent?: any;
  passwordContentTooltip?: React.ReactNode;
  emailContentTooltip?: React.ReactNode;
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
  signupText = 'Create an account',
  disableDivider,
  logoImageSource,
  onLoginPress,
  disableSocialButtons,
  disablePasswordInput = false,
  loginButtonText = 'Login',
  onSignupPress,
  onEmailChange,
  onPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = 'Email',
  passwordPlaceholder = 'Password',
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
  disableEmailValidation = false,
  enablePasswordValidation = false,
  disableEmailTooltip = false,
  disablePasswordTooltip = false,
  emailContentTooltip,
  passwordContentTooltip,
  TouchableComponent = TouchableOpacity,
  onEyePress,
  children,
}) => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isEmailTooltipVisible, setEmailTooltipVisible] =
    useStateWithCallback(false);
  const [isPasswordTooltipVisible, setPasswordTooltipVisible] =
    useStateWithCallback(false);

  const handleEmailChange = (text: string) => {
    isEmailTooltipVisible && setEmailTooltipVisible(false);
    setEmail(text);
    onEmailChange?.(text);
  };

  const handlePasswordChange = (text: string) => {
    isPasswordTooltipVisible && setPasswordTooltipVisible(false);
    setPassword(text);
    onPasswordChange?.(text);
  };

  const handleEyePress = () => {
    setPasswordVisible(oldValue => !oldValue);
    onEyePress?.();
  };

  const handleEmailValidation = () => {
    if (disableEmailValidation) {
      handlePasswordValidation();
      onEmailChange(email);
      return;
    }

    if (emailValidator(email)) {
      !disableEmailTooltip && setEmailTooltipVisible(false);
      handlePasswordValidation();
      onEmailChange(email);
      return;
    } else {
      LayoutAnimation.spring();
      !disableEmailTooltip && setEmailTooltipVisible(true);
      onEmailChange(email);
    }
  };

  const handlePasswordValidation = () => {
    if (isEmailTooltipVisible) {
      return;
    }
    if (!enablePasswordValidation) {
      onPasswordChange(password);
      return;
    }
    if (enablePasswordValidation && passwordValidator(password)) {
      !disablePasswordTooltip && setPasswordTooltipVisible(false);
      onPasswordChange(password);
      return;
    } else {
      LayoutAnimation.spring();
      !disableEmailTooltip && setEmailTooltipVisible(false);
      !disablePasswordTooltip && setPasswordTooltipVisible(true);
      onPasswordChange(password);
    }
  };

  const renderLogo = () =>
    customLogo || (
      <Image
        resizeMode="contain"
        source={logoImageSource}
        style={[styles.logoImageStyle, logoImageStyle]}
      />
    );

  const renderEmailInput = () => {
    const tooltipContent = () =>
      emailContentTooltip || (
        <View style={styles.emailTooltipContainer}>
          <Text style={styles.emailTooltipTextStyle}>
            That{' '}
            <Text style={styles.emailTooltipRedTextStyle}>email address</Text>{' '}
            doesn't look right
          </Text>
        </View>
      );
    return (
      <View style={styles.emailTextInputContainer}>
        <>
          {!disableEmailTooltip && isEmailTooltipVisible && (
            <Tooltip>{tooltipContent()}</Tooltip>
          )}
          <TextInput
            placeholder={emailPlaceholder}
            onChangeText={handleEmailChange}
            autoCapitalize="none"
            onFocus={() => setEmailTooltipVisible(false)}
            {...emailTextInputProps}
          />
        </>
      </View>
    );
  };

  const renderPasswordInput = () => {
    const eyeIcon = isPasswordVisible
      ? require('./local-assets/eye.png')
      : require('./local-assets/eye-off.png');

    const renderTooltipContent = () =>
      passwordContentTooltip || (
        <View style={styles.passwordTooltipContainer}>
          <Text style={styles.passwordTooltipTextStyle}>
            Incorrect{' '}
            <Text style={styles.passwordTooltipRedTextStyle}>password</Text>
          </Text>
        </View>
      );

    return (
      !disablePasswordInput && (
        <View style={styles.passwordTextInputContainer}>
          {!disablePasswordTooltip && isPasswordTooltipVisible && (
            <Tooltip>{renderTooltipContent()}</Tooltip>
          )}
          <TextInput
            placeholder={passwordPlaceholder}
            secureTextEntry={!isPasswordVisible}
            onChangeText={handlePasswordChange}
            enableIcon
            iconImageSource={eyeIcon}
            autoCapitalize="none"
            onFocus={() => {
              setPasswordTooltipVisible(false);
            }}
            onIconPress={handleEyePress}
            {...passwordTextInputProps}
          />
        </View>
      )
    );
  };

  const renderTextInputContainer = () => {
    return (
      customTextInputs || (
        <View style={[styles.textInputContainer, textInputContainerStyle]}>
          {renderEmailInput()}
          {renderPasswordInput()}
          {textInputChildren}
        </View>
      )
    );
  };

  const renderLoginButton = () =>
    customLoginButton || (
      <TouchableComponent
        style={[styles.loginButtonStyle, loginButtonStyle]}
        onPress={() => {
          handleEmailValidation();
          onLoginPress?.();
        }}>
        <Text style={[styles.loginTextStyle, loginTextStyle]}>
          {loginButtonText}
        </Text>
      </TouchableComponent>
    );

  const renderSignUp = () =>
    customSignupButton ||
    (!disableSignup && (
      <TouchableComponent
        style={[styles.signupStyle, signupStyle]}
        onPress={onSignupPress}>
        <Text style={[styles.signupTextStyle, signupTextStyle]}>
          {signupText}
        </Text>
      </TouchableComponent>
    ));

  const renderDivider = () =>
    customDivider ||
    (!disableDivider && <View style={[styles.dividerStyle, dividerStyle]} />);

  const renderDefaultSocialLoginButtons = () =>
    !disableSocialButtons ? (
      <>
        <SocialButton
          text="Continue with Facebook"
          TouchableComponent={TouchableComponent}
          textStyle={styles.facebookSocialButtonTextStyle}
          onPress={onFacebookPress}
        />
        <SocialButton
          text="Continue with Twitter"
          style={styles.socialButtonStyle}
          TouchableComponent={TouchableComponent}
          textStyle={styles.twitterSocialButtonTextStyle}
          imageSource={require('./local-assets/twitter.png')}
          onPress={onTwitterPress}
        />
        <SocialButton
          text="Continue with Apple"
          style={styles.socialButtonStyle}
          TouchableComponent={TouchableComponent}
          imageSource={require('./local-assets/apple.png')}
          onPress={onApplePress}
        />
        <SocialButton
          text="Continue with Discord"
          style={styles.socialButtonStyle}
          TouchableComponent={TouchableComponent}
          textStyle={styles.discordSocialButtonTextStyle}
          imageSource={require('./local-assets/discord.png')}
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
