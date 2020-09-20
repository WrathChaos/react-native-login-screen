import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import Card from "../Card/Card";
import styles, { container } from "./BottomContainer.style";

interface IBottomContainerProps {
  cardState: boolean;
  onPressSignup: () => void;
  IconComponent: any;
  usernameTitle: string;
  passwordTitle: string;
  backgroundColor: string;
  onPressSettings: () => void;
  disableSettings: boolean;
  contentComponent: any;
  usernamePlaceholder: string;
  passwordPlaceholder: string;
  usernameOnChangeText: (text: string) => void;
  passwordOnChangeText: (text: string) => void;
  usernameIconComponent: any;
  passwordIconComponent: any;
  usernameTextInputValue: string;
  passwordTextInputValue: string;
  signupText: string;
  signupStyle: any;
  disableSignupButton: boolean;
  loginButtonText: string;
  emailTitle: string;
  emailPlaceholder: string;
  emailOnChangeText: (text: string) => void;
  emailIconComponent: any;
  emailTextInputValue: string;
  repasswordTitle: string;
  repasswordTextInputValue: string;
  repasswordPlaceholder: string;
  repasswordOnChangeText: (text: string) => void;
  repasswordIconComponent: any;
}

const BottomContainer = (props: IBottomContainerProps) => {
  const {
    cardState,
    onPressSignup,
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
          title={usernameTitle}
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
          title={passwordTitle}
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={(text) => passwordOnChangeText(text)}
          iconComponent={passwordIconComponent}
          {...props}
        />
      </View>
    );
  };

  const renderSignupCards = () => {
    return (
      <View>
        <Card
          title={emailTitle}
          value={emailTextInputValue}
          placeholder={emailPlaceholder}
          onChangeText={emailOnChangeText}
          iconComponent={emailIconComponent}
          {...props}
        />
        <Card
          title={passwordTitle}
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={passwordOnChangeText}
          iconComponent={passwordIconComponent}
          name="key"
          type="FontAwesome"
          {...props}
        />
        <Card
          title={repasswordTitle}
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
            onPress={() => onPressSignup()}
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
