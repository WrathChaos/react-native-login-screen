import React from 'react';
import {View, StatusBar} from 'react-native';
// import LoginScreen from 'react-native-login-screen';
import LoginScreen from './lib/LoginScreen';
import TextInput from 'react-native-text-input-interactive';

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
        textInputChildren={
          <View style={{marginTop: 16}}>
            <TextInput
              placeholder="Re-Password"
              secureTextEntry
              onChangeText={(value: string) => {}}
            />
          </View>
        }
        onPasswordChange={(password: string) => {}}
      />
    </View>
  );
};

export default App;
