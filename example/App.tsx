import React, { useState } from "react";
import { View, StatusBar, Image, Text } from "react-native";
import LoginScreen from "react-native-login-screen";

const backgroundImage = {
  uri:
    "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
};

const App = () => {
  const [username, setUsername] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);

  const renderLogo = () => (
    <View
      style={{
        bottom: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        resizeMode="contain"
        source={require("./assets/logo-example.png")}
        style={{ height: 250, width: 250 }}
      />
      <Text
        style={{
          bottom: 32,
          color: "#fdfdfd",
          fontFamily: "Now-Bold",
          fontSize: 32,
          shadowRadius: 3,
          shadowOpacity: 0.7,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        LOGO
      </Text>
    </View>
  );
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/*
       * One Line of code and get the whole login screen :)
       * <LoginScreen />
       */}
      <LoginScreen
        source={backgroundImage}
        spinnerEnable
        spinnerVisibility={spinnerVisibility}
        logoComponent={renderLogo()}
        labelTextStyle={{
          color: "#adadad",
          fontFamily: "Now-Bold",
        }}
        logoTextStyle={{
          fontSize: 27,
          color: "#fdfdfd",
          fontFamily: "Now-Black",
        }}
        loginButtonTextStyle={{
          color: "#fdfdfd",
          fontFamily: "Now-Bold",
        }}
        textStyle={{
          color: "#757575",
          fontFamily: "Now-Regular",
        }}
        signupStyle={{
          color: "#fdfdfd",
          fontSize: 16,
          fontFamily: "Now-Bold",
        }}
        usernameOnChangeText={(username: string) =>
          console.log("Username: ", username)
        }
        onPressSettings={() => alert("Settings Button is pressed")}
        passwordOnChangeText={(password: string) =>
          console.log("Password: ", password)
        }
        onPressLogin={() => {
          setSpinnerVisibility(true);
          setTimeout(() => {
            setSpinnerVisibility(false);
          }, 2000);
        }}
        onPressSignup={() => {
          console.log("onPressSignUp is pressed");
        }}
      />
    </View>
  );
};

export default App;
