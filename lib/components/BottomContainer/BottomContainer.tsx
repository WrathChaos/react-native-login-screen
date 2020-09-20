import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import Card from "../Card/Card";
import styles, { container } from "./BottomContainer.style";

interface IBottomContainerProps {
  signupStyle?: any;
  signupText?: string;
  emailTitle?: string;
  cardState?: boolean;
  IconComponent?: any;
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
    IconComponent,
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
    signupText,
    signupStyle,
    disableSignupButton,
    loginButtonText,
    emailTitle,
    emailPlaceholder,
    emailOnChangeText,
    emailIconComponent,
    emailTextInputValue,
    repasswordTitle,
    repasswordTextInputValue,
    repasswordPlaceholder,
    repasswordOnChangeText,
    repasswordIconComponent,
  } = props;

  const renderLoginCards = () => {
    return (
      <View>
        <Card
          value={usernameTextInputValue}
          placeholder={usernamePlaceholder}
          onChangeText={usernameOnChangeText}
          iconComponent={usernameIconComponent}
          {...props}
        />
        <Card
          name="key"
          secureTextEntry
          type="FontAwesome"
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          iconComponent={passwordIconComponent}
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
          iconComponent={emailIconComponent}
          {...props}
        />
        <Card
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={passwordOnChangeText}
          iconComponent={passwordIconComponent}
          name="key"
          type="FontAwesome"
          {...props}
        />
        <Card
          value={repasswordTextInputValue}
          placeholder={repasswordPlaceholder}
          onChangeText={repasswordOnChangeText}
          iconComponent={repasswordIconComponent}
          name="key"
          type="FontAwesome"
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
            style={{ marginRight: "auto" }}
          >
            <IconComponent
              size={35}
              type="Ionicons"
              name="ios-settings"
              color="rgba(255,255,255, 0.9)"
              {...props}
            />
          </TouchableOpacity>
        )}
        {!disableSignupButton && (
          <TouchableOpacity
            style={styles.signupButtonStyle}
            onPress={() => onSignUpPress()}
          >
            <Text style={signupStyle || styles.signupTextStyle}>
              {cardState ? signupText : loginButtonText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

BottomContainer.defaultProps = {
  IconComponent: Icon,
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
  backgroundColor: "rgba(255,255,255,0.45)",
};

export default BottomContainer;
