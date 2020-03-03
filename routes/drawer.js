import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// stacks
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import driverProfile from "../screens/driverForm";
import UserProfileView from "../screens/profile";
import Resources from "../screens/resources";
import Home from "../screens/home";
import SignUp from "../screens/signUp";
import SignIn from "../screens/signIn";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Resources: {
    screen: Resources
  },
  MyProfile: {
    screen: UserProfileView
  },
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
});

export default createAppContainer(RootDrawerNavigator);
