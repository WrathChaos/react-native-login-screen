import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Card from "../Card/Card";
import Icon from "react-native-dynamic-vector-icons";
import styles, { container } from "./BottomContainer.style";

const BottomContainer = (props) => {
  const capitalizeFirstLetter = (str) => {
    return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
  };

  const [cardState, setCardState] = useState(true);
  const {
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

    loginButtonText,
    signupText,
    signupStyle,
    disableSignupButton,
    emailTitle,
    emailTextInputValue,
    emailPlaceholder,
    emailOnChangeText,
    emailIconComponent,
    repasswordTitle,
    repasswordTextInputValue,
    repasswordPlaceholder,
    repasswordOnChangeText,
    repasswordIconComponent,
  } = props;

  renderLoginCards = () => {
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

  renderSignupCards = () => {
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

  renderCardContent = () => {
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
            onPress={() => {
              setCardState(!cardState);
              onPressSignup && onPressSignup();
            }}
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

BottomContainer.propTypes = {
  signupText: PropTypes.string,
  disableSwitch: PropTypes.bool,
  passwordTitle: PropTypes.string,
  usernameTitle: PropTypes.string,
  disableSettings: PropTypes.bool,
  backgroundColor: PropTypes.string,
  usernamePlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  repasswordPlaceholder: PropTypes.string,
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
