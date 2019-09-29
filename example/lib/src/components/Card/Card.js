import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import TextInput from "react-native-improved-text-input";
import styles, { _textStyle, _textInputStyle } from "./Card.style";

const Card = props => {
  const {
    title,
    value,
    textStyle,
    textColor,
    titleStyle,
    titleColor,
    placeholder,
    onChangeText,
    selectionColor
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerGlue}>
        <View style={{ width: 35 }}>
          <Icon
            name="user"
            type="AntDesign"
            size={30}
            color="black"
            {...props}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={titleStyle || _textStyle(titleColor)}>{title}</Text>
          <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#ccc"
            onChangeText={onChangeText}
            selectionColor={selectionColor}
            style={textStyle || _textInputStyle(textColor)}
          />
        </View>
      </View>
    </View>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
  titleColor: PropTypes.string,
  placeholder: PropTypes.string,
  selectionColor: PropTypes.string
};

Card.defaultProps = {
  title: "User Name",
  textColor: "black",
  titleColor: "#c7c5c6",
  placeholder: "John Doe",
  selectionColor: "#757575"
};

export default Card;
