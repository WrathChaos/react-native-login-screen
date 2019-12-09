import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import LoginScreen from "react-native-login-screen";

const bgImage =
  "https://images.unsplash.com/photo-1569685915250-01b72923ca1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
const App = () => {
  const [username, setUsername] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);

  loginPressed = () => {
    // login button is pressed
    alert("Login Pressed");
  };

  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/* <LoginScreen /> */}
      <LoginScreen
        source={{
          uri: bgImage
        }}
        onPress={loginPressed}
        loginButtonBackgroundColor="#a2a5a9"
        onSwitchValueChange={switchValue => {
          setSwitchValue(switchValue);
        }}
        switchValue={switchValue}
        usernameOnChangeText={username => setUsername(username)}
        passwordOnChangeText={password => console.log("Password: ", password)}
      />
    </View>
  );
};

export default App;
