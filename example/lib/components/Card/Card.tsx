import * as React from "react";
import { Text, View, TextInput } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from "react-native-material-textfield";
/**
 * ? Local Imports
 */
import styles, { _textStyle, _textInputStyle } from "./Card.style";

export interface ICardProps {
  title?: string;
  textStyle?: any;
  titleStyle?: any;
  textColor?: string;
  iconComponent?: any;
  titleColor?: string;
  placeholder?: string;
  selectionColor?: string;
  onChangeText?: (text: string) => void;
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
        <View style={styles.iconContainer}>
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
          {/* <Text style={[_textStyle(titleColor), titleStyle]}>{title}</Text> */}
          <TextField
            label={placeholder}
            keyboardType="phone-pad"
            // formatText={this.formatText}
            // onSubmitEditing={this.onSubmit}
            // ref={this.fieldRef}
          />
          {/* <TextInput
            {...props}
            placeholderTextColor="#ccc"
            placeholder={placeholder}
            selectionColor={selectionColor}
            style={[_textInputStyle(textColor), textStyle]}
            onChangeText={onChangeText}
          /> */}
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
