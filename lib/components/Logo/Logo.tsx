import * as React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import styles from "./Logo.style";

export interface ILogoProps {
  logoText?: string;
  logoComponent?: any;
  logoTextStyle?: any;
}

const Logo = (props: ILogoProps) => {
  const { logoText, logoComponent, logoTextStyle } = props;
  return (
    <View style={styles.container}>
      {logoComponent || (
        <View style={styles.row}>
          <Text style={logoTextStyle || styles.textStyle}>{logoText}</Text>
          <View style={styles.iconStyle}>
            <Icon
              size={30}
              name="github"
              color="white"
              type="AntDesign"
              {...props}
            />
          </View>
        </View>
      )}
    </View>
  );
};

Logo.defaultProps = {
  logoText: "GITHUB",
};

export default Logo;
