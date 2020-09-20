import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { TextField } from "react-native-material-textfield";
/**
 * ? Local Imports
 */
import styles, { _textStyle, _textInputStyle } from "./Card.style";

export interface ICardProps {
  iconComponent?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const Card = (props: ICardProps) => {
  const { placeholder, onChangeText, iconComponent } = props;
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
          <TextField
            {...props}
            label={placeholder}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  );
};

Card.defaultProps = {
  placeholder: "John Doe",
};

export default Card;
