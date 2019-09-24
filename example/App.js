import React from 'react';
import {View, StatusBar} from 'react-native';
import LoginScreen from './lib/src/components/LoginScreen';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <LoginScreen />
    </View>
  );
};

export default App;
