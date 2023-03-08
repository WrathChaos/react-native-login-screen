import React from 'react';
import {View, StatusBar} from 'react-native';
// import LoginScreen from 'react-native-login-screen';
import LoginScreen from './lib/LoginScreen';
import TextInput from 'react-native-text-input-interactive';

const App = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');

  const renderSignupLoginScreen = () => (
    <LoginScreen
      logoImageSource={require('./assets/logo-example.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={setUsername}
      loginButtonText={'Create an account'}
      disableSignup
      customEyeIcon={<View />}
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
      logoImageSource={require('./assets/logo-example.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={setUsername}
      onPasswordChange={setPassword}
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
