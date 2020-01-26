import React from "react";
import PropTypes from "prop-types";
import { Switch, Text, View, TouchableOpacity } from "react-native";
import Card from "../Card/Card";
import Icon from "react-native-dynamic-vector-icons";
import styles, { container } from "./BottomContainer.style";

const BottomContainer = props => {
  const {
    switchText,
    switchValue,
    disableSwitch,
    IconComponent,
    backgroundColor,
    switchTextStyle,
    onPressSettings,
    disableSettings,
    onSwitchValueChange,
    usernameOnChangeText,
    passwordOnChangeText,
    usernameIconComponent,
    passwordIconComponent,
    usernameTextInputValue,
    passwordTextInputValue
  } = props;
  return (
    <View style={container(backgroundColor)}>
      <View style={styles.containerGlue}>
        <Card
          value={usernameTextInputValue}
          onChangeText={usernameOnChangeText}
          iconComponent={usernameIconComponent}
          {...props}
        />
        <Card
          name="key"
          secureTextEntry
          title="Password"
          type="FontAwesome"
          value={passwordTextInputValue}
          placeholder="Your Password"
          onChangeText={text => passwordOnChangeText(text)}
          iconComponent={passwordIconComponent}
          {...props}
        />
      </View>
      <View style={styles.footerContainer}>
        {!disableSettings && (
          <TouchableOpacity
            style={{ marginRight: "auto", zIndex: 999 }}
            onPress={onPressSettings}
          >
            <IconComponent
              name="ios-settings"
              type="Ionicons"
              color="rgba(255,255,255, 0.9)"
              size={35}
              {...props}
            />
          </TouchableOpacity>
        )}
        {!disableSwitch && (
          <View style={styles.rememberMeContainer}>
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
        )}
      </View>
    </View>
  );
};

BottomContainer.propTypes = {
  switchText: PropTypes.string,
  disableSwitch: PropTypes.bool,
  disableSettings: PropTypes.bool,
  backgroundColor: PropTypes.string
};

BottomContainer.defaultProps = {
  IconComponent: Icon,
  disableSwitch: false,
  disableSettings: false,
  switchText: "Remember me",
  backgroundColor: "rgba(255,255,255,0.45)"
};

export default BottomContainer;
