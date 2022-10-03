import React from 'react';
import {View, StatusBar} from 'react-native';
import LoginScreen from 'react-native-login-screen';

const App = () => {
  let username = '';

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <LoginScreen
        logoImageSource={require('./assets/logo-example.png')}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={(value: string) => {
          username = value;
          console.log('username: ', username);
        }}
        onPasswordChange={(password: string) => {}}
      />
    </View>
  );
};

export default App;
