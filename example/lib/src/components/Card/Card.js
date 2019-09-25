import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import TextInput from "react-native-improved-text-input";

const Card = props => {
  const { example } = props;
  return (
    <View
      style={{
        margin: 8,
        height: 75,
        width: "95%",
        marginTop: 0,
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
          style={{
            flexDirection: "column",
            marginLeft: 12,
            width: "90%"
          }}
        >
          <Text style={{ color: "#c7c5c6", fontSize: 12, fontWeight: "700" }}>
            User Name
          </Text>
          <TextInput
            placeholderStyle={{
              color: "black"
            }}
            selectionColor="#ccc"
            style={{ marginTop: 3, fontSize: 16, fontWeight: "800" }}
            placeholder="John Doe"
          />
        </View>
      </View>
    </View>
  );
};

Card.propTypes = {
  example: PropTypes.number
};

Card.defaultProps = {
  example: 5
};

export default Card;
