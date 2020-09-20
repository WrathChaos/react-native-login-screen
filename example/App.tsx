import React, { useState } from "react";
import { View, StatusBar } from "react-native";
// import LoginScreen from "react-native-login-screen";
import LoginScreen from "./lib/LoginScreen";

const bgImage = {
  uri:
    "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
};
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
        titleStyle={{
          fontSize: 12,
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
          fontFamily: "Now-Regular",
        }}
        textStyle={{
          color: "#757575",
          fontFamily: "Now-Regular",
        }}
        signupStyle={{
          color: "#fdfdfd",
          fontFamily: "Now-Regular",
        }}
        onPressLogin={() => {
          setSpinnerVisibility(true);
          setTimeout(() => {
            setSpinnerVisibility(false);
          }, 2000);
        }}
        usernameOnChangeText={(username) => setUsername(username)}
        onPressSettings={() => alert("Settings Button is pressed")}
        passwordOnChangeText={(password) => console.log("Password: ", password)}
      />
    </View>
  );
};

export default App;
