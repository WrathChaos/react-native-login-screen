import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import Card from "../Card/Card";
import styles, { container } from "./BottomContainer.style";

export interface IBottomContainerProps {
  signupStyle?: any;
  signupText?: string;
  emailTitle?: string;
  cardState?: boolean;
  usernameTitle?: string;
  passwordTitle?: string;
  contentComponent?: any;
  loginButtonText?: string;
  backgroundColor?: string;
  emailIconComponent?: any;
  repasswordTitle?: string;
  emailPlaceholder?: string;
  disableSettings?: boolean;
  usernameIconComponent?: any;
  passwordIconComponent?: any;
  usernamePlaceholder?: string;
  emailTextInputValue?: string;
  passwordPlaceholder?: string;
  disableSignupButton?: boolean;
  repasswordIconComponent?: any;
  repasswordPlaceholder?: string;
  usernameTextInputValue?: string;
  passwordTextInputValue?: string;
  repasswordTextInputValue?: string;
  settingsIconComponent?: React.ReactNode;
  onSignUpPress?: () => void;
  onPressSettings?: () => void;
  emailOnChangeText?: (text: string) => void;
  usernameOnChangeText?: (text: string) => void;
  passwordOnChangeText?: (text: string) => void;
  repasswordOnChangeText?: (text: string) => void;
}

const BottomContainer = (props: IBottomContainerProps) => {
  const {
    cardState,
    onSignUpPress,
    usernameTitle,
    passwordTitle,
    backgroundColor,
    onPressSettings,
    disableSettings,
    contentComponent,
    usernamePlaceholder,
    passwordPlaceholder,
    usernameOnChangeText,
    passwordOnChangeText,
    usernameIconComponent,
    passwordIconComponent,
    usernameTextInputValue,
    passwordTextInputValue,
    settingsIconComponent,
    signupText,
    signupStyle,
    disableSignupButton,
    loginButtonText,
    emailPlaceholder,
    emailOnChangeText,
    emailIconComponent,
    emailTextInputValue,
    repasswordTextInputValue,
    repasswordPlaceholder,
    repasswordOnChangeText,
    repasswordIconComponent,
  } = props;

  const renderUserIcon = () => (
    <Image
      source={require("../../local-assets/user.png")}
      style={styles.userIconImageStyle}
    />
  );

  const renderPasswordIcon = () => (
    <Image
      source={require("../../local-assets/password.png")}
      style={styles.passwordIconImageStyle}
    />
  );

  const renderSettingsIcon = () => (
    <View style={styles.settingsIconContainer}>
      <Image
        source={require("../../local-assets/settings.png")}
        style={styles.settingsIconImageStyle}
      />
    </View>
  );

  const renderLoginCards = () => {
    return (
      <View>
        <Card
          label={usernameTitle}
          value={usernameTextInputValue}
          placeholder={usernamePlaceholder}
          onChangeText={usernameOnChangeText}
          iconComponent={usernameIconComponent || renderUserIcon()}
          {...props}
        />
        <Card
          secureTextEntry
          label={passwordTitle}
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          iconComponent={passwordIconComponent || renderPasswordIcon()}
          onChangeText={(text: string) =>
            passwordOnChangeText && passwordOnChangeText(text)
          }
          {...props}
        />
      </View>
    );
  };

  const renderSignupCards = () => {
    return (
      <View>
        <Card
          value={emailTextInputValue}
          placeholder={emailPlaceholder}
          onChangeText={emailOnChangeText}
          iconComponent={emailIconComponent || renderUserIcon()}
          {...props}
        />
        <Card
          secureTextEntry
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={passwordOnChangeText}
          iconComponent={passwordIconComponent || renderPasswordIcon()}
          {...props}
        />
        <Card
          secureTextEntry
          value={repasswordTextInputValue}
          placeholder={repasswordPlaceholder}
          onChangeText={repasswordOnChangeText}
          iconComponent={repasswordIconComponent || renderPasswordIcon()}
          {...props}
        />
      </View>
    );
  };

  const renderCardContent = () => {
    return cardState ? renderLoginCards() : renderSignupCards();
  };

  return (
    <View style={container(backgroundColor, cardState)}>
      {contentComponent}
      <View style={styles.containerGlue}>{renderCardContent()}</View>
      <View style={styles.footerContainer}>
        {!disableSettings && (
          <TouchableOpacity
            onPress={onPressSettings}
            style={{ marginRight: "auto", marginLeft: 12 }}
          >
            {settingsIconComponent || renderSettingsIcon()}
          </TouchableOpacity>
        )}
        {!disableSignupButton && (
          <TouchableOpacity
            style={styles.signupButtonStyle}
            onPress={() => onSignUpPress && onSignUpPress()}
          >
            <Text style={signupStyle || styles.signupTextStyle}>
              {cardState ? signupText : loginButtonText}
            </Text>
            <View style={styles.signupButtonRightArrowContainer}>
              <Image
                source={require("../../local-assets/right-arrow.png")}
                style={styles.signupButtonRightArrowImageStyle}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

BottomContainer.defaultProps = {
  loginButtonText: "Already Have Account",
  disableSwitch: false,
  disableSettings: false,
  usernameTitle: "Username",
  passwordTitle: "Password",
  signupText: "Sign Me Up!",
  repasswordTitle: "Re-Password",
  usernamePlaceholder: "Username",
  passwordPlaceholder: "Password",
  repasswordPlaceholder: "Re-password",
};

export default BottomContainer;
