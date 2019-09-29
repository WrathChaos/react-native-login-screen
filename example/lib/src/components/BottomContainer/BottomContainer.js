import React from "react";
import PropTypes from "prop-types";
import { Switch, Text, View, Dimensions } from "react-native";
import Card from "../Card/Card";

const { width, height } = Dimensions.get("window");

const BottomContainer = props => {
  const {
    switchText,
    switchValue,
    onSwitchValueChange,
    usernameOnChangeText,
    passwordOnChangeText,
    usernameTextinputValue,
    passwordTextinputValue
  } = props;
  return (
    <View
      style={{
        height: 250,
        bottom: 100,
        borderRadius: 24,
        width: width * 0.9,
        alignSelf: "center",
        position: "absolute",
        backgroundColor: "rgba(255,255,255,0.45)"
      }}
    >
      <View style={{ marginTop: 12 }}>
        <Card
          {...props}
          value={usernameTextinputValue}
          onChangeText={usernameOnChangeText}
        />
        <Card
          name="key"
          title="Password"
          type="FontAwesome"
          value={passwordTextinputValue}
          placeholder="Your Password is here"
          onChangeText={passwordOnChangeText}
          {...props}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 24,
          right: 32,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            marginRight: 8,
            fontWeight: "700",
            fontFamily: "Montserrat-SemiBold"
          }}
        >
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
  switchText: PropTypes.string
};

BottomContainer.defaultProps = {
  switchText: "Remember me"
};

export default BottomContainer;
