import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const Logo = props => {
  const { example } = props;
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 25,
          fontWeight: "700"
        }}
      >
        Github
      </Text>
      <View style={{ marginLeft: 12 }}>
        <Icon name="github" type="AntDesign" size={30} color="white" />
      </View>
    </View>
  );
};

Logo.propTypes = {
  example: PropTypes.number
};

Logo.defaultProps = {
  example: 5
};

export default Logo;
