import React, { useState } from "react";
import { View, StatusBar, Alert } from "react-native";
import LoginScreen from "react-native-login-screen";

const App = () => {
  const [username, setUsername] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);

  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/*
       * One Line of code and get the whole login screen :)
       * <LoginScreen />
       */}
      <LoginScreen
        spinnerEnable
        spinnerVisibility={spinnerVisibility}
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
          fontFamily: "Now-Bold",
        }}
        usernameOnChangeText={(username) => console.log("Username: ", username)}
        onPressSettings={() => alert("Settings Button is pressed")}
        passwordOnChangeText={(password) => console.log("Password: ", password)}
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
