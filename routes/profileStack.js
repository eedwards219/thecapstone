import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Profile from "../screens/profile";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="VOOOOOOTE" navigation={navigation} />
      };
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile"
    }
  },
  Resources: {
    screen: Resources,
    navigationOptions: {
      title: "Resources"
    }
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default ProfileStack;
