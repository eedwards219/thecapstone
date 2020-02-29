import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";
import { connect, Provider } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import store from "./store/index.js";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
