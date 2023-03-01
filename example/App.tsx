import React from 'react';
import {View, StatusBar} from 'react-native';
// import LoginScreen from 'react-native-login-screen';
import LoginScreen from './build/dist/LoginScreen';
import TextInput from 'react-native-text-input-interactive';

const App = () => {
  let username = '';

  const renderSignupLoginScreen = () => (
    <LoginScreen
      logoImageSource={require('./assets/logo-example.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={(value: string) => {
        username = value;
        console.log('username: ', username);
      }}
      loginButtonText={'Create an account'}
      disableSignup
      customEyeIcon={<View />}
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
  );

  const renderLoginScreen = () => (
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
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      {/*{renderSignupLoginScreen()}*/}
      {renderLoginScreen()}
    </View>
  );
};

export default App;
