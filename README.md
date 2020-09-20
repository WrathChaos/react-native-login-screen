<img alt="React Native Login Screen" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-login-screen)

[![One Line of Code to Plug & Play | Fully Customizable Beautiful React Native Login Screen](https://img.shields.io/badge/-One%20Line%20of%20Code%20to%20Plug%20%26%20Play%20%7C%20Fully%20Customizable%20Beautiful%20React%20Native%20Login%20Screen-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-login-screen)

[![npm version](https://img.shields.io/npm/v/react-native-login-screen.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-login-screen)
[![npm](https://img.shields.io/npm/dt/react-native-login-screen.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-login-screen)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <img alt="React Native Login Screen" src="assets/Screenshots/example.png" width="49%" height="750" />
  <img alt="React Native Login Screen" src="assets/Screenshots/example.gif" width="49%" />
</p>

## Installation

Add the dependency:

```js
npm i react-native-login-screen
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```js
"react-native-spinkit": ">= 1.5.0",
"react-native-vector-icons": ">= 6.6.0",
"@freakycoder/react-native-helpers": "0.1.0",
"react-native-dynamic-vector-icons": ">= 0.2.1",
"react-native-material-textfield": "https://github.com/WrathChaos/react-native-material-textfield.git"
```

## Import

```js
import LoginScreen from "react-native-login-screen";
```

# Usage

### 😍 One Line Code to Get The Whole Login Screen 🎉

```jsx
<LoginScreen />
```

# Customizable Advanced Usage

Fully Customizable & Ready to Use Login Screen. You can customize anything on the login screen. Check the example :)

# Advanced Usage with Custom Children

Pretty advanced and fully customizable example of login screen

```jsx
<LoginScreen
  spinnerEnable
  spinnerVisibility={spinnerVisibility}
  labelTextStyle={{
    color: "#adadad",
    fontFamily: "Now-Bold",
  }}
  logoTextStyle={{
    fontSize: 27,
    color: "#fdfdfd",
    fontFamily: "Now-Black",
  }}
  loginButtonTextStyle={{
    color: "#fdfdfd",
    fontFamily: "Now-Bold",
  }}
  textStyle={{
    color: "#757575",
    fontFamily: "Now-Regular",
  }}
  signupStyle={{
    color: "#fdfdfd",
    fontFamily: "Now-Bold",
  }}
  usernameOnChangeText={(username) => console.log("Username: ", username)}
  onPressSettings={() => alert("Settings Button is pressed")}
  passwordOnChangeText={(password) => console.log("Password: ", password)}
  onPressLogin={() => {
    setSpinnerVisibility(true);
    setTimeout(() => {
      setSpinnerVisibility(false);
    }, 2000);
  }}
  onPressSignup={() => {
    console.log("onPressSignUp is pressed");
  }}
>
  <View
    style={{
      position: "relative",
      alignSelf: "center",
      marginTop: 64,
    }}
  >
    <Text style={{ color: "white", fontSize: 30 }}>
      Inside Login Screen Component
    </Text>
  </View>
</LoginScreen>
```

### Configuration - Props

#### Fundamentals

| Property                   |   Type    |    Default     | Description                                                              |
| -------------------------- | :-------: | :------------: | ------------------------------------------------------------------------ |
| source                     | local/uri | unsplash image | change the background image with local or uri prop                       |
| onPressLogin               | function  |   undefined    | set your own functional logic for `login button` is pressed              |
| onPressSettings            | function  |   undefined    | set your own functional logic for `settings button` is pressed           |
| usernameOnChangeText       | function  |   undefined    | set your own functional logic for `username` onChange value              |
| passwordOnChangeText       | function  |   undefined    | set your own functional logic for `password` onChange value              |
| loginButtonBackgroundColor |   color   |    #282828     | change the login button's background color                               |
| loginText                  |  string   |     LOGIN      | change the login button's text                                           |
| loginButtonTextStyle       |   style   |    default     | set your own style for the login button's text style                     |
| logoText                   |  string   |     GITHUB     | change the logo's text                                                   |
| logoComponent              | component |      Icon      | set your own logo component instead of default Icon                      |
| spinnerEnable              |   bool    |     false      | set the spinner enable this is **required** to use spinner               |
| spinnerVisibility          |   bool    |     false      | set the logic for spinner enabling / disabling for the login text button |
| spinnerColor               |   color   |    #fdfdfd     | change the spinner color                                                 |
| spinnerSize                |  number   |       30       | change the spinner size                                                  |
| spinnerType                |   bool    |     false      | change the spinner type                                                  |
| spinnerStyle               |   bool    |     false      | set your own style for the spinner itself                                |

#### Bottom Container Props

| Property               |   Type    |        Default         | Description                                                                  |
| ---------------------- | :-------: | :--------------------: | ---------------------------------------------------------------------------- |
| placeholder            |  string   |        default         | set the placeholder of the text input with both title and placeholder itself |
| IconComponent          | component |          Icon          | set your own component instead of vector-icons' Icon component               |
| backgroundColor        |   color   | rgba(255,255,255,0.45) | change the bottom container's background color                               |
| disableSettings        |  boolean  |         false          | disable the settings button if you do not want it                            |
| disableSignupButton    |  boolean  |         false          | disable the signup button if you do not want it                              |
| usernameIconComponent  | component |        default         | set any component instead of username icon component                         |
| passwordIconComponent  | component |        default         | set any component instead of password icon component                         |
| usernameTextInputValue |   value   |        default         | set username's text input value                                              |
| passwordTextInputValue |   value   |        default         | set password's text input value                                              |
| usernamePlaceholder    |  string   |        Username        | change the username text input's placeholder                                 |
| passwordPlaceholder    |  string   |        Password        | change the password text input's placeholder                                 |
| usernameTitle          |  string   |        Username        | change the username title                                                    |
| passwordTitle          |  string   |        Password        | change the password title                                                    |

# Change Log

## [Unreleased](https://github.com/WrathChaos/react-native-login-screen/tree/HEAD)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.3.5...HEAD)

**Implemented enhancements:**

- More Customizable Props [\#2](https://github.com/WrathChaos/react-native-login-screen/issues/2)

## [0.3.5](https://github.com/WrathChaos/react-native-login-screen/tree/0.3.5) (2020-01-26)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.3.4...0.3.5)

## [0.3.4](https://github.com/WrathChaos/react-native-login-screen/tree/0.3.4) (2020-01-24)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.3.3...0.3.4)

## [0.3.3](https://github.com/WrathChaos/react-native-login-screen/tree/0.3.3) (2020-01-23)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.3.2...0.3.3)

## [0.3.2](https://github.com/WrathChaos/react-native-login-screen/tree/0.3.2) (2020-01-09)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.3.1...0.3.2)

## [0.3.1](https://github.com/WrathChaos/react-native-login-screen/tree/0.3.1) (2020-01-09)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.3.0...0.3.1)

## [0.3.0](https://github.com/WrathChaos/react-native-login-screen/tree/0.3.0) (2020-01-09)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.2.5...0.3.0)

- Battle Tested 💪
- New settings button 😏
- onPress is not available anymore, `onPressLogin` is available instead.

## [0.2.5](https://github.com/WrathChaos/react-native-login-screen/tree/0.2.5) (2019-12-16)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.2.4...0.2.5)

## [0.2.4](https://github.com/WrathChaos/react-native-login-screen/tree/0.2.4) (2019-12-15)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.2.2...0.2.4)

## [0.2.2](https://github.com/WrathChaos/react-native-login-screen/tree/0.2.2) (2019-12-15)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.2.1...0.2.2)

## [0.2.1](https://github.com/WrathChaos/react-native-login-screen/tree/0.2.1) (2019-12-12)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.2.0...0.2.1)

## [0.2.0](https://github.com/WrathChaos/react-native-login-screen/tree/0.2.0) (2019-12-09)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.1.12...0.2.0)

## [0.1.12](https://github.com/WrathChaos/react-native-login-screen/tree/0.1.12) (2019-12-05)

[Full Changelog](https://github.com/WrathChaos/react-native-login-screen/compare/0.1.11...0.1.12)

## [0.1.11](https://github.com/WrathChaos/react-native-login-screen/tree/0.1.11) (2019-09-29)

\* _This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)_

### Roadmap

- [x] ~~LICENSE~~
- [x] ~~Android Design Bug Fixes~~
- [x] ~~Configuration - Props COMING SOON~~
- [x] ~~Typescript Challenge!~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Login Screen is available under the MIT license. See the LICENSE file for more info.
