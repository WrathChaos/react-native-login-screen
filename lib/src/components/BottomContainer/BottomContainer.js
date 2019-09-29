import React from "react";
import PropTypes from "prop-types";
import { Switch, Text, View } from "react-native";
import Card from "../Card/Card";
import styles, { container } from "./BottomContainer.style";

const BottomContainer = props => {
  const {
    switchText,
    switchValue,
    backgroundColor,
    switchTextStyle,
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
          value={usernameTextinputValue}
          onChangeText={usernameOnChangeText}
          iconComponent={usernameIconComponent}
          {...props}
        />
        <Card
          name="key"
          secureTextEntry
          title="Password"
          type="FontAwesome"
          value={passwordTextinputValue}
          placeholder="Your Password"
          onChangeText={passwordOnChangeText}
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
          {...props}
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
  backgroundColor: "rgba(255,255,255,0.45)"
};

export default BottomContainer;
