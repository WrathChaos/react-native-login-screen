import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions, TextInput } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const { width, height } = Dimensions.get("window");

const BottomContainer = props => {
  const { example } = props;
  return (
    <View
      style={{
        height: 250,
        bottom: 100,
        borderRadius: 24,
        width: width * 0.9,
        alignSelf: "center",
        position: "absolute",
        backgroundColor: "rgba(255,255,255,0.3)"
      }}
    >
      <View
        style={{
          margin: 8,
          height: 75,
          width: "95%",
          borderRadius: 24,
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            marginLeft: 24,
            marginRight: 24,
            flexDirection: "row"
          }}
        >
          <Icon name="user" type="AntDesign" size={30} color="black" />
          <View
            style={{ flexDirection: "column", marginLeft: 12, width: "90%" }}
          >
            <Text style={{ color: "#c7c5c6", fontSize: 12, fontWeight: "700" }}>
              User Name
            </Text>
            <TextInput
              style={{ marginTop: 3, fontSize: 18 }}
              placeholderTextColor="black"
              placeholderStyle={{ fontSize: 12 }}
              placeholder="John Doe"
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};

BottomContainer.propTypes = {
  example: PropTypes.number
};

BottomContainer.defaultProps = {
  example: 5
};

export default BottomContainer;
