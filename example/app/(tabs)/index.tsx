import React from 'react';
import {View, StatusBar, UIManager, Platform} from 'react-native';
import LoginScreen from 'react-native-login-screen';
import TextInput from 'react-native-text-input-interactive';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HomeScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');

  const renderSignupLoginScreen = () => (
    <LoginScreen
      logoImageSource={require('../../assets/logo-example.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={setUsername}
      loginButtonText={'Create an account'}
      disableSignup
      textInputChildren={
        <View style={{marginTop: 16}}>
          <TextInput
            placeholder="Re-Password"
            secureTextEntry
            onChangeText={setRepassword}
          />
        </View>
      }
      onPasswordChange={setPassword}
    />
  );

  const renderLoginScreen = () => (
    <LoginScreen
      logoImageSource={require('../../assets/logo-example.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={setUsername}
      onPasswordChange={setPassword}
      enablePasswordValidation
    />
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      {renderSignupLoginScreen()}
      {/*{renderLoginScreen()}*/}
    </View>
  );
};

export default HomeScreen;
