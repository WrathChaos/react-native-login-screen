import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import LoginScreen, {SocialButton} from './build/dist/index';

const App = () => {
  const [username, setUsername] = useState(null);
  const [switchValue, setSwitchValue] = useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <LoginScreen
        logoImageSource={require('./assets/logo-example.png')}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
      />
    </View>
  );
};

export default App;
