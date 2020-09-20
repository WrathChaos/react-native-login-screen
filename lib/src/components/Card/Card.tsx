import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import TextInput from "react-native-improved-text-input";
/**
 * ? Local Imports
 */
import styles, { _textStyle, _textInputStyle } from "./Card.style";

export interface ICardProps {
  title: string;
  textStyle: any;
  titleStyle: any;
  textColor: string;
  iconComponent: any;
  titleColor: string;
  placeholder: string;
  selectionColor: string;
  onChangeText: (text: string) => void;
}

const Card = (props: ICardProps) => {
  const {
    title,
    textStyle,
    textColor,
    titleStyle,
    titleColor,
    placeholder,
    onChangeText,
    selectionColor,
    iconComponent,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerGlue}>
        <View style={{ width: 35, justifyContent: "center" }}>
          {iconComponent || (
            <Icon
              size={30}
              name="user-o"
              color="black"
              type="FontAwesome"
              {...props}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={titleStyle || _textStyle(titleColor)}>{title}</Text>
          <TextInput
            {...props}
            placeholderTextColor="#ccc"
            placeholder={placeholder}
            selectionColor={selectionColor}
            style={textStyle || _textInputStyle(textColor)}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  );
};

Card.defaultProps = {
  title: "User Name",
  textColor: "black",
  titleColor: "#c7c5c6",
  placeholder: "John Doe",
  selectionColor: "#757575",
};

export default Card;
