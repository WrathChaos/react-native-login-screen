import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import Card from "../Card/Card";

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
      <View style={{ marginTop: 12 }}>
        <Card />
        <Card />
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
