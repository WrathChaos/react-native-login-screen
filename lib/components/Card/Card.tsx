import * as React from "react";
import { View } from "react-native";
import { TextField } from "react-native-material-textfield";
/**
 * ? Local Imports
 */
import styles, { _textStyle, _textInputStyle } from "./Card.style";

export interface ICardProps {
  value?: string;
  iconComponent?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

const Card = (props: ICardProps) => {
  const {
    value,
    placeholder,
    onChangeText,
    secureTextEntry,
    iconComponent,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerGlue}>
        <View style={styles.iconContainer}>{iconComponent}</View>
        <View style={styles.textContainer}>
          <TextField
            {...props}
            value={value}
            label={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    </View>
  );
};

Card.defaultProps = {
  placeholder: "Username",
};

export default Card;
