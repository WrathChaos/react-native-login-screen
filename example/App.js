import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import LoginScreen from "react-native-login-screen";

const bgImage = {
  uri:
    "https://images.unsplash.com/photo-1569685915250-01b72923ca1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
};
const App = () => {
  const [username, setUsername] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/*
       * One Line of code and get the whole login screen :)
       * <LoginScreen />
       *
       */}
      <LoginScreen
        spinnerEnable
        spinnerVisibility
        source={bgImage}
        switchValue={switchValue}
        loginButtonBackgroundColor="#a2a5a9"
        onPressLogin={() => alert("Login Button is pressed")}
        onPressSettings={() => alert("Settings Button is pressed")}
        usernameOnChangeText={username => setUsername(username)}
        passwordOnChangeText={password => console.log("Password: ", password)}
        onSwitchValueChange={switchValue => {
          setSwitchValue(switchValue);
        }}
      />
    </View>
  );
};

export default App;
