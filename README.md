<img alt="React Native Login Screen" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-login-screen)

[![One Line of Code to Plug & Play | Fully Customizable Beautiful React Native Login Screen](https://img.shields.io/badge/-One%20Line%20of%20Code%20to%20Plug%20%26%20Play%20%7C%20Fully%20Customizable%20Beautiful%20React%20Native%20Login%20Screen-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-login-screen)

[![npm version](https://img.shields.io/npm/v/react-native-login-screen.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-login-screen)
[![npm](https://img.shields.io/npm/dt/react-native-login-screen.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-login-screen)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <img alt="React Native Login Screen" src="assets/Screenshots/react-native-login-screen.gif"  height="788" width="390" />
</p>

# 🥳 Version 5

Version 5 with the completely new UI

- Whole new UI / UX Design 😍
- Built-in Email Validation 📧
- Built-in Password Validation 🔒
- Built-in Email Tooltip 📧
- Built-in Password Tooltip 🔒
- Built-in Show/Hide Password Feature 👀
- Fully Customizable 🎨
- Better Code Quality 🚀
- Ready to use `SocialButton` Component
- `Only ONE dependency` is needed

## Installation

Add the dependency:

```bash
npm i react-native-login-screen
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```bash
npm i react-native-text-input-interactive
```

```
"react-native-text-input-interactive": ">= 0.1.3"
```

## Import

```js
import LoginScreen from "react-native-login-screen";
```

# Usage

```tsx
const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');

<LoginScreen
  logoImageSource={require('./assets/logo-example.png')}
  onLoginPress={() => {}}
  onSignupPress={() => {}}
  onEmailChange={setUsername}
  onPasswordChange={setPassword}
  enablePasswordValidation
/>
```

## Basic Signup Screen Usage

```tsx
<LoginScreen
  logoImageSource={require('./assets/logo-example.png')}
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
```

## Usage with Social Button

You can put any `children` into the LoginScreen, I recommend you to use `SocialButton`.

## Configuration - Props

### Fundamentals

| Property         |   Type   |  Default  | Description                                                   |
|------------------|:--------:|:---------:|---------------------------------------------------------------|
| onLoginPress     | function | undefined | set your own function when the `login button` is pressed      |
| onSignupPress    | function | undefined | set your own function when the `Create an account` is pressed |
| onEmailChange    | function | undefined | set your own function when `email` textinput has a change     |
| onPasswordChange | function | undefined | set your own function when `password` textinput has a change  |

### Customizations (Optional)

| Property                |    Type    |       Default       | Description                                             |
|-------------------------|:----------:|:-------------------:|---------------------------------------------------------|
| onEyePress              |  function  |      undefined      | set your own function when `eye icon` button is pressed |
| signupText              |   string   | "Create an account" | change the sign up text                                 |
| disableSignup           |  boolean   |        false        | disable the signup if you do not want to use it         |
| disableDivider          |  boolean   |        false        | disable the divider if you do not want to use it        |
| disableSocialButtons    |  boolean   |        false        | disable the all social buttons                          |
| disablePasswordInput    |  boolean   |        false        | disable the password text input                         |
| disableEmailValidation  |  boolean   |        false        | disable built-in email validation                       |
| disableEmailTooltip     |  boolean   |        false        | enable built-in password validation                     |
| disablePasswordTooltip  |  boolean   |        false        | disable built-in email tooltip                          |
| disableEmailTooltip     |  boolean   |        false        | disable built-in password tooltip                       |
| emailPlaceholder        |   string   |       "Email"       | change email placeholder text                           |
| passwordPlaceholder     |   string   |     "Password"      | change password placeholder text                        |
| loginButtonText         |   string   |       "Login"       | change login button's text                              |
| style                   | ViewStyle  |       default       | set/override the default style for the container        |
| dividerStyle            | ViewStyle  |       default       | set/override the default divider style                  |
| logoImageStyle          | ImageStyle |       default       | set/override the default image style                    |
| textInputContainerStyle | ViewStyle  |       default       | set/override the default text input container style     |
| loginButtonStyle        | ViewStyle  |       default       | set/override the default login button style             |
| loginTextStyle          | TextStyle  |       default       | set/override the default login text style               |
| signupStyle             | ViewStyle  |       default       | set/override the default signup button style            |
| signupTextStyle         | TextStyle  |       default       | set/override the default signup text style              |
| signupTextStyle         | TextStyle  |       default       | set/override the default signup text style              |
| passwordContentTooltip  | Component  |       default       | set on your own **tooltip content** for password        |
| emailContentTooltip     | Component  |       default       | set on your own **tooltip content** for email           |

### Advanced Customizations (Optional)

| Property                 |                                                          Type                                                           |     Default      | Description                                                            |
|--------------------------|:-----------------------------------------------------------------------------------------------------------------------:|:----------------:|------------------------------------------------------------------------|
| customTextInputs         |                                                        Component                                                        |     default      | set your own custom text inputs instead of built-in ones               |
| textInputChildren        |                                                        Component                                                        |     default      | set your own EXTRA custom text inputs with the current ones            |
| customLogo               |                                                        Component                                                        |     default      | set your own logo                                                      |
| customLoginButton        |                                                        Component                                                        |     default      | set your login button                                                  |
| customSignupButton       |                                                        Component                                                        |     default      | set your sign up button                                                |
| customDivider            |                                                        Component                                                        |     default      | set your divider                                                       |
| customLoginButton        |                                                        Component                                                        |     default      | set on your own components instead of default **login button**         |
| customSignupButton       |                                                        Component                                                        |     default      | set on your own components instead of default **signup button**        |
| TouchableComponent       |                                                        Pressable                                                        | TouchableOpacity | set on your own Touchable Component                                    |
| customTextInputs         |                                                        Component                                                        |     default      | set on your own **textinputs** instead of default ones                 |
| customSocialLoginButtons |                                                        Component                                                        |     default      | set on your own components instead of default **social login buttons** |
| emailTextInputProps      | [IInteractiveTextInputProps](https://github.com/WrathChaos/react-native-text-input-interactive#customization-optionals) |     default      | set/override the email text input props                                |
| passwordTextInputProps   | [IInteractiveTextInputProps](https://github.com/WrathChaos/react-native-text-input-interactive#customization-optionals) |     default      | set/override the password text input props                             |




### Default Social Login Buttons (Optional)

| Property        |   Type   |  Default  | Description                                                  |
|-----------------|:--------:|:---------:|--------------------------------------------------------------|
| onFacebookPress | function | undefined | set your own function for the `Facebook` social button press |
| onTwitterPress  | function | undefined | set your own function for the `Twitter` social button press  |
| onApplePress    | function | undefined | set your own function for the `Apple` social button press    |
| onDiscordPress  | function | undefined | set your own function for the `Discord` social button press  |

# Version 2 is still available

if you do not like the new design, you can still use the old design :)

```bash
npm i react-native-login-screen@2.1.4
```

<p align="left">
  <img alt="React Native Login Screen" src="assets/Screenshots/react-native-login-screen-v2.gif"  height="650" />
</p>

### Roadmap

- [x] ~~LICENSE~~
- [x] ~~Android Design Bug Fixes~~
- [x] ~~Configuration - Props COMING SOON~~
- [x] ~~Typescript Challenge!~~
- [x] ~~Remove some dependencies~~
- [x] ~~Better TextField Library Integration~~
- [x] ~~Password show/hide~~
- [x] ~~Customizable Components~~
- [x] ~~Customizable Styles~~
- [x] ~~Built-in Email Validation~~
- [x] ~~Built-in Password Validation~~
- [x] ~~Built-in Email Tooltip~~
- [x] ~~Built-in Password Tooltip~~
- [ ] Write an article about the lib on Medium
- [ ] Write an article about the lib on DevTO

## Credits

For the awesome photo thanks to [jcob nasyr from Unsplash](https://unsplash.com/photos/67sVPjK6Q7I)
Thank you so much for the eye icon [Torskaya](https://www.flaticon.com/authors/torskaya)


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Login Screen is available under the MIT license. See the LICENSE file for more info.
