import React from "react";
import PropTypes from "prop-types";
import { Switch, Text, View } from "react-native";
import Card from "../Card/Card";
import styles, { container } from "./BottomContainer.style";

const BottomContainer = props => {
  const {
    switchText,
    switchValue,
    passwordTitle,
    usernameTitle,
    backgroundColor,
    switchTextStyle,
    usernamePlaceholder,
    passwordPlaceholder,
    onSwitchValueChange,
    usernameOnChangeText,
    passwordOnChangeText,
    usernameIconComponent,
    passwordIconComponent,
    usernameTextinputValue,
    passwordTextinputValue
  } = props;
  return (
    <View style={container(backgroundColor)}>
      <View style={styles.containerGlue}>
        <Card
          title={usernameTitle}
          value={usernameTextinputValue}
          placeholder={usernamePlaceholder}
          onChangeText={usernameOnChangeText}
          iconComponent={usernameIconComponent}
          {...props}
        />
        <Card
          name="key"
          secureTextEntry
          title="Password"
          type="FontAwesome"
          title={passwordTitle}
          value={passwordTextinputValue}
          placeholder={passwordPlaceholder}
          onChangeText={text => passwordOnChangeText(text)}
          iconComponent={passwordIconComponent}
          {...props}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={switchTextStyle || styles.switchTextStyle}>
          {switchText}
        </Text>
        <Switch
          value={switchValue}
          ios_backgroundColor="black"
          onValueChange={onSwitchValueChange}
          trackColor={{ true: "default", false: "black" }}
        />
      </View>
    </View>
  );
};

BottomContainer.propTypes = {
  switchText: PropTypes.string,
  backgroundColor: PropTypes.string
};

BottomContainer.defaultProps = {
  switchText: "Remember me",
  usernameTitle: "Username",
  passwordTitle: "Password",
  usernamePlaceholder: "Your Username",
  passwordPlaceholder: "Your Password",
  backgroundColor: "rgba(255,255,255,0.45)"
};

export default BottomContainer;
